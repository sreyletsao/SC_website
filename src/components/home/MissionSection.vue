<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Mission Content -->
      <div>
        <h2 class="text-4xl font-bold text-emerald-600 mb-6">Our Mission</h2>
        <p class="text-lg text-gray-600 mb-6">
          We believe in creating sustainable solutions that empower Cambodian communities to thrive independently. Through education, environmental stewardship, and community development, we're building a brighter future together.
        </p>

        <div class="space-y-6">
          <div class="flex items-start space-x-4">
            <GraduationCap class="w-6 h-6 text-emerald-600 mt-1" />
            <div>
              <h3 class="font-semibold text-gray-800">Education First</h3>
              <p class="text-gray-600 text-sm">Providing quality education and resources to underserved communities</p>
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <TreePine class="w-6 h-6 text-emerald-600 mt-1" />
            <div>
              <h3 class="font-semibold text-gray-800">Environmental Care</h3>
              <p class="text-gray-600 text-sm">Promoting sustainable practices and environmental conservation</p>
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <Users class="w-6 h-6 text-emerald-600 mt-1" />
            <div>
              <h3 class="font-semibold text-gray-800">Community Empowerment</h3>
              <p class="text-gray-600 text-sm">Building local capacity for long-term sustainable development</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Image -->
      <div class="relative">
        <img
          src="/src/img/aboutPage/mission.png"
          alt="Children learning"
          class="rounded-lg shadow-xl"
        />
        <div class="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg shadow-lg">
          <p class="font-semibold">Making a difference</p>
          <p class="text-sm opacity-90">one community at a time</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { GraduationCap, TreePine, Users } from 'lucide-vue-next'
</script>
