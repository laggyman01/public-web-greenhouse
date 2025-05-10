<template>
  <v-app>
    <v-toolbar
      app
      elevation="4"
      style="position: sticky; top: 0; z-index: 10; background-color: white;"
    >
      <v-btn icon @click="drawer = !drawer" class="d-md-none">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      
      <v-toolbar-title @click="$router.push('/')" style="cursor: pointer; margin-right: 24px;">Logo</v-toolbar-title >
      <div class="d-none d-md-flex align-center">
        <v-btn text @click="$router.push('/')" class="mr-10">หน้าแรก</v-btn>
        <v-menu open-on-hover offset-y>
          <template #activator="{ props }">
            <v-btn text v-bind="props" class="mr-10">สินค้า <v-icon end size="18">mdi-menu-down</v-icon></v-btn>
          </template>
          <v-list density="compact" class="main-menu-dropdown">
            <v-menu open-on-hover offset-x location="end">
              <template #activator="{ props: menuProps }">
                <v-list-item v-bind="menuProps" class="submenu-activator">
                  <v-list-item-title>พลาสติกคลุมโรงเรือน</v-list-item-title>
                  <template v-slot:append>
                    <v-icon size="18">mdi-menu-right</v-icon>
                  </template>
                </v-list-item>
              </template>
              <v-list density="compact" class="submenu-dropdown">
                <v-list-item @click="$router.push('/plastic-greenhouse')">
                  <v-list-item-title>พลาสติกใส รุ่น A คุณภาพมาตรฐาน</v-list-item-title>
                </v-list-item>
                <v-list-item @click="$router.push('/plastic-greenhouse/type-b')">
                  <v-list-item-title>พลาสติกกรองแสง รุ่น B สำหรับควบคุมแสง</v-list-item-title>
                </v-list-item>
                <v-list-item @click="$router.push('/plastic-greenhouse/type-c')">
                  <v-list-item-title>พลาสติก UV พิเศษ รุ่น C ทนทานพิเศษ อายุการใช้งานยาวนาน</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-menu open-on-hover offset-x location="end">
              <template #activator="{ props: menuProps }">
                <v-list-item v-bind="menuProps" class="submenu-activator">
                  <v-list-item-title>มุ้งโรงเรือน</v-list-item-title>
                  <template v-slot:append>
                    <v-icon size="18">mdi-menu-right</v-icon>
                  </template>
                </v-list-item>
              </template>
              <v-list density="compact" class="submenu-dropdown">
                <v-list-item @click="$router.push('/net')">
                  <v-list-item-title>มุ้งกันแมลง (ป้องกันศัตรูพืช)</v-list-item-title>
                </v-list-item>
                <v-list-item @click="$router.push('/net/shading-net')">
                  <v-list-item-title>มุ้งกรองแสง (สแลน) คุณภาพดี</v-list-item-title>
                </v-list-item>
                <v-list-item @click="$router.push('/net/nylon-net')">
                  <v-list-item-title>มุ้งไนล่อนเอนกประสงค์</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-menu open-on-hover offset-x location="end">
              <template #activator="{ props: menuProps }">
                <v-list-item v-bind="menuProps" class="submenu-activator">
                  <v-list-item-title>รางและสปริงโรงเรือน</v-list-item-title>
                  <template v-slot:append>
                    <v-icon size="18">mdi-menu-right</v-icon>
                  </template>
                </v-list-item>
              </template>
              <v-list density="compact" class="submenu-dropdown">
                <v-list-item @click="$router.push('/spring-rails')">
                  <v-list-item-title>รางอลูมิเนียม สำหรับยึดพลาสติกและมุ้ง</v-list-item-title>
                </v-list-item>
                <v-list-item @click="$router.push('/spring-rails/spring-lock')">
                  <v-list-item-title>สปริงล็อค (ตัวยึด)</v-list-item-title>
                </v-list-item>
                <v-list-item @click="$router.push('/spring-rails/clip-lock')">
                  <v-list-item-title>คลิปล็อค สำหรับโครงสร้าง</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list>
        </v-menu>

        <v-menu open-on-hover offset-y>
          <template #activator="{ props }">
            <v-btn text v-bind="props" class="mr-10">คู่มือ <v-icon end size="18">mdi-menu-down</v-icon></v-btn>
          </template>
          <v-list density="compact" class="main-menu-dropdown">
            <v-list-item @click="$router.push('/how-to-pay')">
              <v-list-item-title>วิธีสั่งซื้อสินค้า</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/shipping')">
              <v-list-item-title>วิธีการจัดส่ง</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/payment')">
              <v-list-item-title>ช่องทางการชำระเงิน</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn text @click="$router.push('/article')" class="mr-10">บทความ</v-btn>
        <v-btn text @click="$router.push('/about')" class="mr-10">เกี่ยวกับเรา</v-btn>
        <v-btn text @click="$router.push('/contacts')" class="mr-10">ติดต่อเรา</v-btn>
      </div>
      <v-spacer /> <div class="d-none d-md-flex align-center">
        <v-btn text @click="$router.push('/login')" class="mr-1">Login</v-btn>
        <v-btn text @click="$router.push('/cart')">Cart</v-btn>
      </div>
    </v-toolbar>





    
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense density="compact">
        <v-list-item @click="$router.push('/')" title="หน้าแรก" prepend-icon="mdi-home-outline"></v-list-item>

        <v-list-group value="สินค้า">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="สินค้า" prepend-icon="mdi-store-outline"></v-list-item>
          </template>

          <v-list-group value="พลาสติกคลุมโรงเรือน" >
            <template #activator="{ props: subProps }">
              <v-list-item v-bind="subProps" title="พลาสติกคลุมโรงเรือน" class="drawer-submenu-activator"></v-list-item>
            </template>
            <v-list-item @click="$router.push('/plastic-greenhouse')" prepend-icon="mdi-circle-small" class="drawer-submenu-item">
              <v-list-item-title>พลาสติกใส รุ่น A คุณภาพมาตรฐาน</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/plastic-greenhouse/type-b')" prepend-icon="mdi-circle-small" class="drawer-submenu-item">
              <v-list-item-title>พลาสติกกรองแสง รุ่น B สำหรับควบคุมแสง</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/plastic-greenhouse/type-c')" prepend-icon="mdi-circle-small" class="drawer-submenu-item">
              <v-list-item-title>พลาสติก UV พิเศษ รุ่น C ทนทานพิเศษ อายุการใช้งานยาวนาน</v-list-item-title>
            </v-list-item>
          </v-list-group>

          <v-list-group value="มุ้งโรงเรือน">
            <template #activator="{ props: subProps }">
              <v-list-item v-bind="subProps" title="มุ้งโรงเรือน" class="drawer-submenu-activator"></v-list-item>
            </template>
            <v-list-item @click="$router.push('/net')" prepend-icon="mdi-circle-small" class="drawer-submenu-item">
              <v-list-item-title>มุ้งกันแมลง (ป้องกันศัตรูพืช)</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/net/shading-net')" prepend-icon="mdi-circle-small" class="drawer-submenu-item">
              <v-list-item-title>มุ้งกรองแสง (สแลน) คุณภาพดี</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/net/nylon-net')" prepend-icon="mdi-circle-small" class="drawer-submenu-item">
              <v-list-item-title>มุ้งไนล่อนเอนกประสงค์</v-list-item-title>
            </v-list-item>
          </v-list-group>

          <v-list-group value="รางและสปริงโรงเรือน">
            <template #activator="{ props: subProps }">
              <v-list-item v-bind="subProps" title="รางและสปริงโรงเรือน" class="drawer-submenu-activator"></v-list-item>
            </template>
            <v-list-item @click="$router.push('/spring-rails')" prepend-icon="mdi-circle-small" class="drawer-submenu-item">
              <v-list-item-title>รางอลูมิเนียม สำหรับยึดพลาสติกและมุ้ง</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/spring-rails/spring-lock')" prepend-icon="mdi-circle-small" class="drawer-submenu-item">
              <v-list-item-title>สปริงล็อค (ตัวยึด)</v-list-item-title>
            </v-list-item>
            <v-list-item @click="$router.push('/spring-rails/clip-lock')" prepend-icon="mdi-circle-small" class="drawer-submenu-item">
              <v-list-item-title>คลิปล็อค สำหรับโครงสร้าง</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>

        <v-list-group value="คู่มือ">
          <template #activator="{ props }">
            <v-list-item v-bind="props" title="คู่มือ" prepend-icon="mdi-book-open-page-variant-outline"></v-list-item>
          </template>
          <v-list-item @click="$router.push('/how-to-pay')" title="วิธีสั่งซื้อ" class="drawer-submenu-activator"></v-list-item>
          <v-list-item @click="$router.push('/shipping')" title="วิธีจัดส่ง" class="drawer-submenu-activator"></v-list-item>
          <v-list-item @click="$router.push('/payment')" title="วิธีชำระเงิน" class="drawer-submenu-activator"></v-list-item>
        </v-list-group>

        <v-list-item @click="$router.push('/article')" title="บทความ" prepend-icon="mdi-post-outline"></v-list-item>
        <v-list-item @click="$router.push('/about')" title="เกี่ยวกับเรา" prepend-icon="mdi-information-outline"></v-list-item>
        <v-list-item @click="$router.push('/contacts')" title="ติดต่อเรา" prepend-icon="mdi-card-account-phone-outline"></v-list-item>
        <v-divider class="my-2"></v-divider>
        <v-list-item @click="$router.push('/login')" title="Login" prepend-icon="mdi-login-variant"></v-list-item>
        <v-list-item @click="$router.push('/cart')" title="Cart" prepend-icon="mdi-cart-outline"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false, // MOBILE: สถานะของ Navigation Drawer (เปิด/ปิด)
    };
  },
};
</script>

