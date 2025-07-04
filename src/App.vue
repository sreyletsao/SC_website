<template>
  <div class="min-h-screen flex flex-col">
    <TopBar />
    <Navbar />
    <main class="flex-grow">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue';
</script>
