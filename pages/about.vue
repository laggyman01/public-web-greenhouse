<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <div class="text-h4 font-weight-bold mt-8 mb-4 text-center black--text">
          เกี่ยวกับ รุ่งทรัพย์เกษตรภัณฑ์
        </div>
        <div class="text-h6 font-weight-regular mb-8 text-center grey--text text--darken-2">
          เพื่อนคู่คิดเกษตรกร เพื่อผลผลิตที่ยั่งยืน
        </div>

        <p class="text-body-1 page-section grey--text text--darken-3">
          ยินดีต้อนรับสู่ <strong class="black--text">รุ่งทรัพย์เกษตรภัณฑ์</strong> ผู้เชี่ยวชาญและจัดจำหน่ายผลิตภัณฑ์คุณภาพเพื่อการเกษตรสมัยใหม่ เรามุ่งมั่นที่จะเป็นส่วนหนึ่งในการสนับสนุนเกษตรกรไทยให้สามารถเพิ่มผลผลิตและพัฒนาคุณภาพชีวิตได้อย่างยั่งยืน ด้วยประสบการณ์และความเข้าใจในความต้องการของภาคเกษตรกรรม เราคัดสรรสินค้าที่ดีที่สุดเพื่อตอบโจทย์ทุกการใช้งานของคุณ
        </p>

        <div class="text-h5 font-weight-medium mt-10 mb-5 section-title black--text">
          ความเชี่ยวชาญและผลิตภัณฑ์ของเรา
        </div>
        <p class="text-body-1 page-section grey--text text--darken-2">
          ที่ รุ่งทรัพย์เกษตรภัณฑ์ เราให้ความสำคัญกับคุณภาพและความทนทานของสินค้า โดยเฉพาะอย่างยิ่งผลิตภัณฑ์หลักของเรา:
        </p>
        <v-row class="page-section">
          <v-col cols="12" md="6">
            <div class="product-card pa-4 d-flex flex-column">
              <div>
                <div class="text-h6 font-weight-medium mb-3 d-flex align-center black--text">
                  <v-icon start color="green-darken-2">mdi-hexagon-multiple-outline</v-icon>
                  มุ้งโรงเรือนและมุ้งเกษตร
                </div>
                <p class="text-body-2 grey--text text--darken-3 mb-4">
                  เรามีมุ้งหลากหลายประเภท ไม่ว่าจะเป็นมุ้งกันแมลง มุ้งกรองแสง (สแลน) ที่ช่วยปกป้องพืชผลของคุณจากศัตรูพืชและสภาพอากาศที่ไม่เอื้ออำนวย ผลิตจากวัสดุคุณภาพสูง ทนทานต่อการใช้งาน ช่วยสร้างสภาพแวดล้อมที่เหมาะสมที่สุดสำหรับการเจริญเติบโตของพืช
                </p>
              </div>
              <v-spacer></v-spacer>
              <div class="mt-auto text-right">
                <v-btn
                  color="green-darken-2"
                  variant="text"
                  append-icon="mdi-arrow-right"
                  @click="$router.push('/products/nets')"
                  class="read-more-btn"
                >
                  อ่านต่อ
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="product-card pa-4 d-flex flex-column">
              <div>
                <div class="text-h6 font-weight-medium mb-3 d-flex align-center black--text">
                  <v-icon start color="green-darken-2">mdi-greenhouse</v-icon>
                  พลาสติกคลุมโรงเรือน
                </div>
                <p class="text-body-2 grey--text text--darken-3 mb-4">
                  พลาสติกของเราถูกออกแบบมาเพื่อการใช้งานในโรงเรือนโดยเฉพาะ มีคุณสมบัติในการกระจายแสงที่เหมาะสม ทนต่อรังสียูวี ช่วยรักษาอุณหภูมิและความชื้นภายในโรงเรือนให้คงที่ ปกป้องพืชจากสภาพอากาศแปรปรวน ยืดอายุการใช้งานของโรงเรือน และส่งเสริมให้พืชผลมีคุณภาพดี
                </p>
              </div>
              <v-spacer></v-spacer>
              <div class="mt-auto text-right">
                <v-btn
                  color="green-darken-2"
                  variant="text"
                  append-icon="mdi-arrow-right"
                  @click="$router.push('/products/plastics')"
                  class="read-more-btn"
                >
                  อ่านต่อ
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>

        <div class="text-h5 font-weight-medium mt-10 mb-5 section-title black--text">
          พันธกิจของเรา (Our Mission)
        </div>
        <div class="quote-block pa-5 my-4 page-section quote-green"> <p class="text-h6 font-italic font-weight-regular grey--text text--darken-3">
            "ส่งมอบ<a @click="$router.push('/products')" class="internal-link mission-link">ผลิตภัณฑ์การเกษตรคุณภาพสูง</a> พร้อมองค์ความรู้และการบริการที่จริงใจ เพื่อเสริมสร้างศักยภาพและสนับสนุนความสำเร็จของเกษตรกรไทยในทุกขั้นตอน"
          </p>
          <div class="text-right mt-4">
            <v-btn
              variant="outlined"
              @click="$router.push('/blog/our-mission-in-action')" size="small"
              class="learn-more-btn btn-brown-outlined" >
              เรียนรู้เพิ่มเติมเกี่ยวกับพันธกิจ
            </v-btn>
          </div>
        </div>


        <div class="text-h5 font-weight-medium mt-10 mb-5 section-title black--text">
          วิสัยทัศน์ของเรา (Our Vision)
        </div>
        <div class="quote-block pa-5 my-4 page-section quote-green"> <p class="text-h6 font-italic font-weight-regular grey--text text--darken-3">
            "เป็นผู้นำด้าน<a @click="$router.push('/innovations')" class="internal-link mission-link">นวัตกรรม</a>และเป็นที่ไว้วางใจในกลุ่มผลิตภัณฑ์เพื่อโรงเรือนและการเกษตร ที่เกษตรกรทั่วประเทศนึกถึงเมื่อต้องการ<a @click="$router.push('/solutions')" class="internal-link mission-link">โซลูชันที่คุ้มค่าและยั่งยืน</a>"
          </p>
          <div class="text-right mt-4">
            <v-btn
              variant="outlined"
              @click="$router.push('/blog/our-vision-for-the-future')" size="small"
              class="learn-more-btn btn-brown-outlined" >
              อ่านเพิ่มเติมเกี่ยวกับวิสัยทัศน์
            </v-btn>
          </div>
        </div>


        <div class="text-h5 font-weight-medium mt-10 mb-6 section-title black--text">
          ทำไมต้องเลือก รุ่งทรัพย์เกษตรภัณฑ์?
        </div>
        <v-list lines="two" class="page-section why-choose-us-list" bg-color="transparent">
          <v-list-item class="mb-3">
            <template v-slot:prepend>
              <v-icon color="green-darken-2">mdi-medal-outline</v-icon>
            </template>
            <v-list-item-title class="font-weight-medium black--text">
              <a @click="$router.push('/all-products')" class="internal-link list-link">สินค้าคุณภาพ</a>
            </v-list-item-title>
            <v-list-item-subtitle class="grey--text text--darken-3">เราคัดสรรแต่วัสดุเกรดเอ มั่นใจได้ในความทนทานและประสิทธิภาพการใช้งาน</v-list-item-subtitle>
          </v-list-item>
          <v-divider class="my-1"></v-divider>
          <v-list-item class="mb-3">
              <template v-slot:prepend>
              <v-icon color="green-darken-2">mdi-account-star-outline</v-icon>
            </template>
            <v-list-item-title class="font-weight-medium black--text">
                <a @click="$router.push('/contact-us#expertise')" class="internal-link list-link">ความเชี่ยวชาญ</a>
            </v-list-item-title>
            <v-list-item-subtitle class="grey--text text--darken-3">ทีมงานของเรามีความรู้และประสบการณ์ พร้อมให้คำแนะนำที่เหมาะสมกับการใช้งานของคุณ</v-list-item-subtitle>
          </v-list-item>
          <v-divider class="my-1"></v-divider>
          <v-list-item class="mb-3">
              <template v-slot:prepend>
              <v-icon color="green-darken-2">mdi-account-heart-outline</v-icon>
            </template>
            <v-list-item-title class="font-weight-medium black--text">ความเข้าใจเกษตรกร</v-list-item-title>
            <v-list-item-subtitle class="grey--text text--darken-3">เราเข้าใจถึงความท้าทายและมุ่งมั่นที่จะจัดหาสินค้าที่ตอบโจทย์ความต้องการของเกษตรกรอย่างแท้จริง</v-list-item-subtitle>
          </v-list-item>
          <v-divider class="my-1"></v-divider>
          <v-list-item class="mb-3">
            <template v-slot:prepend>
              <v-icon color="green-darken-2">mdi-cash-check</v-icon>
            </template>
            <v-list-item-title class="font-weight-medium black--text">ราคาที่เป็นธรรม</v-list-item-title>
            <v-list-item-subtitle class="grey--text text--darken-3">เรานำเสนอสินค้าคุณภาพในราคาที่สมเหตุสมผล เพื่อให้เกษตรกรสามารถเข้าถึงได้</v-list-item-subtitle>
          </v-list-item>
          <v-divider class="my-1"></v-divider>
          <v-list-item class="mb-3">
            <template v-slot:prepend>
              <v-icon color="green-darken-2">mdi-handshake-outline</v-icon>
            </template>
            <v-list-item-title class="font-weight-medium black--text">
              <a @click="$router.push('/contact-us')" class="internal-link list-link">บริการด้วยใจ</a>
            </v-list-item-title>
            <v-list-item-subtitle class="grey--text text--darken-3">เรายินดีให้คำปรึกษาและดูแลลูกค้าด้วยความใส่ใจ</v-list-item-subtitle>
          </v-list-item>
        </v-list>

        <p class="text-body-1 mt-8 page-section grey--text text--darken-3">
          เราเชื่อมั่นว่าผลิตภัณฑ์และการบริการของเราจาก <strong class="black--text">รุ่งทรัพย์เกษตรภัณฑ์</strong> จะเป็นส่วนสำคัญที่ช่วยให้การทำเกษตรของคุณประสบความสำเร็จและเติบโตอย่างมั่นคง หากคุณกำลังมองหาอุปกรณ์สำหรับโรงเรือนที่มีคุณภาพ อย่าลังเลที่จะ<a @click="$router.push('/contact-us')" class="internal-link">ติดต่อเรา</a>
        </p>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// No changes in script
