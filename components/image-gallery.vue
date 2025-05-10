<template>
   <div class="bg-grey-lighten-4">
   <v-container >
      <div class="d-flex justify-center my-8">
         <b>
            ตัวอย่างโรงเรือนที่ประกอบ
         </b>
      </div>
     <v-row>
       <v-col
         v-for="n in 12"
         :key="n"
         class="d-flex child-flex"
         cols="3"
       >
         <!-- <v-img
           :lazy-src="getLazySrc(n)"
           :src="getSrc(n)"
           aspect-ratio="1"
           class="bg-grey-lighten-2 reduced-image"
           cover
         >
           <template v-slot:placeholder>
             <v-row
               align="center"
               class="fill-height ma-0"
               justify="center"
             >
               <v-progress-circular
                 color="grey-lighten-5"
                 indeterminate
               ></v-progress-circular>
             </v-row>
           </template>
         </v-img> -->
       </v-col>
     </v-row>
     <div class="d-flex justify-center my-8">
       <b>
         <v-btn
         rounded="xl"
         size="x-large"
         block
         @click="goToLink('YOUR_DESIRED_LINK_HERE')"
      >
         กดตรงนี้เพื่อดูเพิ่มเติม
         </v-btn>
         </b>
      </div>

   </v-container>
</div>
 </template>
 
 <script setup>
 import { ref } from 'vue';
 
 const imageBaseUrl = 'https://picsum.photos';
 const smallImageWidth = 10;
 const smallImageHeight = 6;
 const largeImageWidth = 300;
 const largeImageHeight = 200; // ลดความสูงของรูปภาพหลัก
 
 const getLazySrc = (n) => `${imageBaseUrl}/${smallImageWidth}/${smallImageHeight}?image=${n * 5 + 10}`;
 const getSrc = (n) => `${imageBaseUrl}/${largeImageWidth}/${largeImageHeight}?image=${n * 5 + 10}`;

 const goToLink = (url) => {
  if (url) {
    window.open(url, '_blank'); // Opens in a new tab
  }
};
 </script>
 
 <style scoped>
 .reduced-image {
   max-width: 400px; 
   max-height: 250px; 
 }
 </style>