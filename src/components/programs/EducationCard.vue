<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div class="relative h-64">
      <img :src="currentImage" alt="Education Program" class="w-full h-full object-cover transition-opacity duration-500">
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div class="absolute bottom-4 left-4">
        <div class="bg-orange-600 p-3 rounded-full">
          <GraduationCap class="w-8 h-8 text-white" />
        </div>
      </div>
    </div>

    <div class="p-6">
      <h3 class="text-2xl font-bold text-gray-800 mb-3">Education & Training</h3>
      <p class="text-gray-600 mb-4">
        We believe education transforms lives. From preschools to university scholarships, our programs give children and youth the knowledge, skills, and confidence they need to build brighter futures for themselves and their communities.
      </p>

      <ul class="text-sm text-gray-600 mb-2 space-y-2">
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Sylvia Lasky Memorial School – Over 400 children learning and growing
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Village Preschools – Early childhood education & nutrition support
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          Kravanh Bright Future Center – Free education & student housing
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          TC Swartz Projects – Strengthening rural schools & hygiene
        </li>
        <li class="flex items-center">
          <CheckCircle class="w-4 h-4 text-green-600 mr-2" />
          University Scholarships – Empowering future leaders through higher education
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { GraduationCap, CheckCircle } from 'lucide-vue-next'

// Slideshow images
const images = [
  '/src/img/programPage/enducation.png',   
  '/src/img/programPage/enducation1.png',  
  '/src/img/programPage/enducation2.png',  
  '/src/img/programPage/enducation3.png',  
  '/src/img/programPage/enducation4.png'   
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
