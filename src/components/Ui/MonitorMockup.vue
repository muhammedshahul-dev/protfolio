<template>
  <div class="flex flex-col items-center w-full max-w-md mx-auto">
    <div class="relative w-full aspect-video bg-gray-800 rounded-t-xl border-[8px] border-bg1 shadow-2xl overflow-hidden">
      <div class="w-full h-full bg-white overflow-hidden">
        <slot>
          <div class="flex items-center justify-center h-full text-gray-400">Project Preview</div>
        </slot>
      </div>

      <div class="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
    </div>

    <div class="w-full h-6 bg-[#E4E2E2] rounded-b-sm flex items-center justify-center">
      <div class="w-2 h-2 bg-gray-700 rounded-full"></div>
    </div>

    <div class="w-12 h-8 bg-[#E6E6E6] shadow-inner"></div>

    <div class="w-32 h-2 bg-[#E6E6E6] rounded-t-lg"></div>
  </div>
</template>
