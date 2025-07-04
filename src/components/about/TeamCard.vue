<template>
  <div class="text-center p-6 bg-gray-50 rounded-lg shadow">
    <img src="/src/img/homePage/2childs.png" :alt="name" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h4 class="text-xl font-semibold mb-1">{{ name }}</h4>
    <p class="text-sm text-gray-600 italic mb-4">{{ title }}</p>
    <p class="text-gray-700 text-sm"><slot /></p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  title: String,
  photo: String
})
</script>
