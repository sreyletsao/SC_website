<template>
  <HeroSectionCard/>
  <SectionHeaderCard/>
    <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8  m-10">
      <EducationCard/>
      <CleanWaterCard/>
      <HealthCard/>
      <SustainabilityCard/>
    </div>
  <Impact/>
  <CallToActionCard/>
</template>
<script setup>
import HeroSectionCard from '@/components/programs/HeroSectionCard.vue';
import SectionHeaderCard from '@/components/programs/SectionHeaderCard.vue';
import EducationCard from '@/components/programs/EducationCard.vue';
import CleanWaterCard from '@/components/programs/CleanWaterCard.vue';
import HealthCard from '@/components/programs/HealthCard.vue';
import SustainabilityCard from '@/components/programs/SustainabilityCard.vue';
import CallToActionCard from '@/components/programs/CallToActionCard.vue';
import Impact from '@/components/programs/Impact.vue';
</script>