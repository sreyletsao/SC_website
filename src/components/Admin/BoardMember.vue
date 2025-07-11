<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6"
  >
    <div class="max-w-7xl mx-auto space-y-8">
      <!-- Header Section -->
      <div class="flex items-center justify-between">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <div
              class="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg"
            >
              <svg
                class="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h1
                class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
              >
                Board Members
              </h1>
              <p class="text-gray-600">
                Manage your organization's leadership team
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div
        class="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0 p-6"
      >
        <div
          class="flex flex-col lg:flex-row gap-4 items-center justify-between"
        >
          <div class="flex flex-col sm:flex-row gap-4 flex-1">
            <div class="relative flex-1 max-w-md">
              <svg
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <input
                type="text"
                v-model="searchQuery"
                placeholder="Search by name, position, or email..."
                class="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition-all"
              />
            </div>

            <button
              class="px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <svg
                class="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                ></path>
              </svg>
              Filter
            </button>
          </div>

          <button
            @click="openForm()"
            class="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 font-medium"
          >
            <svg
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Add Board Member
          </button>
        </div>
      </div>

      <!-- Enhanced Table -->
      <div
        class="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border-0 overflow-hidden"
      >
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr
                class="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200"
              >
                <th class="p-4 font-semibold text-gray-700 text-center w-16">
                  ID
                </th>
                <th class="p-4 font-semibold text-gray-700 text-center w-20">
                  Photo
                </th>
                <th class="text-left p-4 font-semibold text-gray-700">Name</th>
                <th class="text-left p-4 font-semibold text-gray-700">
                  Position
                </th>
                <th class="text-left p-4 font-semibold text-gray-700">
                  Description
                </th>
                <th class="p-4 font-semibold text-gray-700 text-center w-20">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(member, index) in filteredMembers" :key="member.id">
                <td class="p-4 text-center font-medium text-gray-600">
                  #{{ member.id }}
                </td>
                <td class="p-4 text-center">
                  <div class="flex justify-center">
                    <div class="relative">
                      <img
                        v-if="member.image"
                        :src="getImageUrl(member.image)"
                        alt="Photo"
                        class="w-12 h-12 object-cover rounded-full ring-2 ring-gray-100 shadow-sm"
                      />
                      <div
                        v-else
                        class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-sm"
                      >
                        {{
                          member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                        }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="p-4">
                  <div>
                    <div class="font-semibold text-gray-900">
                      {{ member.name }}
                    </div>
                  </div>
                </td>
                <td class="p-4">
                  <span
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200"
                  >
                    {{ member.position }}
                  </span>
                </td>
                <td class="p-4 text-gray-600 max-w-xs">
                  <p class="line-clamp-2">{{ member.description }}</p>
                </td>
                <td class="p-4 text-center relative">
                  <!-- Enhanced 3-dot menu -->
                  <div class="flex flex-col items-center space-y-1">
                    <template v-for="i in 3" :key="i">
                      <button
                        @click.stop="toggleDropdown(member.id)"
                        class="w-1.5 h-1.5 rounded-full bg-gray-400 hover:bg-gray-600 transition-colors duration-200"
                        :title="'More actions'"
                      ></button>
                    </template>
                  </div>

                  <!-- Enhanced dropdown -->
                  <div
                    v-if="dropdownOpen === member.id"
                    class="absolute top-0 right-8 w-44 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden"
                  >
                    <button
                      @click="
                        () => {
                          openForm(member);
                          closeDropdown();
                        }
                      "
                      class="w-full text-left px-4 py-3 hover:bg-yellow-50 text-yellow-700 transition-colors flex items-center gap-3 border-b border-gray-100"
                    >
                      <svg
                        class="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        ></path>
                      </svg>
                      Edit Member
                    </button>
                    <button
                      @click="
                        () => {
                          alert('Viewing ' + member.name);
                          closeDropdown();
                        }
                      "
                      class="w-full text-left px-4 py-3 hover:bg-blue-50 text-blue-700 transition-colors flex items-center gap-3 border-b border-gray-100"
                    >
                      <svg
                        class="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                      View Details
                    </button>
                    <button
                      @click="
                        () => {
                          deleteMember(member.id);
                          closeDropdown();
                        }
                      "
                      class="w-full text-left px-4 py-3 hover:bg-red-50 text-red-600 transition-colors flex items-center gap-3"
                    >
                      <svg
                        class="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                      Delete Member
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Empty State -->
        <div v-if="members.length === 0" class="text-center py-16">
          <svg
            class="h-16 w-16 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
          <h3 class="text-xl font-medium text-gray-900 mb-2">
            No board members found
          </h3>
          <p class="text-gray-600 mb-6">
            Get started by adding your first board member to the system.
          </p>
          <button
            @click="openForm()"
            class="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center gap-2"
          >
            <svg
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Add Board Member
          </button>
        </div>
      </div>

      <!-- Footer Info -->
      <div class="text-center text-gray-500 text-sm">
        Showing {{ members.length }} board members
      </div>
    </div>

    <!-- Enhanced Modal Form -->
    <div
      v-if="showForm"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div
        class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div class="p-8">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-gray-900">
              {{ editingMember.id ? "Edit" : "Add" }} Board Member
            </h2>
            <button
              @click="showForm = false"
              class="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                class="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <form @submit.prevent="saveMember" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Full Name</label
                >
                <input
                  type="text"
                  v-model="editingMember.name"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Position</label
                >
                <input
                  type="text"
                  v-model="editingMember.position"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Enter position/title"
                  required
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2"
                >Description</label
              >
              <textarea
                v-model="editingMember.description"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                rows="4"
                placeholder="Enter member description and background"
                required
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2"
                >Profile Image</label
              >
              <div class="flex items-center space-x-4">
                <input
                  type="file"
                  accept="image/*"
                  @change="handleImageUpload"
                  class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer"
                />
                <div
                  v-if="
                    editingMember.image &&
                    typeof editingMember.image === 'string'
                  "
                  class="flex-shrink-0"
                >
                  <img
                    :src="editingMember.image"
                    alt="Preview"
                    class="w-16 h-16 object-cover rounded-lg border-2 border-gray-200 shadow-sm"
                  />
                </div>
              </div>
            </div>

            <div
              class="flex justify-end space-x-4 pt-6 border-t border-gray-200"
            >
              <button
                type="button"
                @click="showForm = false"
                class="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
              >
                {{ editingMember.id ? "Update" : "Create" }} Member
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import {
  getBoardMembers,
  createBoardMember,
  updateBoardMember,
  deleteBoardMember,
} from "@/api/board.js";

// State
const members = ref([]);
const showForm = ref(false);
const dropdownOpen = ref(null);
const searchQuery = ref(""); // ✅ FIXED: missing declaration
const editingMember = ref({
  id: null,
  name: "",
  position: "",
  description: "",
  image: null,
});

const BASE_IMAGE_URL = "http://localhost:8000/storage/";

function getImageUrl(imagePath) {
  if (!imagePath) return "";
  if (imagePath.startsWith("http") || imagePath.startsWith("data:")) {
    return imagePath;
  }
  return BASE_IMAGE_URL + imagePath;
}

// Fetch all members
const fetchMembers = async () => {
  try {
    const res = await getBoardMembers();
    members.value = res.Team; // Adjust according to your backend
  } catch (err) {
    console.error("Failed to fetch members:", err);
  }
};

onMounted(fetchMembers);

// Handle file input
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    editingMember.value.image = file;
  }
}

