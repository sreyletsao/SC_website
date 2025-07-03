<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <GraduationCap class="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h3 class="font-semibold text-xl mb-2">Education</h3>
        <p class="text-gray-600">Free schooling, scholarships, teacher training, and after-school support.</p>
      </div>
      <div>
        <TreePine class="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h3 class="font-semibold text-xl mb-2">Environment</h3>
        <p class="text-gray-600">Clean water systems, tree planting, and organic farming initiatives.</p>
      </div>
      <div>
        <Users class="w-12 h-12 text-emerald-600 mx-auto mb-4" />
        <h3 class="font-semibold text-xl mb-2">Community</h3>
        <p class="text-gray-600">Capacity building, leadership training, and village empowerment.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { GraduationCap, TreePine, Users } from 'lucide-vue-next'
</script>
