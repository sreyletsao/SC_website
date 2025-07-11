<template>
  <div class="relative w-full max-w-6xl mx-auto px-4">
    <!-- Slider Container -->
    <div ref="sliderContainer" class="keen-slider">
      <div
        v-for="(member, index) in members"
        :key="index"
        class="keen-slider__slide"
      >
        <div class="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row items-center border border-gray-100 h-full mx-1">
          <img
            :src="member.image"
            :alt="member.name"
            class="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full mb-4 md:mb-0 md:mr-4"
          />
          <div class="text-center md:text-left">
            <h3 class="text-lg font-bold text-gray-800">{{ member.name }}</h3>
            <p class="text-orange-600 font-semibold mb-2">{{ member.position }}</p>
            <p class="text-sm text-gray-600">
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons (Optional) -->
    <button
      @click="slider?.prev()"
      class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border rounded-full w-8 h-8 flex items-center justify-center shadow z-10"
    >
      ‹
    </button>
    <button
      @click="slider?.next()"
      class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border rounded-full w-8 h-8 flex items-center justify-center shadow z-10"
    >
      ›
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import KeenSlider from 'keen-slider'

const props = defineProps({
  members: Array,
})

const sliderContainer = ref(null)
const slider = ref(null)
const interval = ref(null)

// Watch for when props.members is loaded
watch(
  () => props.members,
  async (newVal) => {
    if (newVal.length && sliderContainer.value) {
      await nextTick() // Wait until DOM is rendered

      // Destroy old slider if exists
      if (slider.value) {
        slider.value.destroy()
      }

      slider.value = new KeenSlider(sliderContainer.value, {
        loop: true,
        slides: {
          perView: 1,
          spacing: 8,
        },
        breakpoints: {
          '(min-width: 768px)': {
            slides: {
              perView: 2,
              spacing: 12,
            },
          },
        },
      })

      startAutoplay()

      sliderContainer.value.addEventListener('mouseenter', pauseAutoplay)
      sliderContainer.value.addEventListener('mouseleave', startAutoplay)
    }
  },
  { immediate: true }
)

onUnmounted(() => {
  clearInterval(interval.value)
  if (slider.value) slider.value.destroy()
})

function startAutoplay() {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    if (slider.value) slider.value.next()
  }, 3000)
}

function pauseAutoplay() {
  clearInterval(interval.value)
}
</script>


<style>
@import 'keen-slider/keen-slider.min.css';

.keen-slider {
  overflow: visible;
  padding: 8px 0;
}

.keen-slider__slide {
  min-width: calc(100% - 8px) !important;
}

@media (min-width: 768px) {
  .keen-slider__slide {
    min-width: calc(50% - 12px) !important;
  }
}
</style>