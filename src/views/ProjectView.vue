<!-- frontend/src/views/ProgramsView.vue -->
<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-sc-green text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Empowerment Programs</h1>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Comprehensive initiatives creating lasting change through community participation</p>
      </div>
    </section>

    <!-- Empowerment Approach -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 max-w-4xl">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-3xl font-bold mb-6 text-sc-green">Our Empowerment Model</h2>
          <div class="space-y-6">
            <p class="text-lg">Sustainable Cambodia follows a comprehensive program of development. Rather than maintaining a narrow scope, we believe that to create sustainable quality of life, village families need clean water, agricultural skills, organizational skills, and education.</p>
            
            <div class="flex items-start">
              <div class="bg-sc-orange text-white p-3 rounded-full mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p>The heart of our program is empowerment: Our Cambodian staff works with village families to establish Village Committees that choose and implement projects.</p>
            </div>
            
            <div class="flex items-start">
              <div class="bg-sc-orange text-white p-3 rounded-full mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p>We utilize "best practices" from successful models worldwide including Grameen Bank microloans and Heifer International's pass-on programs.</p>
            </div>
            
            <div class="bg-sc-light-green text-white p-4 rounded-lg">
              <p class="font-semibold">The participatory model means nothing is "given" to villagers - they commit time and labor while we provide training and initial financing, gradually reducing support over 3-5 years until villages become self-reliant.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Categories -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-sc-green">Program Categories</h2>
        
        <!-- Education & Training -->
        <div class="mb-16">
          <div class="flex items-center mb-6">
            <div class="bg-sc-green text-white p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold">Education & Training</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="program in educationPrograms" :key="program.id" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-sc-green">
              <h4 class="text-xl font-bold mb-2">{{ program.name }}</h4>
              <p class="text-gray-600">{{ program.description }}</p>
              <div v-if="program.stat" class="mt-3 text-sc-orange font-semibold">
                {{ program.stat }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Village Development -->
        <div class="mb-16">
          <div class="flex items-center mb-6">
            <div class="bg-sc-green text-white p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold">Village Development</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="program in villagePrograms" :key="program.id" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-sc-green">
              <h4 class="text-xl font-bold mb-2">{{ program.name }}</h4>
              <p class="text-gray-600">{{ program.description }}</p>
              <div v-if="program.stat" class="mt-3 text-sc-orange font-semibold">
                {{ program.stat }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-16 bg-sc-light-green text-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Village Success Stories</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="story in successStories" :key="story.id" class="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <div class="mb-4">
              <img :src="story.image" :alt="story.village" class="w-full h-48 object-cover rounded">
            </div>
            <h3 class="text-xl font-bold mb-2 text-sc-green">{{ story.village }}</h3>
            <p class="mb-4">{{ story.description }}</p>
            <div class="bg-gray-100 p-3 rounded">
              <p class="font-semibold text-sc-green">Achievements:</p>
              <ul class="list-disc list-inside mt-2">
                <li v-for="(achievement, index) in story.achievements" :key="index">{{ achievement }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6 text-sc-green">Support Our Programs</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Your contribution helps villages become self-sufficient and sustainable</p>
        <router-link 
          to="/get-involved" 
          class="inline-block bg-sc-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition"
        >
          Get Involved
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const educationPrograms = [
  {
    id: 1,
    name: 'Sylvia Lasky Memorial School',
    description: 'Primary education for 300+ grade-school students',
    stat: '300+ students'
  },
  {
    id: 2,
    name: 'Kravanh Bright Futures School',
    description: 'Primary education for 240+ grade-school students',
    stat: '240+ students'
  },
  {
    id: 3,
    name: 'University Scholarships',
    description: 'Support for grade-school graduates to attend university',
    stat: '25+ scholarships awarded'
  },
  {
    id: 4,
    name: 'Village Preschools',
    description: 'Early childhood education in rural villages',
    stat: '15+ preschools established'
  },
  {
    id: 5,
    name: 'Adult Literacy',
    description: 'Basic reading and writing skills for adults',
    stat: '500+ adults educated'
  },
  {
    id: 6,
    name: 'Vocational Education',
    description: 'Skills training for sustainable livelihoods',
    stat: '10+ vocational programs'
  }
];

const villagePrograms = [
  {
    id: 1,
    name: 'Fresh Drinking Water Wells',
    description: 'Clean water access through well construction',
    stat: '100+ wells installed'
  },
  {
    id: 2,
    name: 'Biosand Water Filters',
    description: 'Point-of-use water filtration systems',
    stat: '500+ filters distributed'
  },
  {
    id: 3,
    name: 'Pass-On Farm Animal Program',
    description: 'Livestock distribution with pass-on commitment',
    stat: '200+ animals provided'
  },
  {
    id: 4,
    name: 'Micro-Business Loans',
    description: 'Small loans to start sustainable businesses',
    stat: '150+ loans granted'
  },
  {
    id: 5,
    name: 'Beekeeping',
    description: 'Apiary training and equipment',
    stat: '20+ beekeeping operations'
  },
  {
    id: 6,
    name: 'Village Healthcare',
    description: 'Basic medical care and sanitation education',
    stat: '50+ villages served'
  }
];

const successStories = [
  {
    id: 1,
    village: 'Kravanh Village',
    image: '@/assets/kravanh.jpg',
    description: 'Once struggling with water scarcity, now thriving with multiple wells and agricultural projects',
    achievements: [
      '3 clean water wells installed',
      'Pass-on animal program with 50+ livestock',
      '100% child school enrollment'
    ]
  },
  {
    id: 2,
    village: 'Pursat Community',
    image: '@/assets/pursat.jpg',
    description: 'Transformed from subsistence farming to diversified agriculture with micro-businesses',
    achievements: [
      'Established 5 village businesses',
      'Implemented biosand filters in all homes',
      'Built community preschool'
    ]
  },
  {
    id: 3,
    village: 'Kampong Thom',
    image: '@/assets/kampong-thom.jpg',
    description: 'From food insecurity to sustainable agriculture with irrigation systems',
    achievements: [
      'Developed 10-acre community farm',
      'Implemented rainwater harvesting',
      'Established rice bank'
    ]
  }
];
</script>