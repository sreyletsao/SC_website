<template>
  <div class="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-start max-w-4xl mx-auto">
    <img :src="photo" :alt="name" class="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-orange-300" />
    <div>
      <h3 class="text-xl font-semibold text-gray-800">{{ name }}</h3>
      <p class="text-sm text-orange-500 font-semibold mb-3">{{ role }}</p>
      <p class="text-gray-700 text-sm whitespace-pre-line leading-relaxed">{{ bio }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  photo: String,
  bio: String
})
</script>
