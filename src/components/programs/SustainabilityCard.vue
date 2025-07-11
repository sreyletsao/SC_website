<template>
  <!-- Sustainability Program -->
  <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="relative h-64">
      <img :src="currentImage" alt="Sustainability Program" class="w-full h-full object-cover transition-opacity duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-4 left-4">
        <div class="bg-green-600 p-3 rounded-full">
          <Leaf class="w-8 h-8 text-white" />
        </div>
      </div>
    </div>

    <div class="p-6">
      <h3 class="text-2xl font-bold text-gray-800 mb-3">Sustainable Livelihoods & Income Generation</h3>
      <p class="text-gray-600 mb-4">
        After meeting basic needs, our Sustainability Programs empower communities to achieve long-term independence through income generation, vocational training, and fair trade opportunities—helping families build better futures.
      </p>

      <ul class="text-sm text-gray-600 space-y-2">
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Animal Pass-On – Livestock breeding & community sharing
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Sewing & Fair Trade – Vocational skills & small business support
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Vocational Training – Teaching income-generating skills
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Economic independence & self-sustaining communities
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Leaf, CheckCircle } from 'lucide-vue-next'

// Slideshow images for Sustainability Program
const images = [
  '/src/img/programPage/Sustainability.png',
  '/src/img/programPage/Sustainability4.png',
  '/src/img/programPage/Sustainability1.png',
  '/src/img/programPage/Sustainability3.png'
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
