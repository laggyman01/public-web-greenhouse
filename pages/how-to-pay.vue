<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <!-- Section: Header -->
        <h1 class="text-h4 font-weight-bold mb-8 text-center black--text">ช่องทางการชำระเงิน</h1>

        <!-- Section: Bank Transfer -->
        <v-card class="mb-8" outlined>
          <v-card-title class="text-h6 font-weight-medium grey lighten-4 black--text">
            <v-icon left color="black">mdi-bank-transfer</v-icon> โอนเงินผ่านบัญชีธนาคาร
          </v-card-title>
          <v-card-text class="pa-5">
            <p class="subtitle-1 mb-4 grey--text text--darken-2">
              ท่านสามารถชำระเงินโดยการโอนเงินเข้าบัญชี บริษัท [ชื่อบริษัทของคุณ] จำกัด ตามรายละเอียดด้านล่าง:
            </p>
            <v-list two-line class="bg-transparent">
              <!-- Loop through bank accounts -->
              <v-list-item v-for="(bank, i) in bankAccounts" :key="i" class="mb-3">
                <template v-slot:prepend>
                  <v-avatar color="grey lighten-3" rounded="lg" class="mr-4 elevation-0">
                    <!-- <v-img :src="bank.logo" :alt="bank.name" contain height="36"></v-img> -->
                  </v-avatar>
                </template>
                <v-list-item-title class="font-weight-bold text-subtitle-1 black--text">{{ bank.name }}</v-list-item-title>
                <v-list-item-subtitle class="text-body-1 grey--text text--darken-3">
                  เลขที่บัญชี: <strong class="black--text">{{ bank.accountNumber }}</strong>
                </v-list-item-subtitle>
                <template v-if="bank.branch" v-slot:append>
                  <div class="text-right">
                    <span class="text-caption grey--text text--darken-1">สาขา: {{ bank.branch }}</span>
                  </div>
                </template>
              </v-list-item>
            </v-list>
            <v-divider class="my-4"></v-divider>
            <p class="text-body-2 grey--text text--darken-1">
              * กรุณาเก็บหลักฐานการโอนเงินไว้เพื่อใช้ในการแจ้งชำระเงิน
            </p>
          </v-card-text>
        </v-card>

        <!-- Section: Payment Notification -->
        <v-card class="mb-8" outlined>
          <v-card-title class="text-h6 font-weight-medium grey lighten-4 black--text">
            <v-icon left color="black">mdi-receipt-text-check-outline</v-icon> วิธีการแจ้งชำระเงิน
          </v-card-title>
          <v-card-text class="pa-5">
            <p class="subtitle-1 mb-4 grey--text text--darken-2">
              หลังจากทำการโอนเงินเรียบร้อยแล้ว กรุณาแจ้งชำระเงินผ่านช่องทางต่อไปนี้:
            </p>
            <v-list class="bg-transparent">
              <!-- Facebook Contact -->
              <v-list-item prepend-icon="mdi-facebook" href="https://www.facebook.com/YourFacebookPage" target="_blank" rel="noopener noreferrer" class="contact-list-item">
                <v-list-item-title class="black--text">Facebook: [ชื่อ Facebook Page ของคุณ]</v-list-item-title>
                <v-list-item-subtitle class="grey--text text--darken-2">ส่งหลักฐานการโอนเงินทาง Inbox</v-list-item-subtitle>
              </v-list-item>
              <v-divider inset class="my-1"></v-divider>
              <!-- Line Contact -->
              <v-list-item v-if="lineId" prepend-icon="mdi-chat" :href="`https://line.me/ti/p/~${lineId.startsWith('@') ? lineId.substring(1) : lineId}`" target="_blank" rel="noopener noreferrer" class="contact-list-item">
                <v-list-item-title class="black--text">Line ID: {{ lineId }}</v-list-item-title>
                <v-list-item-subtitle class="grey--text text--darken-2">เพิ่มเพื่อนหรือติดต่อทาง Line</v-list-item-subtitle>
              </v-list-item>
              <v-divider inset class="my-1"></v-divider>
              <!-- Phone Contact -->
              <v-list-item prepend-icon="mdi-phone" v-if="phoneNumber" class="contact-list-item">
                <v-list-item-title class="black--text">เบอร์โทรศัพท์: {{ phoneNumber }}</v-list-item-title>
                <v-list-item-subtitle class="grey--text text--darken-2">ติดต่อสอบถามหรือแจ้งทางโทรศัพท์</v-list-item-subtitle>
              </v-list-item>
            </v-list>
            <p class="mt-5 text-body-2 grey--text text--darken-3">
              <strong>สำคัญ:</strong> เมื่อแจ้งชำระเงินแล้ว ทางเราจะดำเนินการตรวจสอบและยืนยันการสั่งซื้อของท่าน
              หากไม่ได้รับการยืนยันภายใน 24 ชั่วโมง กรุณาตรวจสอบ Junk mail หรือติดต่อกลับทาง Facebook อีกครั้ง
            </p>
          </v-card-text>
        </v-card>

        <!-- Section: Important Notes -->
        <v-card class="mb-8" outlined>
          <v-card-title class="text-subtitle-1 font-weight-medium grey lighten-4 black--text">
            <v-icon left color="grey darken-1">mdi-information-outline</v-icon> หมายเหตุสำคัญ
          </v-card-title>
          <v-card-text class="pt-4">
            <p class="text-body-1 grey--text text--darken-3">
              ราคาสินค้าหน้าเว็บยังไม่รวมค่าจัดส่ง ทั้งนี้หลังจากลูกค้า "ใส่ตะกร้า" แล้วระบบจะแจ้งค่าส่งให้ทราบ
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PaymentPage',
  head() {
    return {
      title: 'ช่องทางการชำระเงิน - [ชื่อร้านค้าของคุณ]',
    };
  },
  data() {
    return {
      bankAccounts: [
        {
          name: 'ธนาคารกรุงไทย จำกัด',
          accountNumber: '123-456-789',
          branch: '',
          logo: 'https://upload.wikimedia.org/wikipedia/th/thumb/1/1f/Krungthai_Bank_logo.svg/240px-Krungthai_Bank_logo.svg.png',
        },
        {
          name: 'ธนาคารกสิกรไทย จำกัด',
          accountNumber: '123-456-789',
          branch: '',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/KBank_logo.svg/240px-KBank_logo.svg.png',
        },
        {
          name: 'ธนาคารไทยพาณิชย์ จำกัด',
          accountNumber: '123-456-789',
          branch: '',
          logo: 'https://upload.wikimedia.org/wikipedia/th/thumb/7/7a/SCB_logo.svg/240px-SCB_logo.svg.png',
        },
      ],
      lineId: '[@lineId]',
      phoneNumber: 'xxx-xxx-xxx',
    };
  },
};
</script>

