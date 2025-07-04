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
const boardMembers = [
  {
    name: "Rotarian Richard R. Allen",
    position: "Co-Founder & Board Chairman",
    photo: "/program.jpg",
    bio: `Richard co-founded Sustainable Cambodia with his wife Susan Mastin...`
  },
  {
    name: "Rotarian Richard R. Allen",
    position: "Co-Founder & Board Chairman",
    photo: "/program.jpg",
    bio: `Richard co-founded Sustainable Cambodia with his wife Susan Mastin...`
  },
  {
    name: "Rotarian Richard R. Allen",
    position: "Co-Founder & Board Chairman",
    photo: "/program.jpg",
    bio: `Richard co-founded Sustainable Cambodia with his wife Susan Mastin...`
  },
  {
    name: "Rotarian Richard R. Allen",
    position: "Co-Founder & Board Chairman",
    photo: "/program.jpg",
    bio: `Richard co-founded Sustainable Cambodia with his wife Susan Mastin...`
  },
  {
    name: "Rotarian Richard R. Allen",
    position: "Co-Founder & Board Chairman",
    photo: "/program.jpg",
    bio: `Richard co-founded Sustainable Cambodia with his wife Susan Mastin...`
  }
];

const onSiteTeam = [
  {
    name: "Phang Polin",
    position: "Executive Director",
    photo: "/bg.jpg",
    bio: `Richard co-founded Sustainable Cambodia with his wife Susan Mastin and with fellow director Bruce Lasky. Richard is a Rotarian with the Rotary Club of Gainesville, Florida (D-6970), where he serves on the International Service committee. Richard is the CEO of VOS Systems, a GPS/Mobile-IoT technology company located in the U.S. He is also a co-founder of Synogen, a private venture fund investing in the creation of tech and med-tech companies. Over his 30 year business career, Richard has co-founded RTI Surgical, Axogen , ViewRay , Chaologix, OrthoHelix, Xhale and other technology companies. A multiple Paul Harris (Rotary) Fellow, Richard holds two degrees from the University of Florida. In 2007 Richard received the Service Above Self award from Rotary International, the highest public service recognition award given by Rotary, for his work with Sustainable Cambodia.`
  },
  {
    name: "Phang Polin",
    position: "Executive Director",
    photo: "/bg.jpg",
    bio: `Richard co-founded Sustainable Cambodia with his wife Susan Mastin and with fellow director Bruce Lasky. Richard is a Rotarian with the Rotary Club of Gainesville, Florida (D-6970), where he serves on the International Service committee. Richard is the CEO of VOS Systems, a GPS/Mobile-IoT technology company located in the U.S. He is also a co-founder of Synogen, a private venture fund investing in the creation of tech and med-tech companies. Over his 30 year business career, Richard has co-founded RTI Surgical, Axogen , ViewRay , Chaologix, OrthoHelix, Xhale and other technology companies. A multiple Paul Harris (Rotary) Fellow, Richard holds two degrees from the University of Florida. In 2007 Richard received the Service Above Self award from Rotary International, the highest public service recognition award given by Rotary, for his work with Sustainable Cambodia.`
  },
  {
    name: "Phang Polin",
    position: "Executive Director",
    photo: "/bg.jpg",
    bio: `Richard co-founded Sustainable Cambodia with his wife Susan Mastin and with fellow director Bruce Lasky. Richard is a Rotarian with the Rotary Club of Gainesville, Florida (D-6970), where he serves on the International Service committee. Richard is the CEO of VOS Systems, a GPS/Mobile-IoT technology company located in the U.S. He is also a co-founder of Synogen, a private venture fund investing in the creation of tech and med-tech companies. Over his 30 year business career, Richard has co-founded RTI Surgical, Axogen , ViewRay , Chaologix, OrthoHelix, Xhale and other technology companies. A multiple Paul Harris (Rotary) Fellow, Richard holds two degrees from the University of Florida. In 2007 Richard received the Service Above Self award from Rotary International, the highest public service recognition award given by Rotary, for his work with Sustainable Cambodia.`
  },
  {
    name: "Phang Polin",
    position: "Executive Director",
    photo: "/bg.jpg",
    bio: `Richard co-founded Sustainable Cambodia with his wife Susan Mastin and with fellow director Bruce Lasky. Richard is a Rotarian with the Rotary Club of Gainesville, Florida (D-6970), where he serves on the International Service committee. Richard is the CEO of VOS Systems, a GPS/Mobile-IoT technology company located in the U.S. He is also a co-founder of Synogen, a private venture fund investing in the creation of tech and med-tech companies. Over his 30 year business career, Richard has co-founded RTI Surgical, Axogen , ViewRay , Chaologix, OrthoHelix, Xhale and other technology companies. A multiple Paul Harris (Rotary) Fellow, Richard holds two degrees from the University of Florida. In 2007 Richard received the Service Above Self award from Rotary International, the highest public service recognition award given by Rotary, for his work with Sustainable Cambodia.`
  }
];
</script>