<style scoped>
/* ============================================================================== */
/* ALL SCREENS: General Styles                                                  */
/* ============================================================================== */
.v-toolbar-title {
  cursor: pointer;
}

/* ============================================================================== */
/* DESKTOP: Styles for Toolbar Dropdown Menus                                   */
/* ============================================================================== */
/* DESKTOP: การตัดคำใน v-list-item-title ของเมนู Dropdown หลัก และ Submenu */
.main-menu-dropdown .v-list-item .v-list-item-title,
.submenu-dropdown .v-list-item .v-list-item-title {
  white-space: normal !important;
  overflow-wrap: break-word;
  line-height: 1.4;
  padding-top: 4px;
  padding-bottom: 4px;
}

/* DESKTOP: ทำให้ activator ของ submenu ใน Desktop menu มีขนาดที่พอดี */
.main-menu-dropdown .submenu-activator {
  min-height: auto;
}


/* ============================================================================== */
/* MOBILE: Styles for Navigation Drawer                                         */
/* ============================================================================== */
/* MOBILE: การตัดคำใน v-list-item-title ของ Mobile Drawer */
.v-navigation-drawer .v-list-item .v-list-item-title {
  white-space: normal !important;
  overflow-wrap: break-word;
  line-height: 1.4;
}

/* MOBILE: ปรับ padding-left ของ activator ของ sub-group ให้มีการเยื้องที่เหมาะสม */
.drawer-submenu-activator.v-list-item {
  padding-left: 32px !important;
}

/* MOBILE: จัดตำแหน่งไอคอน prepend (จุด) ของรายการย่อยสุดใน Drawer และปรับ padding */
.drawer-submenu-item.v-list-item {
  padding-left: 40px !important; /* ปรับค่านี้เพื่อควบคุมการเยื้องของรายการย่อยสุด */
}

/* MOBILE: ปรับระยะห่างระหว่างไอคอน (จุด) กับข้อความในรายการย่อยสุด */
.drawer-submenu-item.v-list-item :deep(.v-list-item__prepend .v-icon) {
  margin-right: 8px !important;
}
</style>