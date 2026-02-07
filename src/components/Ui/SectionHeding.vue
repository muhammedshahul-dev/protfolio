<template>
  <div class="flex flex-col items-center justify-center py-8 gap-4 text-center">
    <div>
      <h1 class="text-3xl sm:text-5xl h1-u text-brand1 mb-2">
        {{ title }}
      </h1>

      <div class="relative flex items-center justify-center w-48 h-0.5 bg-brand1 mx-auto">
        <div class="absolute -left-1 w-3 h-3 rounded-full bg-brand1"></div>
        <div class="absolute -right-1 w-3 h-3 rounded-full bg-brand1"></div>
      </div>
    </div>

    <div class="para-m text-white max-w-prose">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
