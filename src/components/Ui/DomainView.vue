<template>
  <div
    class="w-[296px] h-[132px] px-6 py-4 border-l-10 border-[#0C73B8] rounded-[8px] bg-brand2 text-black flex flex-col items-center"
  >
    <slot> </slot>
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
