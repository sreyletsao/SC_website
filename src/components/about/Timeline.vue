<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 max-w-3xl">
      <h2 class="text-3xl font-bold text-gray-800 text-center mb-10">Our Journey</h2>
      <div class="space-y-10 relative before:absolute before:left-1/2 before:w-1 before:h-full before:bg-gray-300">
        <div v-for="(item, idx) in events" :key="idx" class="relative flex flex-col md:flex-row items-center">
          <div :class="['md:w-1/2', idx % 2 === 0 ? 'md:pr-8 md:items-end' : 'md:pl-8 md:items-start']" class="flex flex-col items-center md:items-end md:text-right">
            <h4 class="text-xl font-semibold">{{ item.year }}</h4>
            <p class="text-gray-600 mt-2">{{ item.text }}</p>
          </div>
          <div class="flex justify-center items-center w-10 h-10 bg-emerald-600 rounded-full text-white z-10 order-first md:order-none">
            {{ item.year }}
          </div>
          <div class="md:w-1/2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  { year: '2008', text: 'Founded in Phnom Penh with first school support' },
  { year: '2012', text: 'Built 10 schools and launched water programs' },
  { year: '2016', text: 'Reached 50 villages, implemented tree planting' },
  { year: '2020', text: 'Expanded to 120+ communities and 2,500 students' }
]
</script>
