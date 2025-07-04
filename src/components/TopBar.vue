<template>
  <div class="bg-emerald-800 text-white text-sm">
    <div class="container mx-auto px-4 py-2 flex justify-between items-center">
      <div class="flex space-x-4">
        <a href="#" class="hover:text-emerald-200 transition">Sponsor Login</a>
        <a href="#" class="hover:text-emerald-200 transition">Contact Us</a>
      </div>
      <div class="flex space-x-3">
        <a href="https://www.facebook.com/SustainableCambodia" target="_blank" class="hover:text-emerald-200">
          <Facebook class="w-4 h-4" />
        </a>
        <a href="https://www.youtube.com/channel/UCUNs0tY2ais7BLhaB_C4tDw" target="_blank" class="hover:text-emerald-200">
          <Youtube class="w-4 h-4" />
        </a>
        <a href="https://www.instagram.com/sustainablecambodia/" target="_blank" class="hover:text-emerald-200">
          <Instagram class="w-4 h-4" />
        </a>
        <a href="mailto:info@sustainablecambodia.org" class="hover:text-emerald-200">
          <Mail class="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Facebook, Youtube, Instagram, Mail } from 'lucide-vue-next'
</script>