</script>

<style scoped>
.black--text {
  color: #212121 !important;
}
.grey--text.text--darken-1 {
    color: #757575 !important;
}
.grey--text.text--darken-2 {
    color: #616161 !important;
}
.grey--text.text--darken-3 {
    color: #424242 !important;
}

.page-section {
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

.section-title {
  padding-bottom: 0.5rem;
}

.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  height: 100%;
  background-color: #ffffff;
  transition: box-shadow 0.3s ease-in-out;
}
.product-card:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
}

.quote-block {
  background-color: #f5f5f5;
  border-radius: 4px;
  position: relative;
}
.quote-block.quote-green { /* สำหรับเส้นขอบสีเขียว */
  border-left: 4px solid #66BB6A; /* green-lighten-1 */
}
.quote-block p {
  margin-bottom: 0;
}

.why-choose-us-list .v-list-item {
  padding-left: 0 !important;
}

.why-choose-us-list .v-list-item-title {
  margin-bottom: 4px;
}

/* --- Internal Link Styles (สีเขียว) --- */
a.internal-link {
  text-decoration: none;
  font-weight: 500;
  color: #388E3C; /* green-darken-2 */
  transition: color 0.2s ease-in-out, text-decoration 0.2s ease-in-out;
}

a.internal-link:hover {
  text-decoration: underline;
  color: #2E7D32; /* green-darken-3 */
}


