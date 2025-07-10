<template>
  <div>
    <header class="mb-8 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
      <button
        @click="logout"
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </header>

    <section class="mb-8">
      <h2 class="text-xl font-semibold text-gray-700">Welcome back, {{ username }}!</h2>
      <p class="text-gray-600">Here's a quick overview of your stats.</p>
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div class="card p-6 bg-white rounded shadow">
        <h3 class="text-lg font-semibold mb-2">Board Members</h3>
        <p class="text-3xl font-bold text-blue-600">{{ stats.board }}</p>
      </div>
      <div class="card p-6 bg-white rounded shadow">
        <h3 class="text-lg font-semibold mb-2">On-Site Team</h3>
        <p class="text-3xl font-bold text-green-600">{{ stats.team }}</p>
      </div>
      <div class="card p-6 bg-white rounded shadow">
        <h3 class="text-lg font-semibold mb-2">Messages</h3>
        <p class="text-3xl font-bold text-purple-600">{{ stats.messages }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import apiInstance from '@/plugin/axios'
import { getBoardMembers } from '@/api/board.js'
import { getOnSiteTeam } from '@/api/onSiteTeam.js'

const router = useRouter()
const username = ref(localStorage.getItem('username') || 'Admin')

const stats = ref({
  board: 0,
  team: 0,
  messages: 85
})

onMounted(async () => {
  try {
    const boardRes = await getBoardMembers()
    stats.value.board = boardRes.Team.length
    const teamRes = await getOnSiteTeam()
    stats.value.team = teamRes.Staff.length
  } catch (err) {
    console.error('Stats load error:', err)
  }
})

async function logout() {
  try {
    await apiInstance.post('/logout')
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    delete apiInstance.defaults.headers.common['Authorization']
    router.push('/login')
  } catch (err) {
    alert('Logout failed')
  }
}
</script>
