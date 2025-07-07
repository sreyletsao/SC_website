<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-8 max-w-4xl">
      <h2 class="text-3xl font-bold text-center text-orange-400 mb-12">
        THANK YOU, <span class="text-green-600">CORPORATE SPONSORS!</span>
      </h2>

      <div class="flex flex-wrap justify-center items-center gap-10">
        <a
          v-for="(sponsor, index) in sponsors"
          :key="index"
          :href="sponsor.link"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-40 h-24 flex items-center justify-center p-4 hover:opacity-80 transition-opacity"
        >
          <img
            :src="getFullLogoPath(sponsor.logo)" 
            :alt="sponsor.name"
            class="max-h-16 object-contain"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getSponsor } from '@/api/sponsor.js'
import { onMounted, ref } from 'vue'

const sponsors = ref([])
const getFullLogoPath = (logoPath) => {
  return `http://localhost:8000/storage/${logoPath}`
}
onMounted(async () => {
  try {
    const response = await getSponsor()
    console.log('Sponsor API response:', response)
    sponsors.value = response.Sponsors
  } catch (error) {
    console.error('Error fetching sponsors:', error)
  }
})
</script>
