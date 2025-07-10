<template>
  <div class="bg-[#41654F] min-h-screen p-4 md:p-8 text-gray-800">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
      <!-- LEFT SIDE: Gift Display -->
      <div class="bg-white rounded-xl p-6 shadow-lg">
        <div class="mb-6">
          <h2 class="text-3xl font-bold text-orange-500 mb-2">Village Gift Program</h2>
          <p class="text-gray-600 text-justify">
            Help village families change their lives through the Village Gift program! <br><br>
            100% of the funds you contribute will go directly into the Village Development program, helping families obtain clean water, farm animals, vegetable gardens and agriculture. Village families who become part of the Pass-On Program are empowered to become donors themselves: When their animals have grown, the family passes on an identical gift to two other families, and those families later do the same. So your gift keeps on growing through the years, creating positive change by empowerment of village families. <br><br>
            Your gift can be made in your name, or that of a friend or family member. You can choose as many gifts as you wish. For each gift we’ll send you a thank-you card, and send one to the friend or family member in whose name you gave. <br>
          </p>
        </div>

        <!-- Gift Selection Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div
            v-for="gift in gifts"
            :key="gift.key"
            @click="selectGift(gift.key)"
            class="cursor-pointer group border-2 rounded-xl p-3 transition-all duration-300 hover:shadow-md"
            :class="gift.key === selected ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-orange-300'"
          >
            <div class="bg-gray-100 rounded-lg mb-2 flex justify-center">
              <img :src="gift.image" :alt="gift.label" class="w-full h-24 object-cover" />
            </div>
            <p
              class="text-center font-medium text-gray-800 group-hover:text-orange-600"
            >{{ gift.label }}</p>
          </div>
        </div>

        <!-- Selected Gift Detail -->
        <div v-if="giftsMap[selected]" class="bg-orange-50 rounded-xl p-6 border border-orange-200">
          <div>
            <h3 class="text-xl font-bold text-orange-600 mb-2">{{ giftsMap[selected]?.title }}</h3>
            <div class="text-gray-700 text-justify leading-relaxed" v-html="formatDescription(giftsMap[selected]?.description)"></div>
          </div>
          <div class="bg-white p-2 rounded-lg shadow-sm w-1/2 mx-auto">
            <img
              :src="giftsMap[selected]?.detailImage"
              :alt="giftsMap[selected]?.label"
              class="w-64 h-44 object-cover rounded"
            />
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE: Order Form -->
            <div class="bg-white rounded-xl p-6 shadow-lg">
        <h2 class="text-3xl font-bold text-orange-500 mb-6">Your Gift Selection</h2>

        <!-- Gift Item -->
        <div class="space-y-6 mb-8">
          <div
            v-for="(gift, index) in gifts"
            :key="index"
            class="bg-gray-50 rounded-xl p-5 border border-gray-200 transition-all hover:border-orange-300"
          >
            <div class="flex flex-col md:flex-row md:items-center gap-4">
              <!-- Gift Image -->
              <div class="flex-shrink-0">
                <div
                  class="bg-white rounded-lg shadow-sm border border-gray-100 w-16 h-16 flex items-center justify-center"
                >
                  <img :src="gift.image" :alt="gift.label" class="h-16 object-contain" />
                </div>
              </div>

              <!-- Gift Info -->
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-semibold text-gray-800 truncate">{{ gift.title }}</h3>
                <div class="mt-1">
                  <select
                    v-model="selectedOptions[gift.key]"
                    class="w-full text-sm p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                  >
                    <option
                      v-for="(option, i) in gift.options"
                      :value="option"
                      :key="i"
                    >{{ option.label }} - ${{ option.price.toLocaleString() }}</option>
                  </select>
                </div>
              </div>

              <!-- Quantity Controls -->
              <div class="flex flex-col items-end">
                <div class="flex items-center">
                  <button
                    @click="decrement(gift.key)"
                    class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-l-md hover:bg-gray-300 transition"
                    :class="{'opacity-50 cursor-not-allowed': quantities[gift.key] <= 0}"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <input
                    type="number"
                    min="0"
                    v-model.number="quantities[gift.key]"
                    class="w-12 h-8 text-center border-t border-b border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                  <button
                    @click="increment(gift.key)"
                    class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-r-md hover:bg-gray-300 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
                <div class="mt-2 text-right">
                  <span class="text-sm text-gray-500">Subtotal:</span>
                  <span
                    class="ml-2 font-medium text-orange-600"
                  >${{ (selectedOptions[gift.key].price * quantities[gift.key]).toLocaleString() }}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        <!-- Total Summary -->
        <div class="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
          <div class="flex justify-between items-center mb-2">
            <span class="font-semibold text-gray-700">Total Contribution</span>
            <span class="text-2xl font-bold text-orange-600">${{ total.toLocaleString() }}</span>
          </div>
          <div class="flex items-center text-sm text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>100% goes directly to village programs</span>
          </div>
        </div>

        <!-- Donor Information -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Donor Information</h3>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
              <input
                type="text"
                required
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
              <input
                type="text"
                required
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input
              type="email"
              required
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>


        <!-- Payment Information -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Payment Information</h3>
          <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div class="flex items-center gap-3 mb-4">
              <div class="flex items-center gap-2">
                <input
                  type="radio"
                  id="creditCard"
                  name="payment"
                  checked
                  class="h-4 w-4 text-orange-600 focus:ring-orange-500"
                />
                <label for="creditCard" class="font-medium">Credit Card</label>
              </div>
              <div class="flex gap-2">
                <img
                  src="/src/img/gift/image.png"
                  class="h-6"
                  alt="Visa"
                />
                <img
                  src="/src/img/gift/mastercard.png"
                  class="h-6"
                  alt="Mastercard"
                />
              </div>
            </div>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <button
          class="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          :disabled="total === 0"
          :class="{'opacity-70 cursor-not-allowed': total === 0}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          Donate ${{ total.toLocaleString() }}
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import apiInstance from "@/plugin/axios";

