<template>
  <!-- Sustainability Program -->
  <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="relative h-64">
      <img src="/src/img/programPage/Sustainability.png" alt="Sustainability Program" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-4 left-4">
        <div class="bg-green-600 p-3 rounded-full">
          <Leaf class="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-2xl font-bold text-gray-800 mb-3">Sustainability</h3>
      <p class="text-gray-600 mb-4">
        Creating income-generating opportunities, agricultural training, and environmental conservation 
        projects that ensure long-term community development and economic independence.
      </p>
      <ul class="text-sm text-gray-600 mb-6 space-y-2">
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Income generation projects
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Agricultural training programs
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Environmental conservation
        </li>
      </ul>
      <button class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors">
        Learn More
      </button>
    </div>
  </div>
</template>

<script setup>
import { Leaf, CheckCircle } from 'lucide-vue-next'
</script>