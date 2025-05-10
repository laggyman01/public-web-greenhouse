// tailwind.config.js
module.exports = {
  content: [
    './app.vue',            // ตรวจจับไฟล์ app.vue
    './nuxt.config.{js,ts}', // ตรวจจับไฟล์ config ด้วย
    './pages/**/*.vue',     // ตรวจจับทุกไฟล์ในโฟลเดอร์ pages (ถ้ามี)
    './components/**/*.vue',// ตรวจจับทุกไฟล์ในโฟลเดอร์ components (ถ้ามี)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
