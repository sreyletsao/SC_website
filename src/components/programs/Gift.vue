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
        <div v-if="selected" class="bg-orange-50 rounded-xl p-6 border border-orange-200">
          <div>
            <h3 class="text-xl font-bold text-orange-600 mb-2">{{ giftsMap[selected].title }}</h3>
            <!-- <p class="text-gray-700 leading-relaxed">{{ giftsMap[selected].description }}</p> -->
            <div class="text-gray-700 text-justify leading-relaxed" v-html="formatDescription(giftsMap[selected].description)"></div>
          </div>
          <div class="bg-white p-2 rounded-lg shadow-sm w-1/2 mx-auto">
            <img
              :src="giftsMap[selected].detailImage"
              :alt="giftsMap[selected].label"
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
import { ref, computed } from "vue";

const selected = ref("cows");
const total = ref(0);
const quantities = ref({
  cows: 0,
  ducks: 0,
  chickens: 0,
  water: 0,
  garden: 0,
  basket: 0
});

const selectedOptions = ref({
  cows: null,
  ducks: null,
  chickens: null,
  water: null,
  garden: null,
  basket: null
});

const gifts = ref([
  {
    key: "cows",
    label: "Cows",
    title: "A Gift of Cows",
    image: "/src/img/gift/cows.png",
    detailImage: "/src/img/gift/cowDetail.png",
    description:
      `Cows are the most coveted resource for rural Cambodian families. In the rice fields, villagers must manually pull a plow through hard-packed clay to get a rice paddy ready for planting, or they pay a great deal to rent a cow. It can take more than a solid week of back-breaking labor to plow the same plot of land that a cow can plow in less than a day. And cow manure acts as a natural and readily available fertilizer for the crops, improving crop yield even on days the cow is resting.\n\n
Through a cow, a family can be empowered to feed themselves through increased food production, and to generate critically needed family income. The cow is shared among 5 families, used by all and bred annually. As calves are born each family becomes a “donor family”, with the families passing on ownership of the calves among themselves. Eventually the group (a “Self Help Group”) passes on a calf to a new Self Help Group. So your gift keeps giving… eventually helping an entire community in moving from poverty to self-reliance.\n\n
Like all Village Gifts through Sustainable Cambodia, this gift will be pooled and used to support the empowerment-based Community Development programs. These programs become self-sustaining through the pass-on process, through which the gift will continue for years to come as families become donors themselves. And all the empowerment begins with this gift!`,
    options: [
      { label: "Gift of a Full Cow", price: 800 },
      { label: "Share of a Cow", price: 200 }
    ]
  },
  {
    key: "ducks",
    label: "Ducks",
    title: "A Gift of Ducks",
    image: "/src/img/gift/duck.png",
    detailImage: "/src/img/gift/ducks.png",
    description:
      `Ducks are one of the many family empowerment programs used in Village Development by Sustainable Cambodia. Duck eggs help to provide protein for Cambodian children and families. Protein is often lacking in Cambodian diets, and protein deficiency is a primary cause of malnutrition and disease. And ducks are the perfect solution for many families: Foraging ducks roam the family garden, eating harmful bugs and leaving behind fertilizer which helps to improve crop yield.

Ducks provide empowerment to families in several ways: Eggs can be sold at market, providing an important source of income for the family. Ducklings mature at about 19 weeks, and then will lay between four to seven eggs per week.

These programs become self-sustaining through the pass-on process, through which this gift will continue for years to come. Not only will the family feed themselves, the family will also become a “donor family” as they will pass on ducks or other animals to neighboring families, who then do the same. And all this empowerment begins with this gift of ducks!`,
    options: [
      { label: "Ducks for a Village (10 Families)", price: 500 },
      { label: "Ducks for 5 Families", price: 250 }
    ]
  },
  {
    key: "chickens",
    label: "Chickens",
    title: "A Gift of Chickens",
    image: "/src/img/gift/chicken.png",
    detailImage: "/src/img/gift/chickens.png",
    description:
      `Chickens are very important additions to a Cambodian family. Chicken eggs help to provide important protein for the children and family, protein which is often lacking in Cambodian diets. And eggs and chickens can provide critically needed family income at the local market. In the vegetable garden, chickens eat harmful bugs, scratch up the soil and enrich it with droppings, contributing to the family’s vegetable crop. Chicks mature in 18-20 weeks, and then will lay about one egg per day.

Like all Village Gifts through Sustainable Cambodia, this gift will be pooled and used to support the empowerment-based Community Development programs. These programs become self-sustaining through the pass-on process, through which the gift will continue for years to come… the family can feed themselves, and the family soon becomes a “donor family” themselves, as they will pass on chickens or other animals to nearby families, who then do the same. Because Sustainable Cambodia operates on under 3% admin & fundraising costs, and those costs are provided by the founders and directors, every penny of this contribution will be used directly in the villages to empower village families. And it all starts with this gift of chickens!`,
    options: [
      { label: "10 Chickens (Family)", price: 80 },
      { label: "5 Chickens", price: 40 }
    ]
  },
  {
    key: "water",
    label: "Clean Water",
    title: "A Gift of Clean Water",
    image: "/src/img/homePage/water.png",
    detailImage: "/src/img/gift/waters.png",
    description:
      `Two-thirds of rural Cambodians do not have access to clean water. Many families have no alternative but to drink dirty water from scum-covered retaining ponds or must carry water in plastic containers from rivers that are kilometers away. Children are traditionally the primary water carriers in the family and often cannot attend school as it may take all day to carry water to their homes. A well, pond or rainwater catchment system can change all of this.

When clean water is available in a community, the whole village is transformed. Health and hygiene are vastly improved. This gift can help provide a well, or a community water pond and biosand filters, or a rooftop rainwater harvesting system. With a plentiful source of clean water, opportunities for vegetable gardens, fishponds and livestock will benefit the whole community, eliminating hunger and providing resources for economic development. And children can quickly gather water from the community well and still have time to attend school – becoming the foundation for a better Cambodia.

Like all Village Gifts through Sustainable Cambodia, this gift will be pooled and used to support the empowerment-based Community Development programs. These programs become self-sustaining through the pass-on process, through which the gift will continue for years to come as families become donors themselves, helping neighboring villages to install water systems. And all this empowerment starts with this gift of water….`,
    options: [
      { label: "Full Well or Water Project", price: 2000 },
      { label: "Share of a Well", price: 200 }
    ]
  },
  {
    key: "garden",
    label: "Vegetable Garden",
    title: "A Gift of a Garden",
    image: "src/img/gift/vegetable.png",
    detailImage: "src/img/gift/garden.png",
    description:
      `Gardens are a major key to improving nutrition and eliminating hunger for rural Cambodian families. Many families traditionally subsisted on rice, without the knowledge, seed or irrigation needed to grow alternative crops. The addition of vegetables gives the children and families much-needed vitamins and minerals to improve and sustain health.

The dry season can make gardening difficult – but with irrigation ponds, gardens can be cultivated year-round. The families are taught how to raise cucumbers, sweet potatoes, peanuts, tomatoes, squash, greens and other alternative crops. The gardens not only provide needed nutrition, but the families can sell vegetables at the market, generating critically needed income.

These programs become self-sustaining through the pass-on process, through which this gift will continue for years to come, as families become donors themselves, helping families in neighboring villages to grow a garden. And all this empowerment begins with this gift of a garden!`,
    options: [
      { label: "Gardens Galore (5 Families)", price: 400 },
      { label: "Garden for 1 Family", price: 80 }
    ]
  },
  {
    key: "basket",
    label: "Village Basket",
    title: "A Big Village Basket",
    image: "/src/img/gift/mix.png",
    detailImage: "/src/img/gift/mixs.png",
    description:
      `The contribution of a Big Village Gift Basket is combined with other Community Development funding to help continue the empowerment of rural Cambodian villages. Through the SC Community Development program, families obtain clean water (wells, BSF filters, ponds or rainwater harvesting), from which fresh water will help to end disease. They will receive training and seeds for alternative crops such as sweet potatoes, peanuts, tomatoes, squash and greens. Malnutrition in children will be reduced, and children will be able to attend school and preschool. Families will be given the opportunity to raise fish, chickens, ducks, pigs or cows. Your gift will help a poverty-stricken village to be transformed.

These programs become self-sustaining through the pass-on process, through which this gift will continue for years to come as families become donors themselves, passing on breeding animals and water, fish and gardens to other nearby villages.`,
    options: [
      { label: "Big Village Basket", price: 5000 },
      { label: "Small Village Basket", price: 2500 }
    ]
  }
]);

// Initialize selected options
gifts.value.forEach(gift => {
  selectedOptions.value[gift.key] = gift.options[0];
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
    return sum + selectedOptions.value[key].price * quantities.value[key];
  }, 0);
}
const expandedDescriptions = ref({
  cows: false,
  ducks: false,
  chickens: false,
  water: false,
  garden: false,
  basket: false
});

function toggleDescription(key) {
  expandedDescriptions.value[key] = !expandedDescriptions.value[key];
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
/* Custom animations */
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