.list-link {
  color: inherit;
  font-weight: inherit;
}
.list-link:hover {
  color: #388E3C !important; /* green-darken-2 เมื่อ hover */
  text-decoration: underline !important;
}

/* ปุ่ม "อ่านต่อ" (text) และ "เรียนรู้เพิ่มเติม" (outlined) */
.read-more-btn.v-btn,
.learn-more-btn.v-btn {
  text-transform: none;
  letter-spacing: 0.02em;
}

/* ปุ่ม text สีเขียวจะใช้ color prop โดยตรง */
.read-more-btn.v-btn--text:hover {
  background-color: rgba(56, 142, 60, 0.08) !important; /* hover อ่อนๆ ของ green-darken-2 */
}

/* ปุ่ม outlined สีน้ำตาล */
.btn-brown-outlined.v-btn--outlined {
  border-color: #795548 !important; /* Brown 500 (ปรับให้เข้มขึ้นเล็กน้อยถ้า color prop คือ brown-darken-1) */
  color: #6D4C41 !important; /* brown-darken-1 */
}
.btn-brown-outlined.v-btn--outlined:hover {
  background-color: rgba(109, 76, 65, 0.06) !important; /* hover อ่อนๆ ของ brown-darken-1 */
  border-color: #5D4037 !important; /* brown-darken-2 */
}
</style>