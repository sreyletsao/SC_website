<template>
  <aside class="w-64 h-screen bg-slate-800 text-white fixed top-0 left-0 shadow-lg">
    <div class="p-6 font-bold text-2xl text-center border-b border-slate-700">
      Dashboard
    </div>

    <nav class="mt-6">
      <ul class="space-y-2 px-4">
        <li>
          <RouterLink
            to="/dashboard"
            class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-700 transition"
            active-class="bg-slate-700"
          >
            <i class="fas fa-home"></i>
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/dashboard/users"
            class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-700 transition"
            active-class="bg-slate-700"
          >
            <i class="fas fa-users"></i>
            Users
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/dashboard/settings"
            class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-700 transition"
            active-class="bg-slate-700"
          >
            <i class="fas fa-cog"></i>
            Settings
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/logout"
            class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            <i class="fas fa-sign-out-alt"></i>
            Logout
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
// No script needed if using static links
</script>

<style scoped>
/* Optional: you can style active link manually if needed */
</style>
