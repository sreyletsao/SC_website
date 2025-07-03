<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Corporate Sponsors</h2>
      <div class="flex flex-wrap justify-center items-center gap-10">
        <a
          v-for="(sponsor, index) in sponsors"
          :key="index"
          :href="sponsor.link"
          target="_blank"
          rel="noopener noreferrer"
          class="block w-40 h-24 flex items-center justify-center p-4 hover:opacity-80 transition-opacity"
        >
          <img
            :src="sponsor.logo"
            :alt="sponsor.name"
            class="max-h-16 object-contain"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const sponsors = [
  { name: 'Sponsor A', logo: '/synogenLogo.webp', link: 'http://www.synogen.com/' },
  { name: 'Sponsor B', logo: '/rideforcambodia.jpg', link: 'http://www.rideforcambodia.com/' },
  { name: 'Sponsor C', logo: '/sponsors/sponsor3.png', link: 'https://example.com' },
  { name: 'Sponsor D', logo: '/sponsors/sponsor4.png', link: 'https://example.com' }
]
</script>
