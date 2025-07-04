<template>
  <div>
    <TopBar />
    <Navbar />
    <HeroSection />
    <ImpactStats />
    <More/>
    <!-- <MissionSection /> -->
    <!-- <ProgramsPreview /> -->
    <CorporateSponsors />
    <CallToAction />
    <Footer />
  </div>
</template>

<script setup>
import TopBar from '@/components/TopBar.vue'
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import ImpactStats from '@/components/home/ImpactStats.vue'
import MissionSection from '@/components/home/MissionSection.vue'
import ProgramsPreview from '@/components/home/ProgramsPreview.vue'
import CallToAction from '@/components/home/CallToAction.vue'
import CorporateSponsors from '@/components/home/CorporateSponsors.vue'
import Footer from '@/components/Footer.vue'
import More from '@/components/home/More.vue'
</script>
