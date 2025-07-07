<template>
  <div class="min-h-screen bg-gray-50 px-4 py-10">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

      <!-- Donation Form -->
      <form @submit.prevent="submitForm" class="space-y-4 p-6 bg-white rounded-lg shadow max-w-lg mx-auto">
        <h2 class="text-xl font-bold text-orange-600">Make a Donation</h2>

        <!-- Donation Amount -->
        <div>
          <label class="font-semibold">Donation Amount *</label>
          <div class="flex gap-4 mt-2">
            <label v-for="amount in presetAmounts" :key="amount">
              <input type="radio" name="amount" :value="amount" v-model="form.amount" required />
              <span class="ml-1">${{ amount }}</span>
            </label>
            <label>
              <input type="radio" value="Other" v-model="form.amount" />
              <span class="ml-1">Other</span>
            </label>
          </div>
        </div>

        <!-- Comment -->
        <div>
          <label class="font-semibold">Comment</label>
          <textarea v-model="form.comment" rows="3"
            class="w-full border rounded-md p-2 focus:ring focus:ring-blue-300"></textarea>
        </div>

        <!-- Recurring Gift -->
        <div>
          <label class="font-semibold">Is this a Recurring Gift? *</label>
          <select v-model="form.recurring"
            class="w-full border rounded-md px-4 py-2 mt-1 focus:ring focus:ring-blue-300" required>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        <!-- Name -->
        <div class="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" v-model="form.firstName"
            class="w-full border rounded-md p-2" required />
          <input type="text" placeholder="Last Name" v-model="form.lastName"
            class="w-full border rounded-md p-2" required />
        </div>

        <!-- Email -->
        <input type="email" placeholder="Email" v-model="form.email" class="w-full border rounded-md p-2" required />

        <!-- Address -->
        <input type="text" placeholder="Address Line" v-model="form.address" class="w-full border rounded-md p-2" />
        <input type="text" placeholder="City" v-model="form.city" class="w-full border rounded-md p-2" />
        <input type="text" placeholder="State / Province" v-model="form.state" class="w-full border rounded-md p-2" />

        <!-- Country -->
        <div>
          <label class="font-semibold">Select Country</label>
          <select v-model="form.country"
            class="w-full border rounded-md px-1 py-2 mt-1 focus:ring focus:ring-blue-300" required>
            <option disabled value="">Choose a country</option>
            <option v-for="country in countries" :key="country">{{ country }}</option>
          </select>
        </div>

        <!-- Submit -->
        <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
          Submit
        </button>
      </form>

      <!-- Donate by Mail -->
      <div class="bg-white p-6 rounded-2xl shadow-lg text-sm leading-relaxed">
        <h2 class="text-2xl font-bold mb-4 text-orange-500">To donate by mail:</h2>
        <p>Please send a check payable to:</p>
        <p class="mt-2 font-semibold">Sustainable Cambodia, Inc.</p>
        <p>1110 NE 3rd St<br />Gainesville, FL 32601 USA</p>
        <hr class="my-4 border-gray-300" />
        <p><strong>Sustainable Cambodia, Inc.</strong> has been recognized as a tax-exempt organization under Section
          501(c)(3).</p>
        <p class="mt-4"><strong>TIN/EIN:</strong> 20-0175973</p>
        <p><strong>Florida Registration #:</strong> CH18807</p>
        <p><strong>Utah Registration #:</strong> 6986940-CHAR</p>
        <p class="mt-4">
          A copy of the official registration may be obtained from the Florida Division of Consumer Services by calling
          <strong>800-435-7352</strong> or visiting
          <a href="http://www.floridaconsumerhelp.com" class="text-blue-600 underline" target="_blank">floridaconsumerhelp.com</a>.
        </p>
        <p class="text-xs italic mt-2 text-gray-600">
          Registration does not imply endorsement by the state.
        </p>
        <img src="https://sustainablecambodia.org/wp-content/uploads/2023/05/PG-RotaryTrips12-scaled.jpg" alt=""
          class="rounded mt-10" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import emailjs from 'emailjs-com'

// ✅ Replace with your actual values from EmailJS
const serviceID = 'your_service_id'
const templateID = 'your_template_id'
const publicKey = 'your_public_key'

// Initialize EmailJS
onMounted(() => {
  emailjs.init(publicKey)
})

const presetAmounts = [25, 50, 100, 250]
const countries = [
  'Cambodia', 'United States', 'Canada', 'United Kingdom', 'Australia',
  'France', 'Germany', 'Japan', 'India', 'Thailand'
]

const form = ref({
  amount: '',
  comment: '',
  recurring: 'No',
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  state: '',
  country: ''
})

const submitForm = () => {
  const payload = {
    from_name: `${form.value.firstName} ${form.value.lastName}`,
    from_email: form.value.email,
    donation_amount: form.value.amount
  }

  console.log('Sending to EmailJS:', payload)

  emailjs.send(serviceID, templateID, payload)
    .then(() => {
      alert('✅ Donation submitted successfully!')
    })
    .catch(error => {
      alert('❌ Error sending donation form.')
      console.error('EmailJS Error:', error)
    })
}
</script>
