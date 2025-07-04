<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Board Members</h2>
      <div class="space-y-10">
        <TeamMemberCard
          v-for="member in members"
          :key="member.name"
          v-bind="member"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TeamMemberCard from './TeamMemberCard.vue'

const members = [
  {
    name: 'Rotarian Richard R. Allen',
    role: 'Co-Founder & Board Chairman',
    photo: '/team/richard.jpg',
    bio: `Richard co-founded Sustainable Cambodia with his wife Susan Mastin... [your full bio here]`
  },
  {
    name: 'Rotarian Susan J. Mastin',
    role: 'Co-Founder & Treasurer',
    photo: '/team/susan.jpg',
    bio: `Susan is a full-time volunteer... [your full bio here]`
  },
  {
    name: 'Rotarian Gabor Karsai',
    role: 'Board President',
    photo: '/team/gabor.jpg',
    bio: `Gabor was born in Budapest... [your full bio here]`
  }
]
</script>
