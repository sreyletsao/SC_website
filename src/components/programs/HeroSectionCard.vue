<template>
  <!-- Hero Section with Background Image -->
  <section class="relative text-white py-20 min-h-[500px] flex items-center">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img 
        src="/src/img/programPage/hader.png"
        alt="Cambodia Community"
        class="w-full h-full object-cover"
      >
      <!-- Overlay for better text readability -->
      <div class="absolute inset-0 bg-gradient-to-r"></div>
      <div class="absolute inset-0 "></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg ">Our Programs</h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-shadow">
          Empowering communities through sustainable development initiatives that create lasting change in Cambodia
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button class="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            SPONSOR A CHILD
          </button>
          <button class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            DONATE
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.text-shadow-lg {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}
</style>