// Open form (with or without data)
function openForm(
  member = { id: null, name: "", position: "", description: "", image: null }
) {
  editingMember.value = { ...member };
  showForm.value = true;
}

// Save member (Create or Update)
async function saveMember() {
  try {
    const formData = new FormData();
    formData.append("name", editingMember.value.name);
    formData.append("position", editingMember.value.position);
    formData.append("description", editingMember.value.description);

    if (editingMember.value.image instanceof File) {
      formData.append("image", editingMember.value.image);
    }

    if (editingMember.value.id) {
      await updateBoardMember(editingMember.value.id, formData);
    } else {
      await createBoardMember(formData);
    }

    showForm.value = false;
    await fetchMembers();
  } catch (err) {
    console.error("Save failed:", err);
  }
}

// Delete member
async function deleteMember(id) {
  if (confirm("Are you sure you want to delete this member?")) {
    try {
      await deleteBoardMember(id);
      await fetchMembers();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  }
}

// Dropdown toggle
function toggleDropdown(id) {
  dropdownOpen.value = dropdownOpen.value === id ? null : id;
}

function closeDropdown() {
  dropdownOpen.value = null;
}

window.addEventListener("click", () => {
  dropdownOpen.value = null;
});

// Filtered members by search input
const filteredMembers = computed(() => {
  if (!searchQuery.value) return members.value;

  const query = searchQuery.value.toLowerCase();
  return members.value.filter((member) => {
    return (
      member.name?.toLowerCase().includes(query) ||
      member.position?.toLowerCase().includes(query) ||
      member.email?.toLowerCase?.().includes(query)
    );
  });
});
</script>
