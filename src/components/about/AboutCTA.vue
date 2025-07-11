<template>
  <section class="py-16 bg-emerald-800 text-white text-center">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-6">Want to support our vision?</h2>
      <RouterLink
        to="/donate"
        class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
      >
        Donate Now
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
