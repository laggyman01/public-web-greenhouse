<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-h4 font-weight-bold mt-4 mb-6 text-center">ติดต่อเรา</div>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="4" class="text-center">
            <div class="info-block">
              <div class="d-flex align-center justify-start mb-1">
                <v-icon color="primary" class="mr-2">mdi-map-marker</v-icon>
                <div class="text-h6 font-weight-medium">ที่อยู่</div>
              </div>
              <div class="text-body-1 text-left">
                155/7-8 หมู่ที่ 3 ตำบลบางกร่าง<br />
                อำเภอเมืองนนทบุรี<br />
                จังหวัดนนทบุรี 11130
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="text-center">
            <div class="info-block">
              <div class="d-flex align-center justify-start mb-1">
                <v-icon color="primary" class="mr-2">mdi-clock-outline</v-icon>
                <div class="text-h6 font-weight-medium">เปิดบริการ</div>
              </div>
              <div class="text-body-1 text-left">
                จันทร์ - เสาร์: 10.30 - 19.00 น.<br />
                อาทิตย์: ปิดทำการหน้าร้าน<br />
                (ติดต่อช่องทางออนไลน์ได้)
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="text-center">
            <div class="info-block">
              <div class="d-flex align-center justify-start mb-1">
                <v-icon color="primary" class="mr-2">mdi-phone</v-icon>
                <div class="text-h6 font-weight-medium">ติดต่อเรา</div>
              </div>
              <div class="text-body-1 text-left">
                โทรศัพท์ / แฟกซ์:
                <a href="tel:020366366">02-036-xxxx</a><br />
                มือถือ:
                <a href="tel:0815569582">081-556-xxxx</a>,
                <a href="tel:0813475405">081-347-xxxx</a>
              </div>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <div class="text-h6 font-weight-medium mb-3 text-center">แผนที่สำนักงานใหญ่</div>
            <div class="map-container">
              <iframe
                :src="googleMapEmbedUrl"
                width="100%"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

// 1. เปลี่ยน URL นี้เป็น URL ที่ถูกต้องจาก Google Maps Embed API
const googleMapEmbedUrl = ref('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.554599969755!2d100.5293021757321!3d13.805702596041982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29c75060d4041%3A0xfc13607ab4d12c88!2sNiche%20Pride%20Tao%20Poon%20-%20Interchange!5e0!3m2!1sen!2sth!4v1746497653110!5m2!1sen!2sth');


</script>

<style scoped>
.map-container {
  overflow: hidden;
  position: relative;
  height: 450px; 
  border: 1px solid #eee;
}

.map-container iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}

/* รวมข้อมูลในแต่ละก้อน */
.info-block {
  display: inline-block; 
  line-height: 1.6;
  max-width: 300px; 
  margin: 0 auto 16px; 
  vertical-align: top; 
}

.info-block a {
  color: inherit;
  text-decoration: none;
}

.info-block a:hover {
  text-decoration: underline;
  color: #1976D2; 
}


@media (max-width: 959px) {

}
</style>