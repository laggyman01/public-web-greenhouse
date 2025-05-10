<template>
  <div class="bg-grey-lighten-4 py-6">
    <v-container>
      <v-row>
        <v-col
          v-for="(section, i) in sections"
          :key="i"
          cols="6"
          md="3"
          class="text-center section-box"
        >
          <b class="section-title">{{ section.title }}</b>
          <div class="mt-4">
            <p
              v-for="(item, j) in section.items"
              :key="j"
              class="hover-effect section-item"
              @click="item.link && goToLink(item.link)"
            >
              {{ item.label }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLink = (path) => {
  router.push(path)
}

const sections = [
  {
    title: 'ติดต่อเรา',
    items: [
      { label: 'เบอร์โทร', link: null },
      { label: 'อีเมล', link: null },
      { label: 'แผนที่', link: null },
    ],
  },
  {
    title: 'หมวดหมู่สินค้า',
    items: [
      { label: 'พลาสติกคลุมโรงเรือน', link: '/plastic-greenhouse' },
      { label: 'มุ้งโรงเรือน', link: '/net' },
      { label: 'รางและสปริงโรงเรือน', link: '/spring-rails' },
    ],
  },
  {
    title: 'ช่วยเหลือ',
    items: [
      { label: 'การสั่งซื้อ', link: '/help-1' },
      { label: 'การชำระเงิน', link: '/help-2' },
      { label: 'นโยบายคืนเงิน', link: '/help-3' },
    ],
  },
  {
    title: 'เกี่ยวกับเรา',
    items: [
      { label: 'ประวัติ', link: '/about' },
      { label: 'ทีมงาน', link: '/about-us-2' },
      { label: 'ติดต่อเรา', link: '/contacts' },
    ],
  },
]
</script>

<style scoped>
.hover-effect {
  transition: opacity 0.3s ease;
  cursor: pointer;
}
.hover-effect:hover {
  opacity: 0.7;
}
.section-title {
  font-size: 18px;
}
.section-item {
  font-size: 16px;
  margin: 6px 0;
}
</style>