const selected = ref("");
const total = ref(0);
const quantities = ref({});
const selectedOptions = ref({});
const gifts = ref([]);
const isLoading = ref(true);

function getImageUrl(path) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `http://localhost:8000/storage/${path}`;
}

onMounted(async () => {
  try {
    const response = await apiInstance.get('/gifts');
    gifts.value = response.data.map(gift => ({
      ...gift,
      image: getImageUrl(gift.image),
      detailImage: getImageUrl(gift.detail_image)
    }));
    if (gifts.value.length > 0) {
      selected.value = gifts.value[0].key;
    }
  } catch (error) {
    console.error('Error loading gifts:', error);
  } finally {
    gifts.value.forEach(gift => {
      selectedOptions.value[gift.key] = gift.options[0];
      quantities.value[gift.key] = 0;
    });
    isLoading.value = false;
  }
});

const giftsMap = computed(() => {
  return Object.fromEntries(gifts.value.map(g => [g.key, g]));
});

function selectGift(key) {
  selected.value = key;
}

function increment(key) {
  quantities.value[key]++;
  updateTotal();
}

function decrement(key) {
  if (quantities.value[key] > 0) {
    quantities.value[key]--;
    updateTotal();
  }
}

function updateTotal() {
  total.value = Object.keys(quantities.value).reduce((sum, key) => {
    const option = selectedOptions.value[key];
    if (option) {
      return sum + option.price * quantities.value[key];
    }
    return sum;
  }, 0);
}

function formatDescription(text) {
  if (!text) return "";
  return text
    .split("\n\n")
    .map(paragraph => `<p class="mb-4">${paragraph.trim()}</p>`)
    .join("");
}
</script>

<style>
.hover-scale {
  transition: transform 0.3s ease;
}
.hover-scale:hover {
  transform: scale(1.03);
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.rotate-180 {
  transform: rotate(180deg);
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>
