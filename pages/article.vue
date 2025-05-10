<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <div class="text-h6 font-weight-bold mb-3">หมวดหมู่</div>
            <v-divider class="mb-4"></v-divider>
            <div v-for="category in availableCategories" :key="category.id">
              <v-checkbox
                v-model="selectedCategories"
                :label="category.name"
                :value="category.id"
                density="compact"
                hide-details
              ></v-checkbox>
            </div>
             <v-btn
               v-if="selectedCategories.length > 0"
               variant="text"
               color="grey"
               size="small"
               @click="selectedCategories = []"
               class="mt-4"
             >
               ล้างตัวกรอง
             </v-btn>
          </v-col>

          <v-col cols="12" md="9">
            <div class="text-body-2 text-grey mb-4">
              พบ {{ filteredArticles.length }} บทความ
            </div>

            <v-card
              v-for="article in paginatedArticles"
              :key="article.id"
              class="mb-4 article-card-bottom-border" elevation="0"                          >
              <v-row no-gutters>
                <v-col cols="12" sm="4" md="3">
                  <!-- <v-img
                    :src="article.imageUrl"
                    height="150px"
                    cover
                    class="article-image"
                  ></v-img> -->
                </v-col>

                <v-col cols="12" sm="8" md="9">
                  <v-card-item>
                    <v-chip v-if="article.category" size="small" color="blue-grey" variant="tonal" class="mb-2">
                       {{ article.category }}
                    </v-chip>
                    <div class="text-h6 font-weight-bold mb-1 article-title">
                       <a :href="article.link" target="_blank" class="text-decoration-none text-grey-darken-3">
                         {{ article.title }}
                       </a>
                    </div>
                    <p class="text-body-2 text-medium-emphasis mb-2">
                      {{ article.excerpt }}
                    </p>
                    <v-btn
                      variant="text"
                      size="small"
                      color="primary"
                      :href="article.link"
                      target="_blank"
                      append-icon="mdi-arrow-right"
                    >
                      อ่านต่อ
                    </v-btn>
                  </v-card-item>
                </v-col>
              </v-row>
            </v-card>
            <v-alert
              v-if="filteredArticles.length === 0 && relatedArticles.length > 0"
              type="info"
              variant="tonal"
              class="mt-4"
            >
              หาบทความไม่ได้
            </v-alert>
            <div class="text-center mt-8 mb-4" v-if="totalPages > 1">
               <v-pagination
                 v-model="currentPage"
                 :length="totalPages"
                 :total-visible="7"
                 rounded="circle"
               >
               </v-pagination>
            </div>
            </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

// --- ข้อมูล หมวดหมู่ทั้งหมด ---
const availableCategories = ref([
  { id: 'knowledge', name: 'เกร็ดความรู้' },
  { id: 'news', name: 'ข่าวสารน่ารู้' },
  { id: 'reviews', name: 'รีวิวสินค้า' }
]);

// --- ข้อมูล บทความทั้งหมด ---
const relatedArticles = ref([
  { id: 1, imageUrl: 'https://picsum.photos/id/301/300/200', title: 'เทคนิคการติดตั้งรางและสปริงล็อคโรงเรือนให้แน่นหนา', category: 'เกร็ดความรู้', categoryId: 'knowledge', excerpt: 'แนะนำขั้นตอนและเคล็ดลับ...', link: '#' },
  { id: 2, imageUrl: 'https://picsum.photos/id/315/300/200', title: 'การเลือกใช้วัสดุมุงหลังคาโรงเรือนให้เหมาะสม', category: 'ข่าวสารน่ารู้', categoryId: 'news', excerpt: 'เปรียบเทียบข้อดีข้อเสีย...', link: '#' },
  { id: 3, imageUrl: 'https://picsum.photos/id/322/300/200', title: 'ดูแลโรงเรือนอย่างไรให้ใช้งานได้ยาวนาน', category: 'เกร็ดความรู้', categoryId: 'knowledge', excerpt: 'รวมวิธีบำรุงรักษา...', link: '#' },
  { id: 4, imageUrl: 'https://picsum.photos/id/338/300/200', title: 'รีวิว: พัดลมระบายอากาศโรงเรือน รุ่น XYZ', category: 'รีวิวสินค้า', categoryId: 'reviews', excerpt: 'ทดสอบประสิทธิภาพพัดลม...', link: '#' },
  { id: 5, imageUrl: 'https://picsum.photos/id/340/300/200', title: 'ข่าว: เทรนด์ใหม่ของการปลูกพืชในโรงเรือนอัจฉริยะ', category: 'ข่าวสารน่ารู้', categoryId: 'news', excerpt: 'สำรวจเทคโนโลยีล่าสุด...', link: '#' },
  { id: 6, imageUrl: 'https://picsum.photos/id/345/300/200', title: 'เกร็ดความรู้: การจัดการความชื้นในโรงเรือน', category: 'เกร็ดความรู้', categoryId: 'knowledge', excerpt: 'วิธีควบคุมความชื้นสัมพัทธ์...', link: '#' },
  { id: 7, imageUrl: 'https://picsum.photos/id/351/300/200', title: 'รีวิว: ระบบน้ำหยดอัตโนมัติ ABC', category: 'รีวิวสินค้า', categoryId: 'reviews', excerpt: 'ใช้งานง่ายแค่ไหน ประหยัดน้ำจริงหรือไม่...', link: '#' },
  { id: 8, imageUrl: 'https://picsum.photos/id/355/300/200', title: 'เทคนิคการเลือกขนาดโรงเรือนให้เหมาะสมกับพื้นที่', category: 'เกร็ดความรู้', categoryId: 'knowledge', excerpt: 'ปัจจัยที่ต้องพิจารณา...', link: '#' },
  { id: 9, imageUrl: 'https://picsum.photos/id/360/300/200', title: 'ข่าว: ราคาพืชผลเกษตรล่าสุด (พ.ค. 2025)', category: 'ข่าวสารน่ารู้', categoryId: 'news', excerpt: 'สรุปภาพรวมราคาผักและผลไม้...', link: '#' },
  { id: 10, imageUrl: 'https://picsum.photos/id/366/300/200', title: 'รีวิว: ปุ๋ยอินทรีย์ยี่ห้อ GreenGrow', category: 'รีวิวสินค้า', categoryId: 'reviews', excerpt: 'ผลการทดลองใช้กับพืชผักสวนครัว...', link: '#' },
  { id: 11, imageUrl: 'https://picsum.photos/id/370/300/200', title: 'เกร็ดความรู้: การป้องกันโรคพืชในระบบปิด', category: 'เกร็ดความรู้', categoryId: 'knowledge', excerpt: 'วิธีสร้างสภาพแวดล้อมที่ไม่เอื้อต่อเชื้อโรค...', link: '#' },
  { id: 12, imageUrl: 'https://picsum.photos/id/375/300/200', title: 'ทำไมต้องใช้รางและสปริงล็อค?', category: 'เกร็ดความรู้', categoryId: 'knowledge', excerpt: 'ข้อดีเมื่อเทียบกับการยึดแบบเดิม...', link: '#' }
]);

