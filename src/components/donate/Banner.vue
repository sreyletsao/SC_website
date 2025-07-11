<template>
  <section class="relative bg-gray-800 text-white">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center opacity-50"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>

    <!-- Overlay -->
    <div class="relative max-w-5xl mx-auto px-24 py-40 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6 mt-20 text-orange-400 drop-shadow-lg">Support <span class="text-emerald-300">Our Cause</span></h1>
      <p
        class="text-lg md:text-xl mb-20 drop-shadow-md"
      >Your donation makes a difference. Help us create a better future!</p>
    </div>
  </section>
</template>

<script setup>
const backgroundImage =
  "/src/img/aboutPage/banner.jpg"; // Path to your background image
</script>
