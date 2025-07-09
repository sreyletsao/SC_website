<template>
  <section class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-emerald-700 mb-6">Admin Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 font-medium mb-1">Password</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          Login
        </button>
      </form>

      <div class="text-sm text-center mt-4 text-gray-600">
        Don't have an account?
        <RouterLink to="/register" class="text-emerald-700 hover:underline">Register</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiInstance from '@/plugin/axios' // ✅ adjust this path if needed

const router = useRouter()

const form = ref({
  email: '',
  password: '',
})

const handleLogin = async () => {
  if (!form.value.email || !form.value.password) {
    alert('Please fill in all fields.')
    return
  }

  try {
    const response = await apiInstance.post('/login', {
        email: form.value.email,
        password: form.value.password,
            })

    const token = response.data.token // ✅ Adjust this if your API returns token in another key
    localStorage.setItem('token', token)

    alert('Login successful!')
    router.push('/dashboard') // ✅ Change this to your dashboard or admin page if needed
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      alert(`Login failed: ${error.response.data.message}`)
    } else {
      alert('Login failed: Server error')
    }
  }
}
</script>
