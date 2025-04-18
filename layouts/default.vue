<template>
  <client-only>
    <main class="min-h-screen transition-colors duration-300">
      <div>
        <!-- <ToggleSwitch v-model="isDark" /> -->
      </div>
      <slot />
    </main>
  </client-only>
</template>

<script setup>
import ToggleSwitch from "@/components/ToggleSwitch.vue";

const colorMode = useColorMode();

const isDark = computed({
  get: () => colorMode.preference === "dark",
  set: (val) => {
    colorMode.preference = val ? "dark" : "light";
  },
});
</script>

<!-- <template>
  <div class="flex h-screen bg-gray-100">
    <SideNavbar :isOpen="sidebarOpen" />

    <div class="flex-1 flex flex-col overflow-hidden">
      <header
        class="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-blue-500"
      >
        <div class="flex items-center">
          <button
            @click="sidebarOpen = !sidebarOpen"
            class="text-gray-500 focus:outline-none md:hidden"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!sidebarOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h1 class="text-2xl font-semibold ml-4">Vue Tailwind Dashboard</h1>
        </div>
      </header>

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div class="container mx-auto px-6 py-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template> -->

<script>
import SideNavbar from "@/components/SideNavbar.vue";

export default {
  name: "DefaultLayout",
  components: {
    SideNavbar,
  },
  data() {
    return {
      sidebarOpen: false,
    };
  },
};
</script>

<style scoped>
/* Component-specific styles */
</style>
