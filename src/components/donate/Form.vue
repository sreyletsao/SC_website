<template>
  <div class="min-h-screen bg-gray-50 px-4 py-10">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <!-- Donation Form -->
      <form class="bg-white p-6 rounded-2xl shadow-lg space-y-6 text-sm">
        <h2 class="text-2xl font-bold mb-2 text-orange-500">Make a Donation</h2>
  
        <!-- Donation Amount -->
        <div>
          <label class="block font-semibold mb-2">Donation Amount <span class=" text-red-600">*</span></label>
          <div class="flex flex-wrap gap-4">
            <label class="flex items-center gap-2">
              <input type="radio" name="amount" />
              $25
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="amount" />
              $50
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="amount" />
              $100
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="amount" />
              $250
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="amount" />
              Other
            </label>
          </div>
        </div>
  
        <!-- Comment -->
        <div>
          <label class="block font-semibold mb-2">Comment</label>
          <textarea rows="3" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
        </div>
  
        <!-- Recurring Gift -->
        <div>
          <label class="block font-semibold mb-2">Is this a Recurring Gift? <span class=" text-red-600">*</span></label>
          <select class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
  
        <!-- Name -->
        <div class="flex gap-4">
          <input type="text" placeholder="First Name" class="w-full p-2 border border-gray-300 rounded-lg" />
          <input type="text" placeholder="Last Name" class="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
  
        <!-- Email -->
        <input type="email" placeholder="Email Address" class="w-full p-2 border border-gray-300 rounded-lg" />
  
        <!-- Address -->
        <input type="text" placeholder="Address Line 1" class="w-full p-2 border border-gray-300 rounded-lg" />
        <input type="text" placeholder="Address Line 2" class="w-full p-2 border border-gray-300 rounded-lg" />
  
        <div class="flex gap-4">
          <input type="text" placeholder="City" class="w-full p-2 border border-gray-300 rounded-lg" />
          <input type="text" placeholder="State / Province" class="w-full p-2 border border-gray-300 rounded-lg" />
        </div>
  
        <div class="flex gap-4">
          <input type="text" placeholder="Postal Code" class="w-full p-2 border border-gray-300 rounded-lg" />
          <select class="w-full p-2 border border-gray-300 rounded-lg">
            <option>United States</option>
            <!-- More countries as needed -->
          </select>
        </div>
  
        <!-- Payment (Mocked) -->
        <div>
          <label class="block font-semibold mb-2">Payment Information <span class=" text-red-600">*</span></label>
          <div class="flex gap-4">
            <input disabled placeholder="Card Number" class="w-full p-2 border border-gray-200 rounded-lg bg-gray-100" />
            <input disabled placeholder="MM/YY" class="w-1/3 p-2 border border-gray-200 rounded-lg bg-gray-100" />
            <input disabled placeholder="CVC" class="w-1/4 p-2 border border-gray-200 rounded-lg bg-gray-100" />
          </div>
          <p class="text-xs text-gray-500 mt-1">* Payment fields are mocked and disabled.</p>
        </div>
  
        <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">Submit</button>
      </form>
  
      <!-- Donate by Mail -->
      <div class="bg-white p-6 rounded-2xl shadow-lg text-sm leading-relaxed">
        <h2 class="text-2xl font-bold mb-4 text-orange-500">To donate by mail:</h2>
        <p>Please send a check payable to:</p>
        <p class="mt-2 font-semibold">Sustainable Cambodia, Inc.</p>
        <p>1110 NE 3rd St<br />Gainesville, FL 32601 USA</p>
  
        <hr class="my-4 border-gray-300" />
  
        <p><strong>Sustainable Cambodia, Inc.</strong> has been recognized as a tax-exempt organization under Section 501(c)(3) by the Internal Revenue Service in the United States.</p>
  
        <p class="mt-4">
          <strong>TIN/EIN:</strong> 20-0175973<br />
          <strong>Florida Registration #:</strong> CH18807<br />
          <strong>Utah Registration #:</strong> 6986940-CHAR
        </p>
  
        <p class="mt-4">
          A copy of the official registration and financial information may be obtained from the Florida Division of Consumer Services by calling toll-free
          <strong>800-435-7352</strong> or visiting
          <a href="http://www.floridaconsumerhelp.com" target="_blank" class="text-blue-600 underline">www.floridaconsumerhelp.com</a>.
        </p>
  
        <p class="text-xs italic mt-2 text-gray-600">
          Registration does not imply endorsement, approval, or recommendation by the state.
        </p>
        <img src="/src/img/donate.png" alt=""
        class=" rounded mt-10"
        >
      </div>
    </div>
  </div>
</template>
