<template>
    <v-container fluid class="login-page-bg fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="8" lg="5" xl="4">
          <v-card class="elevation-2 pa-4 pa-md-8" rounded="lg">
            <div class="text-center mb-6" v-if="showLogo">
              <h2 class="text-h5 font-weight-bold black--text">รุ่งทรัพย์เกษตรภัณฑ์</h2>
              <p class="text-body-2 grey--text text--darken-1">เพื่อนคู่คิดเกษตรกร</p>
            </div>
            <div class="text-h5 font-weight-bold black--text text-center mb-1">
              เข้าสู่ระบบ
            </div>
            <div class="text-body-2 grey--text text--darken-1 text-center mb-6">
              กรุณากรอกข้อมูลเพื่อเข้าใช้งาน
            </div>
  
            <v-form @submit.prevent="handleLogin" ref="loginForm">
              <v-text-field
                v-model="formData.email"
                label="อีเมล"
                prepend-inner-icon="mdi-email-outline"
                type="email"
                variant="outlined"
                density="comfortable"
                color="green-darken-2"
                class="mb-4"
                :rules="[rules.required, rules.email]"
                hide-details="auto"
              ></v-text-field>
  
              <v-text-field
                v-model="formData.password"
                label="รหัสผ่าน"
                prepend-inner-icon="mdi-lock-outline"
                :type="showPassword ? 'text' : 'password'"
                :append-inner-icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="showPassword = !showPassword"
                variant="outlined"
                density="comfortable"
                color="green-darken-2"
                class="mb-2"
                :rules="[rules.required, rules.minLength(6)]"
                hide-details="auto"
              ></v-text-field>
  
              <v-row class="my-2 px-1" align="center" justify="space-between">
                <v-checkbox
                  v-model="formData.rememberMe"
                  label="จดจำฉัน"
                  density="compact"
                  hide-details
                  color="green-darken-2"
                  class="shrink mr-auto"
                ></v-checkbox>
                <a href="#" @click.prevent="forgotPassword" class="text-body-2 link-style">ลืมรหัสผ่าน?</a>
              </v-row>
  
              <v-alert
                v-if="loginError"
                type="error"
                density="compact"
                variant="tonal"
                class="mb-4"
                closable
                @click:close="loginError = null"
              >
                {{ loginError }}
              </v-alert>
  
              <v-btn
                :loading="isLoading"
                :disabled="isLoading"
                type="submit"
                color="green-darken-2"
                block
                size="large"
                class="white--text mt-4"
              >
                เข้าสู่ระบบ
              </v-btn>
            </v-form>
  
            <div class="d-flex align-center my-6 text-divider">
              <v-divider class="flex-grow-1"></v-divider>
              <span class="mx-2 text-body-2 grey--text text--darken-1">หรือเข้าสู่ระบบด้วย</span>
              <v-divider class="flex-grow-1"></v-divider>
            </div>
  
            <v-row dense>
              <v-col cols="12" sm="6">
                <v-btn
                  block
                  size="large"
                  color="#DB4437"
                  class="white--text social-login-btn"
                  @click="handleGoogleLogin"
                  :loading="isGoogleLoading"
                  :disabled="isLoading || isFacebookLoading"
                >
                  <v-icon start>mdi-google</v-icon>
                  Google
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn
                  block
                  size="large"
                  color="#4267B2"
                  class="white--text social-login-btn"
                  @click="handleFacebookLogin"
                  :loading="isFacebookLoading"
                  :disabled="isLoading || isGoogleLoading"
                >
                  <v-icon start>mdi-facebook</v-icon>
                  Facebook
                </v-btn>
              </v-col>
            </v-row>
            <div class="text-center mt-8">
              <span class="text-body-2 grey--text text--darken-1">ยังไม่มีบัญชี?</span>
              <a href="#" @click.prevent="navigateToRegister" class="ml-1 link-style font-weight-medium">สมัครสมาชิกที่นี่</a>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  // import { useRouter } from 'vue-router';
  
  // const router = useRouter();
  
  const showLogo = ref(true);
  const showPassword = ref(false);
  const isLoading = ref(false); // For email/password login
  const isGoogleLoading = ref(false);
  const isFacebookLoading = ref(false);
  const loginError = ref(null);
  
  const formData = reactive({
    email: '',
    password: '',
    rememberMe: false,
  });
  
  const loginForm = ref(null);
  
  const rules = {
    required: value => !!value || 'กรุณากรอกข้อมูล',
    email: value => /.+@.+\..+/.test(value) || 'รูปแบบอีเมลไม่ถูกต้อง',
    minLength: length => value => (value && value.length >= length) || `ต้องมีอย่างน้อย ${length} ตัวอักษร`,
  };
  
  const handleLogin = async () => {
    if (!loginForm.value) return;
    const { valid } = await loginForm.value.validate();
  
    if (valid) {
      isLoading.value = true;
      loginError.value = null;
      console.log('Email Login Data:', formData);
      setTimeout(() => {
        isLoading.value = false;
        // loginError.value = 'อีเมลหรือรหัสผ่านไม่ถูกต้อง (จำลอง)';
        alert('Login with Email Successful (จำลอง)!');
        // router.push('/');
      }, 1500);
    }
  };
  
  const handleGoogleLogin = () => {
    isGoogleLoading.value = true;
    loginError.value = null;
    console.log('Login with Google initiated');
    // --- ที่นี่จะเป็นส่วนที่เรียก Google Sign-In SDK/API ---
    setTimeout(() => {
      isGoogleLoading.value = false;
      alert('Google Login Process (จำลอง) - ดู Console สำหรับขั้นตอนต่อไป');
      // หลังจากได้ token จาก Google -> ส่งไป backend ของคุณ
    }, 2000);
  };
  
  const handleFacebookLogin = () => {
    isFacebookLoading.value = true;
    loginError.value = null;
    console.log('Login with Facebook initiated');
    // --- ที่นี่จะเป็นส่วนที่เรียก Facebook SDK/API ---
    setTimeout(() => {
      isFacebookLoading.value = false;
      alert('Facebook Login Process (จำลอง) - ดู Console สำหรับขั้นตอนต่อไป');
      // หลังจากได้ token จาก Facebook -> ส่งไป backend ของคุณ
    }, 2000);
  };
  
  const forgotPassword = () => {
    alert('ไปยังหน้าลืมรหัสผ่าน (จำลอง)');
  };
  
  const navigateToRegister = () => {
    alert('ไปยังหน้าสมัครสมาชิก (จำลอง)');
  };
  </script>
  
  <style scoped>
  .login-page-bg {
    background-color: #f5f5f5; /* grey lighten-5 */
  }
  .black--text {
    color: #212121 !important;
  }
  .grey--text.text--darken-1 {
    color: #757575 !important;
  }
  .white--text {
    color: #FFFFFF !important;
  }
  .link-style {
    color: #388E3C; /* green-darken-2 */
    text-decoration: none;
    font-weight: 500;
  }
  .link-style:hover {
    text-decoration: underline;
  }
  :deep(.v-field__outline__start) {
      border-radius: 8px 0 0 8px !important;
  }
  :deep(.v-field__outline__end) {
      border-radius: 0 8px 8px 0 !important;
  }
  .v-btn.v-size--large {
      min-height: 48px;
  }
  .social-login-btn {
    text-transform: none; /* ไม่ให้เป็นตัวพิมพ์ใหญ่ทั้งหมด */
    font-weight: 500;
  }
  .text-divider {
    display: flex;
    align-items: center;
    text-align: center;
  }
  
  .text-divider span {
    white-space: nowrap; /* ป้องกันข้อความขึ้นบรรทัดใหม่ */
  }
  </style>