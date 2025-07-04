<!-- frontend/src/components/ImpactSection.vue -->
<template>
  <section class="relative py-20 overflow-hidden">
    <!-- Background texture -->
    <div class="absolute inset-0 bg-[url('@/assets/cambodia-texture.jpg')] opacity-10"></div>
    
    <div class="container mx-auto px-16 relative">
      <!-- Heading with photo -->
      <div class="flex flex-col lg:flex-row items-center gap-12 mb-16">
        <div class="lg:w-1/2">
          <img 
            src="/src/img/homePage/2childs.png" 
            alt="Cambodian village" 
            class="rounded-2xl shadow-2xl w-full h-auto"
          >
        </div>
        <div class="lg:w-1/2">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">
            <span class="text-green-800">See What a Difference</span> 
            <span class="text-orange-400"> You Can Make</span> 
            <span class="text-green-600"></span>
          </h2>
          <p class="text-lg mb-6">
            We are a Rotarian-led nonprofit empowering rural Cambodian families to create sustainable quality of life through:
          </p>
          <ul class="space-y-3 text-lg">
            <li class="flex items-start">
              <svg class="h-6 w-6 text-sc-orange mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Safe water and sanitation</span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-sc-orange mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Sustainable incomes</span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-sc-orange mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Healthy food</span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-sc-orange mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Quality education</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Program Cards with Photos -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Sustainable Income -->
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg border-sc-orange" v-for="program in programs" :key="program.title">
          <img 
            :src="program.image" 
            alt="Farmers working" 
            class="w-full h-56 object-cover"
          >
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-4">{{ program.title }}</h3>
            <ul class="space-y-3">
              <li class="flex items-start" v-for="item in program.items" :key="item">
                <div class="bg-sc-orange text-white rounded-full p-1 mr-3 mt-0.5">
                <svg
                  class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                    />
                </svg>
                </div>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const programs = [
  {
    title: 'Village Leadership',
    color: 'green',
    image: '/src/img/homePage/leadership.png',
    items: [
      'Leadership Training',
      'Project Management Training',
      'Village Development Committees',
    ],
  },
  {
    title: 'Water & Sanitation',
    color: 'blue',
    image: '/src/img/homePage/water.png',
    items: [
      'Water Wells',
      'Biosand Filters',
      'Rainwater Harvesting',
      'Community Ponds',
    ],
  },
  {
    title: 'Sustainable Income',
    color: 'orange',
    image: '/src/img/homePage/sustainable-income.png',
    items: [
      'Alternative Agriculture',
      'Crop Micro-Loans',
      'Pass-On Farm Animal Program',
      'Small Business Training',
    ],
  },
  {
    title: 'Education Programs',
    color: 'purple',
    image: '/src/img/homePage/education.jpg',
    items: [
      'Grades 1-12 Enrichment Schools',
      'Village Preschools',
      'University Scholarships',
      'Health & Sanitation Education',
    ],
  },
];
</script>
