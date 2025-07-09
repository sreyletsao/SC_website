<template>
  <div class="flex">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="flex-1 p-6 bg-gray-100 min-h-screen ml-64">
      <!-- Header -->
      <header class="mb-8 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
        <button @click="logout" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Logout
        </button>
      </header>

      <!-- Welcome message -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold text-gray-700">Welcome back, {{ username }}!</h2>
        <p class="text-gray-600">Here's a quick overview of your stats.</p>
      </section>

      <!-- Stats Cards -->
      <section class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div class="card p-6 bg-white rounded shadow">
          <h3 class="text-lg font-semibold mb-2">Users</h3>
          <p class="text-3xl font-bold text-blue-600">{{ stats.users }}</p>
        </div>
        <div class="card p-6 bg-white rounded shadow">
          <h3 class="text-lg font-semibold mb-2">Sales</h3>
          <p class="text-3xl font-bold text-green-600">${{ stats.sales }}</p>
        </div>
        <div class="card p-6 bg-white rounded shadow">
          <h3 class="text-lg font-semibold mb-2">Messages</h3>
          <p class="text-3xl font-bold text-purple-600">{{ stats.messages }}</p>
        </div>
      </section>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiInstance from '@/plugin/axios'
import Sidebar from './Sidebar.vue'

const router = useRouter()

const username = ref('John Doe') // ← required for template
const stats = ref({              // ← required for template
  users: 1200,
  sales: 35000,
  messages: 85,
})

async function logout() {
  try {
    await apiInstance.post('/logout')
    localStorage.removeItem('token')
    router.push('/login')
  } catch (error) {
    console.error('Logout failed:', error)
    alert('Logout failed, please try again.')
  }
}
</script>


