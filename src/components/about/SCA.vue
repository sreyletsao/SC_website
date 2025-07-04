<template>
  <section class="px-4 py-16 max-w-6xl mx-auto">
    <div class="bg-white rounded-xl shadow-md overflow-hidden mb-12">
      <div class="p-8">
        <div class="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
          <!-- Left Side: Heading -->
          <div class="text-left md:w-1/2">
            <h2 class="text-3xl font-bold text-green-500 leading-snug">
              About Sustainable 
              <span class="text-orange-400">Cambodia Australia</span>
            </h2>
          </div>

          <!-- Right Side: Logos -->
          <div class="flex justify-center md:justify-end gap-4 md:w-1/2">
            <img
              src="/src/img/logo/australia.png"
              alt="Sustainable Cambodia Australia Logo"
              class="h-16 md:h-20 object-contain"
            />
            <img
              src="/src/img/logo/rotary.png"
              alt="Rotary Logo"
              class="h-16 md:h-20 object-contain"
            />
            <img
              src="/src/img/logo/rotaryworld.png"
              alt="Rotary World Logo"
              class="h-16 md:h-20 object-contain"
            />
          </div>
        </div>
        <div class="prose max-w-none text-gray-600">
          <p>SCA is an initiative of senior Rotarians from Districts across Australia. We are partnered with Sustainable Cambodia USA, headquartered in Gainesville, Florida, with SC in Pursat Town, Pursat Province, Cambodia and with the Rotary Club of Pursat Cambodia. We have been joined by other Rotary Clubs and Districts in Canada and UK.</p>

          <h3 class="text-xl font-semibold text-orange-600 mt-8 mb-4">Our Support Network</h3>
          <ul class="list-disc pl-5 space-y-2">
            <li>Supported by Rotary Australia World Community Service (RAWCS) Projects 39 and 39C</li>
            <li>Donations to these RAWCS projects are tax deductible in Australia</li>
            <li>Supported by Inner Wheel, Rotaract, and many private supporters</li>
            <li>All non-Cambodian members are 100% volunteer</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Our Work Section -->
    <div class="grid md:grid-cols-2 gap-8 mb-12">
      <div class="bg-orange-50 rounded-xl p-8 border-l-4 border-orange-500">
        <h3 class="text-2xl font-bold text-orange-600 mb-4">Our Task</h3>
        <p
          class="text-gray-600 mb-4"
        >We empower rural villagers to create self-sustaining communities with:</p>
        <ul class="grid grid-cols-2 gap-2 text-sm">
          <li class="flex items-center" v-for="(work, index) in works" :key="index">
            <span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            {{ work }}
          </li>
        </ul>
      </div>

      <div class="bg-green-50 rounded-xl p-8 border-l-4 border-green-500">
        <h3 class="text-2xl font-bold text-green-800 mb-4">Our Approach</h3>
        <p class="text-gray-600 mb-4">SCA empowers communities through the self-help principle:</p>
        <ul class="space-y-3 text-gray-600">
          <li class="flex items-start" v-for="(item, index) in approach" :key="index">
            <svg
              class="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Goals and Focus Areas -->
    <div class="bg-white rounded-xl shadow-md overflow-hidden mb-12">
      <div class="p-8">
        <h2 class="text-3xl font-bold text-orange-500 mb-6">Goals and Focus Areas</h2>
        <div class="prose max-w-none text-gray-600">
          <p>Our goal is to meet challenges set by Rotary International and the World Food Programme to alleviate poverty in Pursat Province, identified as one of the world's poorest areas.</p>

          <h3 class="text-xl font-semibold text-gray-800 mt-8 mb-4">Our Impact</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="text-4xl font-bold text-orange-500 mb-2">300+</div>
              <div class="text-gray-600">Students assisted through to university</div>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="text-4xl font-bold text-orange-500 mb-2">10</div>
              <div class="text-gray-600">Communities supported in Bakan district</div>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg">
              <div class="text-4xl font-bold text-orange-500 mb-2">97%</div>
              <div class="text-gray-600">Of funding goes directly to programs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
    <div class="mt-20 bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-8">
      <h2 class="text-3xl font-bold text-center text-orange-500 mb-6">How You Can <span class="text-green-500">Help</span></h2>
      <div class="max-w-3xl mx-auto text-center text-gray-600 mb-8">
        <p>Your donation can provide clean water wells, animal pass-on programs, student sponsorships, or university scholarships.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-xl font-semibold mb-3">RAWCS Project 39</h3>
          <p
            class="text-gray-600 mb-4"
          >Empower rural villagers through clean water, food security, and education projects.</p>
          <a
            href="https://donations.rawcs.com.au/Default.aspx?ProjectID=258&ReturnTo=4"
            class="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >Donate Now</a>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-xl font-semibold mb-3">RAWCS Project 39C</h3>
          <p class="text-gray-600 mb-4">Support student sponsorships and school programs.</p>
          <a
            href="https://donations.rawcs.com.au/Default.aspx?ProjectID=340&ReturnTo=4"
            class="inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >Donate Now</a>
        </div>
      </div>
    </div>

    <!-- Contact Information -->
    <div class="mt-12 grid md:grid-cols-2 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h3 class="text-xl font-semibold mb-4 text-orange-400">Australian Contacts</h3>
        <div class="space-y-3 text-gray-600">
          <p>
            <strong>PDG Jennifer Scott</strong>
            <br />jennifer@scottadr.com
            <br />+61 414 367 631
          </p>
          <p>
            <strong>Rtn Dennise Herrick</strong>
            <br />denniseh100@gmail.com
            <br />+61 416 280 100
          </p>
        </div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm text-orange-400">
        <h3 class="text-xl font-semibold mb-4">US Contact</h3>
        <div class="text-gray-600">
          <p>
            <strong>Susan Mastin</strong>
            <br />usoffice@sustainablecambodia.org
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import TeamCarousel from "@/components/about/TeamCarousel.vue";

const boardMembers = ref([
  // Example data, replace with real members
  { name: "Member 1", role: "Chair", photo: "" },
  { name: "Member 2", role: "Treasurer", photo: "" }
]);

const onSiteTeam = ref([
  // Example data, replace with real members
  { name: "On-Site 1", role: "Coordinator", photo: "" },
  { name: "On-Site 2", role: "Field Officer", photo: "" }
]);

const works = ref([
  "Clean water systems",
  "Wells & pumps",
  "Biosand filters",
  "Latrines",
  "School buildings",
  "Libraries",
  "Student sponsorships",
  "Teaching aids"
]);
const approach = ref([
  "Communities decide their own priorities",
  "Villagers shoulder the work and maintenance",
  "SC provides training in health, education, farming, and more"
]);
</script>