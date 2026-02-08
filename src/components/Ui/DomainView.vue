<template>
  <div
    class="w-full sm:w-[280px] lg:w-[296px] h-auto sm:h-[120px] lg:h-[132px] px-4 sm:px-6 py-3 sm:py-4 border-l-10 border-[#0C73B8] rounded-[8px] bg-brand2 text-black flex flex-col items-center justify-center gap-2 sm:gap-0"
  >
    <slot></slot>
    <div class="flex flex-col gap-2">
      <div class="menu-m">
        <slot name="domain"></slot>
      </div>
      <div class="para-m">
        <slot name="skills"></slot>
      </div>
    </div>
  </div>
</template>
<script setup></script>
