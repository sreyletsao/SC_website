<template>
  <div class="flex flex-col md:flex-row items-start space-x-0 md:space-x-6">
    <img src="/bg.jpg" :alt="name" class="w-32 h-32 rounded-lg object-cover mb-4 md:mb-0" />
    <div>
      <h4 class="text-xl font-semibold">{{ name }}</h4>
      <p class="text-gray-600 italic mb-2">{{ title }}</p>
      <p class="text-gray-700 text-sm"><slot /></p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  title: String,
  photo: String
})
</script>
