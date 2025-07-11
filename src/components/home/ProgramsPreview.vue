<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Programs</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover how we're making a lasting impact through our comprehensive programs designed to create sustainable change.
        </p>
      </div>

      <!-- Program Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Education -->
        <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition">
          <img src="/src/img/homePage/2childs.png" alt="Education Program" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Education & Scholarships</h3>
            <p class="text-gray-600 mb-4">
              Supporting students with scholarships, school supplies, and educational infrastructure.
            </p>
            <RouterLink to="/programs" class="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
              Learn More <ArrowRight class="w-4 h-4 ml-1" />
            </RouterLink>
          </div>
        </div>

        <!-- Environment -->
        <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition">
          <img src="/communicate.jpg" alt="Environmental Program" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Environmental Conservation</h3>
            <p class="text-gray-600 mb-4">
              Protecting natural resources and promoting sustainable environmental practices.
            </p>
            <RouterLink to="/programs" class="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
              Learn More <ArrowRight class="w-4 h-4 ml-1" />
            </RouterLink>
          </div>
        </div>

        <!-- Community -->
        <div class="bg-white rounded-lg shadow-lg hover:shadow-xl transition">
          <img src="/bg.jpg" alt="Community Development" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Community Development</h3>
            <p class="text-gray-600 mb-4">
              Building infrastructure and capacity for long-term community growth.
            </p>
            <RouterLink to="/programs" class="text-emerald-600 font-semibold hover:text-emerald-700 flex items-center">
              Learn More <ArrowRight class="w-4 h-4 ml-1" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
</script>