// --- ตัวแปรเก็บ ID หมวดหมู่ที่เลือก ---
const selectedCategories = ref([]);

// --- การตั้งค่า Pagination ---
const currentPage = ref(1);
const itemsPerPage = ref(10);

// --- Computed Property สำหรับเรียงบทความ (ใหม่ไปเก่า / Reverse) ---
const sortedArticles = computed(() => {
  return [...relatedArticles.value].reverse();
});

// --- Computed Property สำหรับกรองบทความ (ใช้ sortedArticles) ---
const filteredArticles = computed(() => {
  const articlesToFilter = sortedArticles.value;
  if (selectedCategories.value.length === 0) {
    return articlesToFilter;
  }
  return articlesToFilter.filter(article =>
    selectedCategories.value.includes(article.categoryId)
  );
});

// --- Computed Property คำนวณจำนวนหน้าทั้งหมด ---
const totalPages = computed(() => {
  if (itemsPerPage.value <= 0) return 0;
  return Math.ceil(filteredArticles.value.length / itemsPerPage.value);
});

// --- Computed Property สำหรับแสดงบทความในหน้าปัจจุบัน ---
const paginatedArticles = computed(() => {
  if (filteredArticles.value.length === 0 || itemsPerPage.value <= 0) {
    return [];
  }
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  if (startIndex >= filteredArticles.value.length) {
     return [];
  }
  const endIndex = startIndex + itemsPerPage.value;
  return filteredArticles.value.slice(startIndex, endIndex);
});

// --- ฟังก์ชันสำหรับ Reset หน้าเมื่อมีการ Filter ---
watch(selectedCategories, () => {
  currentPage.value = 1;
});

// --- ฟังก์ชันสำหรับ Reset หน้าเมื่อจำนวนหน้าลดลง ---
watch(totalPages, (newTotalPages) => {
  if (currentPage.value > newTotalPages && newTotalPages > 0) {
    currentPage.value = newTotalPages;
  } else if (newTotalPages === 0) {
      currentPage.value = 1;
  }
});

</script>

<style scoped>
.article-title a:hover {
  color: #1976D2 !important; /* สี primary ของ Vuetify (ตัวอย่าง) */
  text-decoration: underline !important;
}

@media (min-width: 600px) {
  .article-image {
    height: 100% !important; /* ทำให้รูปภาพเต็มความสูงของ card item */
  }
}

/* ลดช่องว่างระหว่าง checkbox */
.v-checkbox {
  margin-bottom: -20px;
}

/* --- CSS สำหรับดีไซน์เส้นขีดล่าง --- */
.article-card-bottom-border {
  border: none !important;
  border-radius: 0 !important; /* เอาขอบมนออก */
  box-shadow: none !important; /* เอาเงาออก */
  border-bottom: 1px solid #e0e0e0 !important; /* ใส่เส้นขีดล่าง */
}

/* Card สุดท้ายไม่มีเส้น */
.article-card-bottom-border:last-child {
   border-bottom: none !important;
}
/* --------------------------------- */

</style>