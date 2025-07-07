<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Logo + About -->
      <div>
        <div class="flex items-center space-x-3 mb-4">
          <div class="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
            <Leaf class="w-6 h-6 text-white" />
          </div>
          <h3 class="text-lg font-bold">Sustainable Cambodia</h3>
        </div>
        <p class="text-gray-400 mb-4">
          Building sustainable futures through education, environmental conservation, and community empowerment.
        </p>
        <div class="flex space-x-4">
          <a href="https://www.facebook.com/SustainableCambodia" target="_blank">
            <Facebook class="w-5 h-5 hover:text-emerald-400 transition" />
          </a>
          <a href="https://www.youtube.com/channel/UC4xuPa6bHkz4MGBwYdfRMJg" target="_blank">
            <Youtube class="w-5 h-5 hover:text-emerald-400 transition" />
          </a>
          <a href="https://www.instagram.com/sustainablecambodia/" target="_blank">
            <Instagram class="w-5 h-5 hover:text-emerald-400 transition" />
          </a>
          <a href="mailto:info@sustainablecambodia.org">
            <Mail class="w-5 h-5 hover:text-emerald-400 transition" />
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
        <ul class="space-y-2 text-gray-400">
          <li><RouterLink to="/" class="hover:text-white">Home</RouterLink></li>
          <li><RouterLink to="/about" class="hover:text-white">About Us</RouterLink></li>
          <li><RouterLink to="/programs" class="hover:text-white">Our Programs</RouterLink></li>
          <li><RouterLink to="/donate" class="hover:text-white">Donate</RouterLink></li>
        </ul>
      </div>

      <!-- Programs -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Programs</h4>
        <ul class="space-y-2 text-gray-400">
          <li><RouterLink to="/programs#education" class="hover:text-white">Education</RouterLink></li>
          <li><RouterLink to="/programs#environment" class="hover:text-white">Environment</RouterLink></li>
          <li><RouterLink to="/programs#community" class="hover:text-white">Community Development</RouterLink></li>
          <li><RouterLink to="#" class="hover:text-white">Cambodia Trips</RouterLink></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
        <div class="space-y-3 text-gray-400 text-sm">
          <p class="flex items-center">
            <MapPin class="w-4 h-4 mr-2" /> Phnom Penh, Cambodia
          </p>
          <p class="flex items-center">
            <Phone class="w-4 h-4 mr-2" /> +855 (0) 12 345 678
          </p>
          <p class="flex items-center">
            <Mail class="w-4 h-4 mr-2" /> info@sustainablecambodia.org
          </p>
        </div>
      </div>
    </div>

    <div class="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
      &copy; 2024 Sustainable Cambodia. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Youtube, Instagram, Mail, MapPin, Phone, Leaf } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
</script>
