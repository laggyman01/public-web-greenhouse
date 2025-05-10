<template>
  <div class="text-indigo text-h5 text-center">
    TEST SLIDE
  </div>
  <v-carousel
    height="400"
    show-arrows="hover"
    cycle
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
        @click="goToLink(links[i])"
        style="cursor: pointer;"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { ref } from 'vue';

const colors = [
  'indigo',
  'warning',
  'pink darken-2',
  'red lighten-1',
  'deep-purple accent-4',
];

const slides = [
  'First',
  'Second',
  'Third',
  'Fourth',
  'Fifth',
];

const links = [
  'https://www.example.com/first',
  'https://www.example.com/second',
  'https://www.example.com/third',
  'https://www.example.com/fourth',
  'https://www.example.com/fifth',
];

const goToLink = (link) => {
  if (link) {
    window.open(link, '_blank'); // Opens in a new tab
  }
};
</script>