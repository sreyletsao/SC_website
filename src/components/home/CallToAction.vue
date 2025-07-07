<template>
  <section class="py-20 bg-emerald-800 text-white text-center">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
      <p class="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
        Join us in creating sustainable change in Cambodia. Every contribution, big or small, helps build a brighter future.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink
          to="/donate"
          class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
        >
          Donate Now
        </RouterLink>
        <RouterLink
          to="/getInvolved"
          class="border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 rounded-lg font-semibold transition-colors"
        >
          Volunteer
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
