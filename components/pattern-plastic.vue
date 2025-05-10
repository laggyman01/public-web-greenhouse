<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Section: Product Images -->
        <v-row>
          <v-col cols="12" md="6">
            <!-- Main Product Image -->
            <!-- <v-img
              :src="mainImageUrl"
              aspect-ratio="1.6"
              cover
              class="mb-4 rounded border"
              alt="รูปภาพสินค้าหลัก"
              key="main-image"
            ></v-img> -->

            <!-- Thumbnail Images -->
            <v-row dense>
              <v-col
                v-for="(imageInfo, index) in productImages"
                :key="index"
                cols="4"
              >
                <!-- <v-img
                  :src="imageInfo.thumb"
                  aspect-ratio="1.6"
                  cover
                  class="rounded border thumbnail"
                  @click="changeMainImage(imageInfo)"
                  style="cursor: pointer;"
                  :alt="`รูปภาพตัวอย่าง ${index + 1}`"
                ></v-img> -->
              </v-col>
            </v-row>
          </v-col>

          <!-- Section: Product Details -->
          <v-col cols="12" md="6">
            <!-- Product Tag -->
            <v-chip
              color="green"
              text-color="white"
              size="small"
              class="mb-2"
              label
            >
              NEW
            </v-chip>

            <!-- Product Title -->
            <div class="text-h5 font-weight-bold">
              พลาสติกคลุมโรงเรือน UV 7% หนา 150 ไมครอน
            </div>
            <div class="text-subtitle-1 text-grey-darken-1 mt-1">
              (แบรนด์ตัวอย่าง)
            </div>

            <!-- Product Price -->
            <div class="text-h5 font-weight-bold mt-4 mb-4">
              ฿1,250.00
            </div>

            <!-- Product Description -->
            <p class="text-body-1">
              พลาสติก PE UV Stabilizer คุณภาพสูง สำหรับคลุมโรงเรือนเพาะปลูก ช่วยกรองแสงแดด
              ป้องกันรังสียูวี เพิ่มประสิทธิภาพในการควบคุมอุณหภูมิและความชื้นภายในโรงเรือน เนื้อพลาสติกเหนียว
              ทนทานต่อแรงดึงและการฉีกขาด อายุการใช้งานยาวนาน
            </p>

            <!-- Product Features -->
            <div class="text-subtitle-1 font-weight-bold mt-4 mb-2">จุดเด่นสินค้า</div>
            <ul class="pl-0">
              <li v-for="feature in productFeatures" :key="feature" class="d-flex align-start mb-1">
                <v-icon color="success" size="small" class="mr-2 mt-1">mdi-check-circle</v-icon>
                <span class="text-body-2">{{ feature }}</span>
              </li>
            </ul>

            <v-divider class="my-4"></v-divider>

            <!-- Additional Information -->
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-check-decagram</v-icon>
              <span class="text-body-2">สินค้าพร้อมส่ง รับประกันคุณภาพ</span>
            </div>
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-shield-check</v-icon>
              <span class="text-body-2">การรับประกัน: 1 ปี (ตามเงื่อนไข)</span>
            </div>
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" class="mr-2">mdi-truck-fast</v-icon>
              <span class="text-body-2">การจัดส่งสินค้า: จัดส่งทั่วประเทศ</span>
            </div>

            <v-divider class="my-4"></v-divider>

            <!-- Social Share -->
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

        <!-- Section: Product Specifications -->
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

            <!-- Warranty and Support -->
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

            <!-- Product Remarks -->
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

// Product Images
const productImages = ref([
  { thumb: 'https://picsum.photos/id/10/200/125', large: 'https://picsum.photos/id/10/800/500' },
  { thumb: 'https://picsum.photos/id/20/200/125', large: 'https://picsum.photos/id/20/800/500' },
  { thumb: 'https://picsum.photos/id/30/200/125', large: 'https://picsum.photos/id/30/800/500' },
]);

const mainImageUrl = ref(productImages.value[0]?.large || '');

// Product Features
const productFeatures = ref([
  'ป้องกันรังสี UV 7% ช่วยยืดอายุการใช้งาน',
  'ผลิตจากพลาสติก PE คุณภาพสูง หนา 150 ไมครอน',
  'เนื้อเหนียว ทนทาน ไม่ฉีกขาดง่าย',
  'ช่วยรักษาอุณหภูมิและความชื้นในโรงเรือน',
  'เพิ่มผลผลิตและคุณภาพของพืช',
]);

const changeMainImage = (imageInfo) => {
  mainImageUrl.value = imageInfo.large;
};

// Social Share Links
const currentPageUrl = computed(() => (typeof window !== 'undefined' ? window.location.href : ''));
const facebookShareHref = computed(() => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentPageUrl.value)}`);

// Product Specifications
const productSpecifications = ref([
  { name: 'ความหนา', value: '150 ไมครอน' },
  { name: 'สารป้องกัน UV', value: '7%' },
  { name: 'วัสดุ', value: 'พลาสติก PE (Polyethylene)' },
  { name: 'สี', value: 'ใส / ขาวขุ่น' },
  { name: 'หน้ากว้าง (เมตร)', value: '4, 5, 6, 8' },
  { name: 'ความยาว (เมตร)', value: '50, 100' },
]);

// Warranty and Support
const productSupport = ref([
  { name: 'Warranty', value: '1 Year (ตามเงื่อนไขผู้ผลิต)' },
  { name: 'Support', value: 'สอบถามปัญหาทางเทคนิคผ่าน Line หรือ Facebook' },
]);

// Product Remarks
const productRemarks = ref([
  'ทางบริษัทฯ จะไม่รับผิดชอบหากเกิดการผิดพลาดของข้อมูล.',
  'ลูกค้าควรตรวจสอบรายละเอียดสินค้าก่อนตัดสินใจสั่งซื้อ.',
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