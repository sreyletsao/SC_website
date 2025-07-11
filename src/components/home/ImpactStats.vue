<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <div class="text-4xl font-bold text-emerald-600 mb-2">{{ stats.students }}</div>
          <p class="text-gray-600">Students Supported</p>
        </div>
        <div>
          <div class="text-4xl font-bold text-emerald-600 mb-2">{{ stats.schools }}</div>
          <p class="text-gray-600">Schools Built</p>
        </div>
        <div>
          <div class="text-4xl font-bold text-emerald-600 mb-2">{{ stats.communities }}</div>
          <p class="text-gray-600">Communities Reached</p>
        </div>
        <div>
          <div class="text-4xl font-bold text-emerald-600 mb-2">{{ stats.years }}</div>
          <p class="text-gray-600">Years of Impact</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Final stats from real values
const finalStats = {
  students: 2500,
  schools: 45,
  communities: 120,
  years: 15
}

const stats = ref({
  students: 0,
  schools: 0,
  communities: 0,
  years: 0
})

// Animate count up
const animateStats = () => {
  const duration = 1500
  const steps = 60
  const stepDuration = duration / steps

  Object.keys(finalStats).forEach((key) => {
    const finalValue = finalStats[key]
    const increment = finalValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= finalValue) {
        stats.value[key] = finalValue
        clearInterval(timer)
      } else {
        stats.value[key] = Math.floor(current)
      }
    }, stepDuration)
  })
}

onMounted(() => {
  animateStats()
})
</script>
