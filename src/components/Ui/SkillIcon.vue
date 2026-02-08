<template>
  <div class="w-36 h-40 flex flex-col items-center justify-center transition-transform hover:scale-105">

    <div
      class="w-32 h-32 flex items-center justify-center rounded-xl  shadow-sm "

    >
      <div
        v-html="skill.svg"
        class="text-white fill-current w-full h-full flex items-center justify-center"
      />
    </div>

    <p
      class="mt-3 text-sm font-semibold tracking-wide uppercase text-center"
      :style="{ color: skill.color }"
    >
      {{ skill.name }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    required: true
    // Expected structure: { name: 'HTML', color: '#E34F26', svg: '<svg>...</svg>' }
  }
})
</script>
