<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-4 text-center dark:bg-gray-900 dark:text-gray-100"
  >
    <img
      :src="ConstructionImage"
      alt="Under Construction"
      class="w-80 max-w-full mb-8"
    />
    <h1 class="text-4xl font-bold mb-4">We're Building Something New</h1>
    <p class="text-lg max-w-xl">
      Our site is currently under construction. We'll be here soon with our new
      awesome site. Stay tuned!
    </p>
  </div>
</template>

<script setup>
import ConstructionImage from "@/assets/images/construction.svg";
</script>
