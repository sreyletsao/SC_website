  <template>
  <section class="bg-white py-16 px-4">
    <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-extrabold text-orange-500">
          Meet Our Volunteers
        </h2>
      </div>
    <div
      v-for="volunteer in volunteers"
      :key="volunteer.id"
      class="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-10 mb-12"
    >
      <!-- Image -->
      <div class="flex-shrink-0 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-orange-400">
        <img
          :src="`http://localhost:8000/storage/${volunteer.profile}`"
          :alt="volunteer.name"
          class="w-full h-full object-cover"
        />
      </div>
      <!-- Content -->
      <div class="flex-1">
        <h2 class="text-3xl font-bold text-slate-900">{{ volunteer.name }}</h2>
        <p class="text-lg font-semibold text-orange-600 mb-4">
          {{ volunteer.nationality }}
        </p>
        <p class="text-slate-700">
          {{ volunteer.description }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getVolunteer } from "@/api/volunteer";

const volunteers = ref([]);

onMounted(async () => {
  try {
    const data = await getVolunteer();
    volunteers.value =data.Volunteers;
    console.log(volunteers.value);
    
  } catch (error) {
    console.error("Failed to fetch volunteers:", error);
  }
});
</script>

