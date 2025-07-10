<template>
  <div class="min-h-screen flex flex-col">
    <TopBar v-if="!isDashboardRoute" />
    <Navbar v-if="!isDashboardRoute" />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer v-if="!isDashboardRoute" />
  </div>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

import TopBar from './components/TopBar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

// ❗ This will match /dashboard and any child like /dashboard/board-members
const isDashboardRoute = computed(() => route.path.startsWith('/dashboard'))
</script>
