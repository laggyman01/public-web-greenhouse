<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <!-- <v-img
              :src="mainImageUrl"
              aspect-ratio="1.6"
              cover
              class="mb-4 rounded border"
              alt="รูปภาพรางและสปริงล็อคโรงเรือน"
            ></v-img> -->

            <v-row dense>
              <v-col v-for="(imageInfo, index) in productImages" :key="index" cols="4">
                <!-- <v-img
                  :src="imageInfo.thumb"
                  aspect-ratio="1.6"
                  cover
                  class="rounded border thumbnail"
                  @click="changeMainImage(imageInfo)"
                  style="cursor: pointer;"
                  :alt="`รูปภาพตัวอย่างราง/สปริง ${index + 1}`"
                ></v-img> -->
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-chip color="green" text-color="white" size="small" class="mb-2" label>
              NEW
            </v-chip>

            <div class="text-h5 font-weight-bold">
              ชุดรางล็อคและสปริงล็อค สำหรับโรงเรือน
            </div>

            <div class="text-subtitle-1 text-grey-darken-1 mt-1">(แบรนด์ตัวอย่าง)</div>

            <div class="text-h5 font-weight-bold mt-4 mb-4">
              ฿150.00 / ชุด (ราง 2ม. + สปริง 2ม.)
            </div>

            <p class="text-body-1">
              ชุดรางและสปริงสำหรับยึดพลาสติกคลุมโรงเรือนหรือมุ้งกันแมลงเข้ากับโครงสร้าง
              ผลิตจากวัสดุคุณภาพดี ติดตั้งง่าย ช่วยให้การติดตั้งสะดวกรวดเร็ว
              และยึดวัสดุคลุมได้อย่างแน่นหนา ทนทานต่อสภาพอากาศ
            </p>

            <div class="text-subtitle-1 font-weight-bold mt-4 mb-2">จุดเด่นสินค้า</div>
            <ul class="pl-0">
              <li v-for="feature in productFeatures" :key="feature" class="d-flex align-start mb-1">
                <v-icon color="success" size="small" class="mr-2 mt-1">mdi-check-circle</v-icon>
                <span class="text-body-2">{{ feature }}</span>
              </li>
            </ul>

            <v-divider class="my-4"></v-divider>

            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-check-decagram</v-icon>
              <span class="text-body-2">สินค้าพร้อมส่ง คุณภาพมาตรฐาน</span>
            </div>
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-cogs</v-icon>
              <span class="text-body-2">ใช้งานร่วมกับฟิล์ม/มุ้ง/สแลน</span>
            </div>
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-truck-fast</v-icon>
              <span class="text-body-2">การจัดส่งสินค้า: จัดส่งทั่วประเทศ</span>
            </div>

            <v-divider class="my-4"></v-divider>

            <div class="d-flex align-center">
              <span class="text-body-2 mr-2">สอบถามได้ที่นี้:</span>
              <a
                :href="facebookShareHref"
                target="_blank"
                rel="noopener noreferrer"
                class="share-link-button mx-1"
              >
                <v-icon size="small">mdi-facebook</v-icon>
              </a>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-sheet color="grey-lighten-2" rounded="lg" class="pa-3 mt-6 mb-4">
              <v-row align="center" no-gutters>
                <v-col>
                  <span class="text-h6 d-flex justify-center">ข้อมูลสินค้า</span>
                </v-col>
              </v-row>
            </v-sheet>

            <p class="text-caption text-grey mb-4">Reference From: www.example-brand.com</p>

            <div class="text-h6 font-weight-bold mb-3">SPECIFICATION</div>

            <div class="specification-list">
              <v-row
                v-for="(spec, index) in productSpecifications"
                :key="index"
                no-gutters
                class="spec-item"
              >
                <v-col cols="5" sm="4" md="3" class="font-weight-medium text-grey-darken-1 pr-2">
                  {{ spec.name }}
                </v-col>
                <v-col cols="7" sm="8" md="9" class="pl-4">
                  {{ spec.value }}
                </v-col>
              </v-row>
            </div>

            <div class="mt-4">
              <v-row
                v-for="(support, index) in productSupport"
                :key="`support-${index}`"
                no-gutters
                class="spec-item"
              >
                <v-col cols="5" sm="4" md="3" class="font-weight-medium text-grey-darken-1 pr-2">
                  {{ support.name }}
                </v-col>
                <v-col cols="7" sm="8" md="9" class="pl-4">
                  {{ support.value }}
                </v-col>
              </v-row>
            </div>

            <div class="text-subtitle-1 font-weight-bold mt-6 mb-2">หมายเหตุ :</div>
            <ol class="pl-5 remark-list">
              <li
                v-for="(remark, index) in productRemarks"
                :key="`remark-${index}`"
                class="text-body-2 mb-1"
              >
                {{ remark }}
              </li>
            </ol>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue';

