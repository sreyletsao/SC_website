<template>
  <section class="min-h-screen bg-gray-100 flex items-center justify-center p-6">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-emerald-700 mb-6">Admin Registration</h2>

      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Enter full name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-1">Password</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 font-medium mb-1">Confirm Password</label>
          <input
            v-model="form.confirmPassword"
            type="password"
            placeholder="Confirm password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import apiInstance from '@/plugin/axios'

const router = useRouter()
const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const handleRegister = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert('Passwords do not match!')
    return
  }

  try {
    const response = await apiInstance.post('/register', {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
      password_confirmation: form.value.confirmPassword,
    })

    const token = response.data.token
    localStorage.setItem('token', token)

    alert('Registration successful!')
    router.push('/dashboard')
  } catch (error) {
    if (error.response?.data?.message) {
      alert(`Registration failed: ${error.response.data.message}`)
    } else {
      alert('Registration failed: Server error')
    }
  }
}
</script>
