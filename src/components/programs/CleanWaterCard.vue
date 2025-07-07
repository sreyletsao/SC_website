<template>
  <!-- Clean Water Program -->
  <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="relative h-64">
      <img :src="currentImage" alt="Clean Water Program" class="w-full h-full object-cover transition-opacity duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-4 left-4">
        <div class="bg-blue-600 p-3 rounded-full">
          <Droplets class="w-8 h-8 text-white" />
        </div>
      </div>
    </div>

    <div class="p-6">
      <h3 class="text-2xl font-bold text-gray-800 mb-3">Safe Water for Healthy Communities</h3>
      <p class="text-gray-600 mb-4">
        Clean water transforms lives. Our Safe Water Programs reduce sickness, support food security, 
        and allow children to attend school instead of spending hours hauling water. With safe water, 
        communities thrive, gardens grow, and hope flourishes.
      </p>

      <ul class="text-sm text-gray-600 space-y-2">
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Wells – Steady water access through community-built wells
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          BioSand Filters – Affordable household water purification
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Rainwater Harvesters – Reliable clean water during dry seasons
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Improved hygiene & reduced disease for families
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Children gain time to attend school & build brighter futures
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Droplets, CheckCircle } from 'lucide-vue-next'

// Image slideshow array
const images = [
  '/src/img/programPage/Safe Water.png',
  '/src/img/programPage/safe Water1.png',
  '/src/img/programPage/Water2.png',
  '/src/img/programPage/Water3.png'
]

const currentImage = ref(images[0])
let index = 0
let interval = null

const startSlideshow = () => {
  interval = setInterval(() => {
    index = (index + 1) % images.length
    currentImage.value = images[index]
  }, 3000) // Change every 3 seconds
}

onMounted(startSlideshow)
onBeforeUnmount(() => clearInterval(interval))
</script>
