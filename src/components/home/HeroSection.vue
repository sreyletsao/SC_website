<template>
  <section class="relative h-[700px] bg-gradient-to-r from-emerald-900 to-emerald-700">
    <!-- Background image overlays -->
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/bg.jpg')"
    ></div>
    <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/0"></div>

    <!-- Content -->
    <div class="relative container mx-auto px-4 h-full flex items-center">
      <div class="max-w-2xl text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Building a
          <span class="text-emerald-300">Sustainable</span>
          Future for Cambodia
        </h1>
        <p class="text-xl mb-8 text-gray-200">
          Empowering communities through education, environmental conservation, and sustainable development programs that create lasting positive change.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <RouterLink
            to="/donate"
            class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
          >
            Get Involved
            <ArrowRight class="w-5 h-5 ml-2" />
          </RouterLink>
          <RouterLink
            to="/about"
            class="border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
</script>
