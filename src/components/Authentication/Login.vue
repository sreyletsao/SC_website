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
          <div class="relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="form.password"
              placeholder="Enter your password"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"
            >
              {{ showPassword ? 'Hide' : 'Show' }}
            </button>
          </div>
        </div>

        <button
          type="submit"
          class="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
          :disabled="isLoading"
        >
          {{ isLoading ? 'Logging in...' : 'Login' }}
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
import apiInstance from '@/plugin/axios' // ✅ make sure this is set up properly

const router = useRouter()

const form = ref({
  email: '',
  password: ''
})
const isLoading = ref(false)
const showPassword = ref(false)

const handleLogin = async () => {
  if (!form.value.email || !form.value.password) {
    alert('Please fill in all fields.')
    return
  }

  isLoading.value = true

  try {
    const response = await apiInstance.post('/login', {
      email: form.value.email,
      password: form.value.password
    })

    const token = response.data.token
    localStorage.setItem('token', token)

    // Set default Authorization header for future requests
    apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`

    alert('Login successful!')
    router.push('/dashboard')
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      alert(`Login failed: ${error.response.data.message}`)
    } else {
      alert('Login failed: Server error')
    }
  } finally {
    isLoading.value = false
  }
}
</script>
