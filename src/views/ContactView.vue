<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Header -->
    <div class="relative h-64 overflow-hidden bg-gradient-to-r from-green-700 to-green-600">
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 class="text-4xl font-bold text-white mb-2">Contact Sustainable Cambodia</h1>
        <p class="text-xl text-orange-200 max-w-2xl">Connect with our global offices or learn how to sponsor a child</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Office Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- US Office -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
          <div class="flex flex-col md:flex-row h-full">
            <div class="w-full md:w-3/5 h-48 md:h-auto bg-gray-100 relative">
              <img 
                src="/src/img/logo/kingdomofcambodia.png" 
                alt="Florida Office Map"
                class="absolute inset-0 w-full h-full object-content"
              >
            </div>
            <div class="w-full md:w-3/5 p-6">
              <div class="flex items-center mb-3">
                <div class="w-3 h-8 bg-orange-500 rounded-full mr-3"></div>
                <h2 class="text-2xl font-bold text-gray-800">U.S. Office</h2>
              </div>
              <div class="space-y-2 text-gray-600">
                <p><span class="font-medium">Address:</span> 1100 NE 3rd St, Gainesville, FL 32601</p>
                <p><span class="font-medium">Email:</span> <a href="mailto:USoffice@sustainablecambodia.org" class="text-orange-600 hover:underline">USoffice@sustainablecambodia.org</a></p>
                <p><span class="font-medium">Phone:</span> <a href="tel:+13523175940" class="text-orange-600 hover:underline">+1 (352) 317-5940</a></p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cambodia Office -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
          <div class="flex flex-col md:flex-row h-full">
            <div class="w-full md:w-3/5 h-48 md:h-auto bg-gray-100 relative">
              <img 
                src="/src/img/logo/map.png" 
                alt="Pursat Office Map"
                class="absolute inset-0 w-full h-full object-content"
              >
            </div>
            <div class="w-full md:w-3/5 p-6">
              <div class="flex items-center mb-3">
                <div class="w-3 h-8 bg-orange-500 rounded-full mr-3"></div>
                <h2 class="text-2xl font-bold text-gray-800">Cambodia Office</h2>
              </div>
              <div class="space-y-2 text-gray-600">
                <p><span class="font-medium">Address:</span> #583, National Highway #5, Pursat</p>
                <p><span class="font-medium">Mailing:</span> P.O. Box 9204, Pursat Province</p>
                <p><span class="font-medium">Phone:</span> 012 505 512</p>
                <p><span class="font-medium">Email:</span> <a href="mailto:HQoffice@sustainablecambodia.org" class="text-orange-600 hover:underline">HQoffice@sustainablecambodia.org</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contribution Section -->
            <div class="mt-8 mb-8 bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
        <h3 class="text-xl font-medium text-gray-800 mb-4">Contribution Information</h3>
        <p class="text-gray-600 mb-4">If you wish to send a contribution via a Charitable Fund or a Charitable Foundation:</p>
        
        <div class="space-y-3">
          <p><span class="font-medium text-gray-700">Payee:</span> Sustainable Cambodia, Inc.</p>
          <p><span class="font-medium text-gray-700">EIN/Tar. ID:</span> 20-0175973</p>
          <p><span class="font-medium text-gray-700">Address:</span> 1100 NE 3rd St., Gainesville, FL 32601 USA</p>
          <p><span class="font-medium text-gray-700">Contact Person:</span> Susan J.Mastin</p>
          <p><span class="font-medium text-gray-700">Contact Title:</span> Treasurer</p>
          <p><span class="font-medium text-gray-700">Contact Phone:</span> +1 (352) 317-5940</p>
          <p><span class="font-medium text-gray-700">Project Line:</span> General Project Funds</p>
        </div>
      </div>

      <!-- Legal Notice -->
      <div class="bg-orange-50 rounded-lg p-6 border border-orange-200">
        <div class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-sm text-gray-600">
            As a Florida nonprofit, we are required to disclose that a copy of our official registration and financial information may be obtained from the Division of Consumer Services by calling toll-free 1-800-HELP-FLA (435-7352) or visiting <a href="https://www.FloridaConsumerHelp.com" class="text-orange-600 hover:underline font-medium">FloridaConsumerHelp.com</a>. Registration #CH12345.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModernContactDesign'
}
</script>