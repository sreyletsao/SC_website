<template>
  <div>
    <AboutBanner />
    <OurStory />
    <SCA>
      <h2 class="text-3xl font-bold text-orange-500 text-center mb-10">Board Members</h2>
      <TeamCarousel :members="boardMembers" />

      <h2 class="text-3xl font-bold text-center text-orange-500 mt-20 mb-10">On-Site Team</h2>
      <TeamCarousel :members="onSiteTeam" />
    </SCA>
    <MissionSection />
    <AboutCTA />
  </div>
</template>

<script setup>
import AboutBanner from "@/components/about/AboutBanner.vue";
import OurStory from "@/components/about/OurStory.vue";
import AboutCTA from "@/components/about/AboutCTA.vue";
import MissionSection from "@/components/home/MissionSection.vue";
import TeamCarousel from "@/components/about/TeamCarousel.vue";
import SCA from "@/components/about/SCA.vue";
import { ref, onMounted } from 'vue';
import { getBoardMembers } from '@/api/board.js';
import { getOnSiteTeam } from '@/api/onSiteTeam.js';

const boardMembers = ref([]);
const onSiteTeam = ref([]);
onMounted(async () => {
  try {
    const boardRes = await getBoardMembers()
    boardMembers.value = boardRes.Team.map(member => ({
      ...member,
      image: `http://localhost:8000/storage/${member.image}`
    }))

    const teamRes = await getOnSiteTeam()
    onSiteTeam.value = teamRes.Staff.map(member => ({
      ...member,
      image: `http://localhost:8000/storage/${member.image}`
    }))

  } catch (error) {
    console.error('Error loading members:', error)
  }
})



</script>
