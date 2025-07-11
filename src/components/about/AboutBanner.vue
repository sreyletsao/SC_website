<template>
  <section
    class="relative h-[40rem] bg-cover bg-center transition-all duration-1000"
    :style="{ backgroundImage: `url(${currentImage})` }"
  >
    <div class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center px-4">
      <h1 class="text-5xl md:text-6xl font-bold mb-6 text-orange-400 drop-shadow-lg">About Us</h1>
      <p class="text-xl md:text-2xl max-w-3xl leading-relaxed drop-shadow">
        Sustainable Cambodia is a non-profit organization dedicated to empowering communities in Cambodia through education, health, and economic development programs.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const images = [
  '/src/img/heath.png',
  '/src/img/aboutPage/banner2.png',
  '/src/img/aboutPage/banner3.png',
  '/src/img/aboutPage/banner4.png',
];

const currentImage = ref(images[0]);
let currentIndex = 0;
let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    currentImage.value = images[currentIndex];
  }, 4000); // change image every 3 seconds
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>