<style scoped>
/* General Text Styles */
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

/* Card Styles */
.grey.lighten-4 {
  background-color: #f5f5f5 !important;
  border-bottom: 1px solid #e0e0e0;
}
.grey.lighten-3 {
  background-color: #f0f0f0 !important;
}
.v-card {
  border-radius: 6px;
}
.v-card.outlined {
  border-color: #e0e0e0;
}

/* List Styles */
.v-list-item__prepend .v-avatar {
  align-self: center;
}
.v-list-item-title {
  line-height: 1.4;
  font-weight: 500;
}
.v-list-item-subtitle {
  line-height: 1.3;
  font-size: 0.9rem;
}
.bg-transparent {
  background-color: transparent !important;
}
.contact-list-item:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
.v-divider.inset {
  margin-left: 56px;
}

/* Typography */
.text-h4 {
  letter-spacing: -0.02em !important;
  margin-top: 24px;
  margin-bottom: 32px !important;
}
.text-h6 {
  font-size: 1.15rem !important;
  font-weight: 600 !important;
}
.subtitle-1 {
  font-size: 1.05rem !important;
  line-height: 1.6;
}
.text-body-1 {
  font-size: 1rem !important;
  line-height: 1.5;
}
.text-body-2 {
  font-size: 0.9rem !important;
  line-height: 1.4;
}
</style>