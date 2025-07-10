<template>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content from child routes -->
    <div class="flex-1 p-6 bg-gray-100 min-h-screen ml-64">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
</script>
