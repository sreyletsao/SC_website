<template>
  <section class="bg-white py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(card, index) in cards"
          :key="index"
          :class="[
            'relative rounded-[30px] overflow-hidden group shadow-lg hover:shadow-xl transition duration-300',
            index === 1 ? 'row-span-2 h-[720px]' : 'h-[350px]'
          ]"
        >
          <img
            :src="card.image"
            :alt="card.title"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute bottom-4 left-4 text-white text-2xl font-bold z-10"
            >
            {{ card.title }}
            </div>

          <!-- Optional: Play button overlay (centered) -->
          <div
            v-if="card.play"
            class="absolute inset-0 flex items-center justify-center"
          >
            <div
              class="w-14 h-14 bg-white bg-opacity-80 rounded-full flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-slate-800"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    title: 'Sharing Experience',
    image: '/src/img/involvedPage/whyV.png',
    play: false
  },
  {
    title: 'Scholarship',
    image: '/src/img/involvedPage/where.png',
    play: false
  },
  {
    title: 'Nutritional support',
    image: '/src/img/involvedPage/life.png',
    play: false
  },
  {
    title: 'Help poor child',
    image: '/src/img/involvedPage/when.png',
    play: false
  },
  {
    title: 'Transportation',
    image: '/src/img/involvedPage/bicycle.png',
    play: false
  },
  
]
</script>

<style scoped>
.group:hover img {
  transform: scale(1.03);
  transition: transform 0.3s ease;
}
</style>
