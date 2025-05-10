<template>
  <div class="bg-grey-lighten-4">
    <v-container class="d-flex flex-column align-center justify-center py-10">
      <h1 class="text-h2 font-weight-bold heading-title">
        โรงเรือนเพาะปลูก
      </h1>
      <p class="text-subtitle-1 mt-4">
        สร้างสภาพแวดล้อมที่เหมาะสม
      </p>
      <p class="text-subtitle-1">
        เพื่อการเพาะปลูกที่มีคุณภาพและยั่งยืน
      </p>
  
      <v-container class="d-flex justify-center align-center mt-10" style="gap: 24px; flex-wrap: wrap;">
        <v-card
          class="custom-card d-flex flex-column align-center justify-center text-center bg-white border border-grey-lighten-2"
          elevation="3"
          max-width="300"
          min-height="400"
          rounded="xl"
          padding="24"
        >
          <h3 class="mb-4">วิธีเลือกเนื้อพลาสติก</h3>
          <p class="mb-4">
            เลือกพลาสติกที่มีความทนทาน<br />
            กรองแสงได้ดี และเหมาะกับสภาพอากาศ
          </p>
          <p class="mb-6">
            อายุการใช้งานยาวนาน <br>
            ช่วยลดต้นทุนระยะยาว
          </p>
          <v-btn outlined @click="$router.push('/plastic-selection')">
            อ่านเพิ่มเติม
          </v-btn>
        </v-card>
  
        <v-card
          class="custom-card d-flex flex-column align-center justify-center text-center bg-white border border-grey-lighten-2"
          elevation="3"
          max-width="300"
          min-height="400"
          rounded="xl"
          padding="24"
        >
          <h3 class="mb-4">ทำไมต้องใช้ Greenhouse</h3>
          <p class="mb-4">
            ควบคุมอุณหภูมิ ความชื้น<br />
            ป้องกันแมลง และเพิ่มผลผลิต
          </p>
          <p class="mb-6">
            เหมาะสำหรับการเพาะปลูกเชิงพาณิชย์และงานวิจัย
          </p>
          <v-btn outlined @click="$router.push('/plastic-selection')">
            อ่านเพิ่มเติม
          </v-btn>
        </v-card>
      </v-container>
    </v-container>
    </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  .custom-card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%; /* ใช้ความสูงของ parent container */
  }
  
  .custom-card:hover {
    transform: scale(1.05); /* ขยายขนาดเล็กน้อย */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* เพิ่มเงาที่ชัดเจนขึ้น */
  }
  
  /* ปรับขนาดตัวอักษรใน h1 สำหรับมือถือ */
  .heading-title {
    font-size: 2.5rem;
  }
  
  @media (max-width: 600px) {
    .heading-title {
      font-size: 3rem !important;
      text-align: center !important;
      margin: 0 !important;
      width: 100% !important;
    }
  
    .text-subtitle-1 {
      font-size: 1rem !important;
      text-align: center !important;
    }
  
    /* ปรับให้การ์ดไม่ยืดหยุ่นเกินไปในขนาดเล็ก */
    .custom-card {
      min-height: 300px; /* ปรับให้ขนาดของการ์ดเล็กลง */
    }
  }
  
  .v-container {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
  
  .v-card {
    max-width: 300px;
    flex: 1 1 300px; 
    min-height: 400px;
  }
  </style>
  