<template>
  <!-- Health Program -->
  <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="relative h-64">
      <img :src="currentImage" alt="Health Program" class="w-full h-full object-cover transition-opacity duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-4 left-4">
        <div class="bg-red-600 p-3 rounded-full">
          <Heart class="w-8 h-8 text-white" />
        </div>
      </div>
    </div>

    <div class="p-6">
      <h3 class="text-2xl font-bold text-gray-800 mb-3">Healthcare & Community Wellbeing</h3>
      <p class="text-gray-600 mb-4">
        Our Healthcare Programs improve quality of life by promoting hygiene, nutrition, and access to essential health education. Through community training and care, we help build healthier, stronger, and more resilient villages.
      </p>

      <ul class="text-sm text-gray-600 space-y-2">
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Hygiene Training – Teaching basic health & sanitation
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Latrines – Reducing water contamination & disease
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Preschool Nutrition – Fighting child malnutrition
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Days for Girls – Menstrual health education & supplies
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Community-driven health solutions for lasting impact
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Heart, CheckCircle } from 'lucide-vue-next'

// Slideshow images for Health Program
const images = [
  '/src/img/programPage/Health.png',
  '/src/img/programPage/Health1.png',
  '/src/img/programPage/Health2.png',
  '/src/img/programPage/image.png'
]

const currentImage = ref(images[0])
let index = 0
let interval = null

const startSlideshow = () => {
  interval = setInterval(() => {
    index = (index + 1) % images.length
    currentImage.value = images[index]
  }, 3000)
}

onMounted(startSlideshow)
onBeforeUnmount(() => clearInterval(interval))
</script>
