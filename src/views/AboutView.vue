<template>
  <div>
    <TopBar />
    <Navbar />
    <AboutBanner />
    <OurStory />
    <BoardMembers />
    <OnSiteTeam />
    <MissionValues />
    <!-- <Leadership /> -->
    <Timeline />
    <AboutCTA />
    <Footer />
  </div>
</template>

<script setup>
import TopBar from '@/components/TopBar.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import AboutBanner from '@/components/about/AboutBanner.vue'
import OurStory from '@/components/about/OurStory.vue'
import MissionValues from '@/components/about/MissionValues.vue'
import Leadership from '@/components/about/Leadership.vue'
import Timeline from '@/components/about/Timeline.vue'
import AboutCTA from '@/components/about/AboutCTA.vue'
import OnSiteTeam from '@/components/about/OnSiteTeam.vue'
import BoardMembers from '@/components/about/BoardMembers.vue'
</script>
