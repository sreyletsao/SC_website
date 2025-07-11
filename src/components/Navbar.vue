<template>
  <nav class="bg-white shadow sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" class="w-36" />
      </RouterLink>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8 text-lm font-medium">
        <RouterLink
          to="/"
          class="hover:text-emerald-700 transition"
          :class="isActive('/')"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/about"
          class="hover:text-emerald-700 transition"
          :class="isActive('/about')"
        >
          About Us
        </RouterLink>

        <RouterLink
          to="/programs"
          class="hover:text-emerald-700 transition"
          :class="isActive('/programs')"
        >
          Programs
        </RouterLink>
        <RouterLink
          to="/getInvolved"
          class="hover:text-emerald-700 transition"
          :class="isActive('/getInvolved')"
        >
          Get Involved
        </RouterLink>
        
        <RouterLink
          to="/donate"
          class="hover:text-emerald-700 transition"
          :class="isActive('/donate')"
        >
          Donate
        </RouterLink>
        <RouterLink
          to="/login"
          class="hover:text-emerald-700 transition flex items-center space-x-1"
          :class="isActive('/login')"
        >
          <UserCog class="w-5 h-5" />
          <span>Admin</span>
        </RouterLink>

      </ul>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
        <Menu class="w-6 h-6 text-gray-700" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t px-4 py-3 bg-white shadow">
      <ul class="flex flex-col space-y-3 font-medium">
        <RouterLink
          to="/"
          class="hover:text-emerald-700"
          :class="isActive('/')"
          @click="mobileMenuOpen = false"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="hover:text-emerald-700"
          :class="isActive('/about')"
          @click="mobileMenuOpen = false"
        >
          About Us
        </RouterLink>
        <RouterLink
          to="/programs"
          class="hover:text-emerald-700"
          :class="isActive('/programs')"
          @click="mobileMenuOpen = false"
        >
          Programs
        </RouterLink>
        <RouterLink
          to="/donate"
          class="hover:text-emerald-700"
          :class="isActive('/donate')"
          @click="mobileMenuOpen = false"
        >
          Donate
        </RouterLink>
        <button
            @click="goToLogin"
            class="hover:text-emerald-700 transition flex items-center space-x-1 text-gray-700"
          >
            <UserCog class="w-5 h-5" />
            <span>Admin</span>
          </button>

      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, RouterLink, useRouter } from 'vue-router'
import { Menu,UserCog } from 'lucide-vue-next'

const route = useRoute()
const mobileMenuOpen = ref(false)
const router = useRouter()
const goToLogin = () => {
  router.push('/login')
}


// Add active link class
const isActive = (path) => {
  return route.path === path
    ? 'text-emerald-800 font-semibold border-b-2 border-orange-500 pb-1'
    : 'text-gray-700'
}
</script>
