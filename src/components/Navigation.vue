<template>
  <div>
    <!-- Header -->
    <header class="bg-emerald-800 text-white">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-2 text-sm">
          <div class="flex space-x-4">
            <a href="#" class="hover:text-emerald-200 transition-colors">Sponsor Login</a>
            <a href="#" class="hover:text-emerald-200 transition-colors">Contact Us</a>
          </div>
          <div class="flex space-x-3">
            <Facebook class="w-4 h-4 hover:text-emerald-200 cursor-pointer transition-colors" />
            <Youtube class="w-4 h-4 hover:text-emerald-200 cursor-pointer transition-colors" />
            <Instagram class="w-4 h-4 hover:text-emerald-200 cursor-pointer transition-colors" />
            <Mail class="w-4 h-4 hover:text-emerald-200 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </header>

    <!-- Navigation -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
              <Leaf class="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 class="text-2xl font-bold text-emerald-800">Sustainable</h1>
              <p class="text-sm text-emerald-600 -mt-1">Cambodia</p>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <a href="#" class="text-gray-700 hover:text-emerald-800 transition-colors">Home</a>
            <div class="relative group">
              <button class="text-emerald-800 font-semibold border-b-2 border-orange-500 pb-1 flex items-center">
                Who We Are <ChevronDown class="w-4 h-4 ml-1" />
              </button>
            </div>
            <div class="relative group">
              <button class="text-gray-700 hover:text-emerald-800 transition-colors flex items-center">
                Programs <ChevronDown class="w-4 h-4 ml-1" />
              </button>
            </div>
            <a href="#" class="text-gray-700 hover:text-emerald-800 transition-colors">Photo Gallery</a>
            <div class="relative group">
              <button class="text-gray-700 hover:text-emerald-800 transition-colors flex items-center">
                Get Involved <ChevronDown class="w-4 h-4 ml-1" />
              </button>
            </div>
            <a href="#" class="text-gray-700 hover:text-emerald-800 transition-colors">Cambodia Trips</a>
            <a href="#" class="text-gray-700 hover:text-emerald-800 transition-colors">News</a>
          </div>

          <!-- Mobile Menu Button -->
          <button class="md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
            <Menu class="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t">
          <div class="flex flex-col space-y-3">
            <a href="#" class="text-gray-700">Home</a>
            <a href="#" class="text-emerald-800 font-semibold">Who We Are</a>
            <a href="#" class="text-gray-700">Programs</a>
            <a href="#" class="text-gray-700">Photo Gallery</a>
            <a href="#" class="text-gray-700">Get Involved</a>
            <a href="#" class="text-gray-700">Cambodia Trips</a>
            <a href="#" class="text-gray-700">News</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Facebook, Youtube, Instagram, Mail, Leaf, ChevronDown, Menu } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
</script>