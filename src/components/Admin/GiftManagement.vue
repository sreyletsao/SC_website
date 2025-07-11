<template>
  <div class="p-6 text-gray-800">
    <header class="mb-8 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-800">Gift Management</h1>
      <button
        @click="openForm(null)"
        class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
      >+ Add Gift</button>
    </header>

    <!-- Gift List -->
    <div v-if="loading" class="text-center py-12">
      <p class="text-gray-500">Loading gifts...</p>
    </div>

    <div v-else>
      <div class="overflow-x-auto bg-white rounded-lg shadow-md p-4 border">
        <table class="w-full table-auto">
          <thead class="bg-gray-100">
            <tr class="text-left">
              <th class="p-3">Key</th>
              <th class="p-3">Label</th>
              <th class="p-3">Title</th>
              <th class="p-3">Options</th>
              <th class="p-3">Images</th>
              <th class="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="gift in gifts" :key="gift.id" class="border-t hover:bg-gray-50">
              <td class="p-3 font-medium">{{ gift.key }}</td>
              <td class="p-3">{{ gift.label }}</td>
              <td class="p-3">{{ gift.title }}</td>
              <td class="p-3">
                <ul class="space-y-1">
                  <li
                    v-for="(opt, i) in gift.options"
                    :key="i"
                    class="text-sm text-gray-600"
                  >{{ opt.label }} - ${{ opt.price.toLocaleString() }}</li>
                </ul>
              </td>
              <td class="p-3">
                <div class="flex space-x-2">
                  <img
                    v-if="gift.image"
                    :src="getImageUrl(gift.image)"
                    class="h-10 w-10 object-cover rounded"
                  />
                  <img
                    v-if="gift.detail_image"
                    :src="getImageUrl(gift.detail_image)"
                    class="h-10 w-10 object-cover rounded"
                  />
                </div>
              </td>
              <td class="p-3 text-right space-x-2">
                <button
                  @click="openForm(gift)"
                  class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >Edit</button>
                <button
                  @click="deleteGift(gift.id)"
                  class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >Delete</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="!gifts.length" class="text-center py-8 text-gray-500">No gifts found.</div>
      </div>
    </div>

    <!-- Gift Form Modal -->
    <div
      v-if="showForm"
      class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      @click.self="closeForm"
    >
      <div
        class="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl max-h-[90vh] flex flex-col relative"
      >
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-red-600 transition-colors"
          @click="closeForm"
        >✕</button>

        <h2 class="text-xl font-bold mb-4">{{ form.id ? 'Edit Gift' : 'Add Gift' }}</h2>

        <!-- Scrollable content area -->
        <div class="overflow-y-auto pr-2 space-y-4 flex-grow">
          <div>
            <label class="block font-medium text-sm mb-1">Key*</label>
            <input
              v-model="form.key"
              class="w-full p-2 border rounded focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
              placeholder="e.g., cows"
              required
            />
            <p v-if="errors.key" class="text-red-500 text-xs mt-1">{{ errors.key }}</p>
          </div>

          <div>
            <label class="block font-medium text-sm mb-1">Label*</label>
            <input
              v-model="form.label"
              class="w-full p-2 border rounded focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
              placeholder="e.g., Cows"
              required
            />
          </div>

          <div>
            <label class="block font-medium text-sm mb-1">Title*</label>
            <input
              v-model="form.title"
              class="w-full p-2 border rounded focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
              placeholder="e.g., A Gift of Cows"
              required
            />
          </div>

          <div>
            <label class="block font-medium text-sm mb-1">Main Image</label>
            <input
              type="file"
              @change="handleImageUpload('image', $event)"
              accept="image/*"
              class="w-full p-2 border rounded file:mr-2 file:py-1 file:px-3 file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
            />
            <div v-if="form.image_preview" class="mt-2">
              <img :src="form.image_preview" class="h-32 object-contain border rounded" />
              <button
                @click="clearImage('image')"
                class="mt-1 text-sm text-red-600 hover:underline"
              >Remove Image</button>
            </div>
            <div v-else-if="form.image" class="mt-2">
              <img :src="`/storage/${form.image}`" class="h-32 object-contain border rounded" />
              <button
                @click="clearImage('image')"
                class="mt-1 text-sm text-red-600 hover:underline"
              >Remove Image</button>
            </div>
          </div>

          <div>
            <label class="block font-medium text-sm mb-1">Detail Image</label>
            <input
              type="file"
              @change="handleImageUpload('detail_image', $event)"
              accept="image/*"
              class="w-full p-2 border rounded file:mr-2 file:py-1 file:px-3 file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
            />
            <div v-if="form.detail_image_preview" class="mt-2">
              <img :src="form.detail_image_preview" class="h-32 object-contain border rounded" />
              <button
                @click="clearImage('detail_image')"
                class="mt-1 text-sm text-red-600 hover:underline"
              >Remove Image</button>
            </div>
            <div v-else-if="form.detail_image" class="mt-2">
              <img
                :src="`/storage/${form.detail_image}`"
                class="h-32 object-contain border rounded"
              />
              <button
                @click="clearImage('detail_image')"
                class="mt-1 text-sm text-red-600 hover:underline"
              >Remove Image</button>
            </div>
          </div>

          <div>
            <label class="block font-medium text-sm mb-1">Description</label>
            <textarea
              v-model="form.description"
              class="w-full p-2 border rounded focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
              placeholder="Enter gift description"
              rows="3"
            ></textarea>
          </div>

          <div>
            <label class="block font-medium text-sm mb-1">Options*</label>
            <div v-for="(option, i) in form.options" :key="i" class="flex gap-2 mb-2 items-center">
              <input
                v-model="option.label"
                class="flex-1 p-2 border rounded focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                placeholder="Option label"
                required
              />
              <input
                v-model.number="option.price"
                type="number"
                min="0"
                step="0.01"
                class="w-24 p-2 border rounded focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
                placeholder="Price"
                required
              />
              <button @click="removeOption(i)" class="text-red-600 hover:underline text-sm">Remove</button>
            </div>
            <button @click="addOption" class="text-blue-600 text-sm hover:underline">+ Add Option</button>
            <p v-if="errors.options" class="text-red-500 text-xs mt-1">{{ errors.options }}</p>
          </div>
        </div>

        <!-- Fixed action buttons at bottom -->
        <div class="mt-4 pt-4 border-t flex justify-end space-x-3">
          <button
            @click="closeForm"
            class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
          >Cancel</button>
          <button
            @click="submitForm"
            class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors disabled:opacity-50"
            :disabled="saving"
          >
            <span v-if="saving">
              <svg
                class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Saving...
            </span>
            <span v-else>Save</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import apiInstance from "@/plugin/axios";

