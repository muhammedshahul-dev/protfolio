<template>
  <div class="flex flex-col items-center justify-center py-8 gap-4">
    <div class="">
      <h1 class="text-5xl h1-u text-[#00FFD5] mb-2">
        {{ title }}
      </h1>

      <div class="relative flex items-center justify-center w-48 h-0.75 bg-[#00FFD5]">
        <div class="absolute -left-1 w-3 h-3 rounded-full bg-[#00FFD5]"></div>

        <div class="absolute -right-1 w-3 h-3 rounded-full bg-[#00FFD5]"></div>
      </div>
    </div>
    <div>
      <span class="para-m text-white">
        <slot ></slot>
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>
