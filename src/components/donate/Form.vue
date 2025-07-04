<template>
  <div class="min-h-screen text-black px-4 py-8 flex flex-col items-center mt-6">
    <div class="w-full max-w-7xl flex flex-col md:flex-row gap-10 pl-12">
      <!-- Smaller Form -->
      <form @submit.prevent="submitForm"
            class="bg-white p-4 rounded-lg shadow w-full md:w-1/2 space-y-4 text-sm">
        <!-- Donation Amount -->
        <div>
          <label class="block font-semibold mb-1">Donation Amount *</label>
          <div class="flex gap-3 flex-wrap text-sm">
            <label class="flex items-center gap-1">
              <input type="radio" v-model="form.amount" :value="25" /> $25
            </label>
            <label class="flex items-center gap-1">
              <input type="radio" v-model="form.amount" :value="50" /> $50
            </label>
            <label class="flex items-center gap-1">
              <input type="radio" v-model="form.amount" :value="100" /> $100
            </label>
            <label class="flex items-center gap-1">
              <input type="radio" v-model="form.amount" :value="250" /> $250
            </label>
            <label class="flex items-center gap-1">
              <input type="radio" v-model="form.amount" value="other" /> Other
            </label>
          </div>

          <div v-if="form.amount === 'other'" class="mt-2">
            <input
              v-model.number="otherAmount"
              type="number"
              placeholder="Enter custom amount"
              class="w-full border p-2 rounded text-sm"
              min="1"
              required
            />
          </div>
        </div>

        <!-- Comment -->
        <div>
          <label class="block font-semibold mb-1">Comment</label>
          <textarea v-model="form.comment" rows="2" class="w-full border p-2 rounded text-sm"></textarea>
        </div>

        <!-- Recurring -->
        <div>
          <label class="block font-semibold mb-1">Is this a Recurring Gift? *</label>
          <select v-model="form.recurring" class="w-full border p-2 rounded text-sm" required>
            <option>No</option>
            <option>Yes - Monthly</option>
            <option>Yes - Yearly</option>
          </select>
        </div>

        <!-- Donor Info -->
        <div class="grid md:grid-cols-2 gap-3">
          <input type="text" placeholder="First Name" v-model="form.firstName" class="w-full border p-2 rounded text-sm" required />
          <input type="text" placeholder="Last Name" v-model="form.lastName" class="w-full border p-2 rounded text-sm" required />
          <input type="email" placeholder="Email Address" v-model="form.email" class="w-full border p-2 rounded text-sm col-span-2" required />
        </div>

        <!-- Contact Info -->
        <div class="grid md:grid-cols-2 gap-3">
          <input type="text" placeholder="Address Line 1" v-model="form.address1" class="w-full border p-2 rounded text-sm" required />
          <input type="text" placeholder="Address Line 2" v-model="form.address2" class="w-full border p-2 rounded text-sm" />
          <input type="text" placeholder="City" v-model="form.city" class="w-full border p-2 rounded text-sm" required />
          <input type="text" placeholder="State / Province" v-model="form.state" class="w-full border p-2 rounded text-sm" />
          <input type="text" placeholder="Postal Code" v-model="form.postal" class="w-full border p-2 rounded text-sm" />
          <select v-model="form.country" class="w-full border p-2 rounded text-sm" required>
            <option value="United States">United States</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <!-- Payment Info -->
        <div class="space-y-2">
          <label class="block font-semibold text-sm">Payment Information *</label>
          <div class="grid md:grid-cols-3 gap-3">
            <input type="text" placeholder="Card Number" class="w-full border p-2 rounded text-sm" disabled />
            <input type="text" placeholder="MM/YY" class="w-full border p-2 rounded text-sm" disabled />
            <input type="text" placeholder="CVC" class="w-full border p-2 rounded text-sm" disabled />
          </div>
          <p class="text-xs text-gray-500 italic">* Payment fields are mocked and disabled.</p>
        </div>

        <!-- Submit -->
        <div class="text-center">
          <button type="submit" class="bg-green-700 hover:bg-green-800 text-white px-8 py-2 rounded shadow transition text-sm">
            Submit
          </button>
        </div>
      </form>

      <!-- Organization Info -->
      <div class="w-full md:w-1/2 space-y-4 text-sm pr-6">
        <p class="text-lg font-bold">To donate by mail:</p>
        <p>
          Please send a check payable to:<br />
          <strong>Sustainable Cambodia, Inc.</strong><br />
          1110 NE 3rd St<br />
          Gainesville, FL 32601 USA
        </p>

        <hr />

        <p>
          <strong>Sustainable Cambodia, Inc.</strong> has been recognized as a tax-exempt organization under Section 501(c)(3)
          by the Internal Revenue Service in the United States.
        </p>

        <p>
          <strong>TIN/EIN:</strong> 20-0175973<br />
          <strong>Florida Registration #:</strong> CH18807<br />
          <strong>Utah Registration #:</strong> 6986940-CHAR
        </p>

        <p>
          A copy of the official registration and financial information may be obtained from the Florida Division of
          Consumer Services by calling toll-free <strong>(800-435-7352)</strong> or visiting
          <a href="https://www.floridaconsumerhelp.com" class="text-blue-600 underline" target="_blank">
            www.floridaconsumerhelp.com
          </a>.
        </p>

        <p class="italic text-gray-600">
          Registration does not imply endorsement, approval, or recommendation by the state.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'

const form = reactive({
  amount: '',
  comment: '',
  recurring: 'No',
  firstName: '',
  lastName: '',
  email: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  postal: '',
  country: 'United States',
})

const otherAmount = ref(null)

watch(otherAmount, (newVal) => {
  if (form.amount === 'other') {
    form.amount = newVal
  }
})

function submitForm() {
  if (form.amount === 'other' && !otherAmount.value) {
    alert('Please enter a valid donation amount.')
    return
  }

  console.log('Form submitted:', form)
  alert('Thank you for your donation!')
}
</script>
