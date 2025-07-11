<template>
    <section class="bg-white py-16 px-4">
        <!-- Top Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-orange-500">
          Why Volunteer with Sustainable Cambodia?
        </h2>
       
      </div>
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      
      <!-- Left: Title with background image -->
      <div
        class="h-80 md:h-full rounded-xl bg-cover bg-center"
        style="background-image: url('https://sustainablecambodia.org/wp-content/uploads/2023/05/GI-NSU-Banner.jpg');"
      >
      </div>

      <!-- Right: Paragraphs + CTA -->
      <div>
        <p class="text-slate-700 text-base md:text-lg mb-4">
          Join people of all ages – from enthusiastic teens to passionate retirees – who have called this experience one of the most meaningful chapters of their lives.
        </p>

        <div class="border-l-4 border-orange-400 pl-4 italic text-slate-600 mb-4">
          “It isn't easy... but many, even in their 60s and 70s, say it's the best experience of their life.”
        </div>

        <p class="text-slate-700 text-base md:text-lg mb-4">
          A stay of <span class="text-orange-600 font-semibold">4–5 months</span> is ideal, allowing time to understand Cambodian life, complete orientation, and contribute meaningfully. If you have relevant experience, shorter placements may be possible.
        </p>

        <p class="text-slate-700 text-base md:text-lg mb-6">
          You'll be inspired by the strength of families and form real bonds with joyful, eager-to-learn children.
        </p>
      </div>
    </div>
  </section>
  <hr>
  <section class="bg-white py-16 px-4">
    <div class="max-w-6xl mx-auto space-y-16">
      <InfoCard
        title="Why Volunteer?"
        content="Volunteering on-site in Cambodia is life-changing. Past volunteers of all ages say it's one of the most fulfilling experiences of their lives..."
        image="/src/img/involvedPage/whyV.png"
        ctaText="Watch Our Intro!"
      />
    </div>
  </section>
</template>

<script setup>
import InfoCard from './InfoCard.vue'
</script>
