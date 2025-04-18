<template>
  <div
    :class="[
      'bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform',
      isOpen ? 'translate-x-0' : '-translate-x-full',
      'md:relative md:translate-x-0 transition duration-200 ease-in-out',
    ]"
  >
    <!-- Logo -->
    <div class="flex items-center justify-center">
      <span class="text-2xl font-semibold">Logo</span>
    </div>

    <!-- Navigation -->
    <nav>
      <a
        href="#"
        class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
      >
        Dashboard
      </a>
      <a
        href="#"
        class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
      >
        Profile
      </a>
      <a
        href="#"
        class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
      >
        Settings
      </a>
      <a
        href="#"
        class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
      >
        Logout
      </a>
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";
// import NavLink from "./NavLink.vue"; // Importing the NavLink component

// Props declaration with defineProps()
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

// Computed class for managing transition states
const navClass = computed(() => {
  return [
    "bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform",
    props.isOpen ? "translate-x-0" : "-translate-x-full",
    "md:relative md:translate-x-0 transition duration-200 ease-in-out",
  ];
});
</script>

<style scoped>
/* Component-specific styles */
</style>
