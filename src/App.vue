<template>
  <div class="min-h-screen flex flex-col">
    <TopBar v-if="showTopbar" />
    <Navbar v-if="showNavbar" />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer v-if="showFooter" />
  </div>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

import TopBar from './components/TopBar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

// Hide TopBar, Navbar, and Footer on dashboard page
const showTopbar = computed(() => route.name !== 'dashboard')
const showNavbar = computed(() => route.name !== 'dashboard')
const showFooter = computed(() => route.name !== 'dashboard')
</script>