const gifts = ref([]);
const loading = ref(true);
const showForm = ref(false);
const saving = ref(false);
const errors = ref({});
const form = ref(initForm());

function initForm() {
  return {
    id: null,
    key: "",
    label: "",
    title: "",
    image: null,
    image_preview: null,
    detail_image: null,
    detail_image_preview: null,
    description: "",
    options: [{ label: "", price: 0 }]
  };
}

onMounted(() => {
  fetchGifts();
});

async function fetchGifts() {
  try {
    loading.value = true;
    const response = await apiInstance.get("/gifts");
    gifts.value = response.data;
  } catch (error) {
    console.error("Error fetching gifts:", error);
    alert("Failed to fetch gifts. Please try again.");
  } finally {
    loading.value = false;
  }
}

function openForm(gift) {
  errors.value = {};
  if (gift) {
    form.value = {
      id: gift.id,
      key: gift.key,
      label: gift.label,
      title: gift.title,
      image: gift.image,
      image_preview: null,
      detail_image: gift.detail_image,
      detail_image_preview: null,
      description: gift.description,
      options: gift.options.length
        ? gift.options.map(opt => ({ ...opt }))
        : [{ label: "", price: 0 }]
    };
  } else {
    form.value = initForm();
  }
  showForm.value = true;
}

function closeForm() {
  showForm.value = false;
}

function addOption() {
  form.value.options.push({ label: "", price: 0 });
}

function removeOption(index) {
  form.value.options.splice(index, 1);
}

function handleImageUpload(field, event) {
  const file = event.target.files[0];
  if (!file) return;

  // Create preview
  const reader = new FileReader();
  reader.onload = e => {
    form.value[`${field}_preview`] = e.target.result;
  };
  reader.readAsDataURL(file);

  // Set the file for upload
  form.value[field] = file;
}

function clearImage(field) {
  form.value[field] = null;
  form.value[`${field}_preview`] = null;
  // Reset file input
  const fileInput = document.querySelector(
    `input[type="file"][name="${field}"]`
  );
  if (fileInput) fileInput.value = "";
}
function getImageUrl(path) {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `http://localhost:8000/storage/${path}`;
}
async function submitForm() {
  errors.value = {};

  // Validate form
  if (!form.value.key?.trim()) {
    errors.value.key = "Key is required";
  }
  if (!form.value.label?.trim()) {
    errors.value.label = "Label is required";
  }
  if (!form.value.title?.trim()) {
    errors.value.title = "Title is required";
  }
  if (
    !form.value.options?.length ||
    form.value.options.some(opt => !opt.label?.trim() || isNaN(opt.price))
  ) {
    errors.value.options = "At least one valid option is required";
  }

  if (Object.keys(errors.value).length) return;

  try {
    saving.value = true;

    const formData = new FormData();

    // Append basic fields (ensure they exist)
    formData.append("key", form.value.key || "");
    formData.append("label", form.value.label || "");
    formData.append("title", form.value.title || "");
    if (form.value.description) {
      formData.append("description", form.value.description);
    }

    // Handle options
    formData.append("options", JSON.stringify(form.value.options || []));

    // Handle files
    if (form.value.image instanceof File) {
      formData.append("image", form.value.image);
    } else if (form.value.image) {
      // Keep existing image path if no new file uploaded
      formData.append("existing_image", form.value.image);
    }

    if (form.value.detail_image instanceof File) {
      formData.append("detail_image", form.value.detail_image);
    } else if (form.value.detail_image) {
      formData.append("existing_detail_image", form.value.detail_image);
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };

    if (form.value.id) {
      // For updates, use POST with _method=PUT
      formData.append("_method", "PUT");
      await apiInstance.post(`/gifts/${form.value.id}`, formData, config);
    } else {
      // For creates, use regular POST
      await apiInstance.post("/gifts", formData, config);
    }

    await fetchGifts();
    closeForm();
  } catch (error) {
    console.error("Error saving gift:", error);
    if (error.response?.data?.errors) {
      errors.value = error.response.data.errors;
      console.log("Validation errors:", error.response.data.errors);
    } else {
      alert("Failed to save gift. Please check your input and try again.");
    }
  } finally {
    saving.value = false;
  }
}
async function deleteGift(id) {
  if (
    confirm(
      "Are you sure you want to delete this gift? This action cannot be undone."
    )
  ) {
    try {
      await apiInstance.delete(`/gifts/${id}`);
      await fetchGifts();
    } catch (error) {
      console.error("Error deleting gift:", error);
      alert("Failed to delete gift. Please try again.");
    }
  }
}
</script>

<style>
/* Custom scrollbar for the form */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}
</style>