const productImages = ref([
  // { thumb: 'https://picsum.photos/id/211/200/125', large: 'https://picsum.photos/id/211/800/500' },
  // { thumb: 'https://picsum.photos/id/225/200/125', large: 'https://picsum.photos/id/225/800/500' },
  // { thumb: 'https://picsum.photos/id/239/200/125', large: 'https://picsum.photos/id/239/800/500' },
]);

const mainImageUrl = ref(productImages.value[0]?.large || '');

const productFeatures = ref([
  'รางเหล็กชุบกัลวาไนซ์ ป้องกันสนิม',
  'สปริงลวดเหล็กเคลือบ PVC ลดการเสียดสี',
  'ติดตั้งง่าย เพียงกดสปริงลงในราง',
  'ยึดฟิล์มหรือมุ้งได้แน่น ไม่หลุดง่าย',
  'ทนทาน ใช้งานได้ยาวนาน',
  'สามารถถอดและใส่ซ้ำได้',
]);

const changeMainImage = (imageInfo) => {
  mainImageUrl.value = imageInfo.large;
};

const currentPageUrl = computed(() => (typeof window !== 'undefined' ? window.location.href : ''));

const facebookShareHref = computed(() => {
  const urlToShare = currentPageUrl.value || 'http://example.com/this-product';
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
});

const productSpecifications = ref([
  { name: 'วัสดุราง', value: 'เหล็กชุบกัลวาไนซ์ (Galvanized Steel)' },
  { name: 'ความหนาราง', value: '0.7 - 1.0 มม. (ตัวอย่าง)' },
  { name: 'ความยาวราง/เส้น', value: '2 เมตร, 4 เมตร, 6 เมตร (ตัวอย่าง)' },
  { name: 'วัสดุสปริง', value: 'ลวดเหล็ก (Steel Wire)' },
  { name: 'การเคลือบสปริง', value: 'PVC สีดำ/ขาว หรือ ชุบกัลวาไนซ์' },
  { name: 'ความยาวสปริง/เส้น', value: '2 เมตร (ตัวอย่าง)' },
  { name: 'การใช้งาน', value: 'ยึดฟิล์ม, มุ้ง, สแลน กับราง' },
]);

const productSupport = ref([
  { name: 'Warranty', value: 'ไม่ระบุ (อุปกรณ์ติดตั้ง)' },
  { name: 'Support', value: 'สอบถามข้อมูลเพิ่มเติม Line หรือ Facebook' },
]);

const productRemarks = ref([
  'ทางบริษัทฯ จะไม่รับผิดชอบหากเกิดการผิดพลาดของข้อมูล.',
  'ลูกค้าควรตรวจสอบรายละเอียดสินค้าก่อนตัดสินใจสั่งซื้อ.',
  'สินค้าที่เป็นสินค้าใหม่และผ่านตัวแทนจำหน่ายที่ได้รับการแต่งตั้งจากผู้ผลิต.',
  'ราคาสินค้าอาจมีการเปลี่ยนแปลงขึ้นอยู่กับตัวแทนจำหน่าย.',
  'คุณสมบัติอาจมีการเปลี่ยนแปลง กรุณาสอบถามได้ที่ตัวแทนจำหน่าย.',
  'รูปภาพใช้ในการโฆษณาเท่านั้น กรุณาตรวจสอบสอบได้ที่ตัวแทนจำหน่าย.',
  'ทางบริษัทไม่มีนโยบายการคืนเงินที่ท่านได้ชำระผ่านตัวแทนจำหน่าย.',
]);
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  padding: 4px 0;
}

.thumbnail {
  transition: opacity 0.3s ease;
}

.thumbnail:hover {
  opacity: 0.8;
}

.border {
  border: 1px solid #eee;
}

.share-link-button {
  color: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  width: 32px;
  height: 32px;
}

.share-link-button:hover {
  background-color: rgba(0, 0, 0, 0.08);
}

.spec-item {
  border-bottom: 1px solid #e0e0e0;
}

.specification-list .spec-item:last-child,
.mt-4 .spec-item:last-child {
  border-bottom: none;
}

.spec-item > .v-col {
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 0.9rem;
}

.remark-list li {
  line-height: 1.6;
  padding-bottom: 4px;
}
</style>