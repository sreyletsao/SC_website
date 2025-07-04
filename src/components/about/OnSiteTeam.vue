<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">On-Site Team</h2>
      <div class="space-y-10">
        <TeamMemberCard
          v-for="staff in team"
          :key="staff.name"
          v-bind="staff"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TeamMemberCard from './TeamMemberCard.vue'

const team = [
  {
    name: 'Phang Polin',
    role: 'Executive Director',
    photo: '/team/polin.jpg',
    bio: `I have been working for SC since 2003. My first job with SC was a Computer Teacher...`
  },
  {
    name: 'Youm Vicheka',
    role: 'Operations Manager',
    photo: '/team/vicheka.jpg',
    bio: `Vicheka started with SC as a student...`
  },
  {
    name: 'Ork Siep',
    role: 'HR / Admin Manager',
    photo: '/team/ork.jpg',
    bio: `I joined Sustainable Cambodia in 2008...`
  }
]
</script>
