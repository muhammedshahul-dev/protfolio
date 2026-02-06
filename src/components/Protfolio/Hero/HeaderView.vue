<template>
  <nav class="border-b border-white/10">
    <div
      class=" mx-auto
             flex items-center justify-between
             px-4 py-3
             md:px-8 md:py-4"
      >
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <!-- Mobile -->
        <span class="menu-m sm:hidden">&lt;C/&gt;</span>
        <span class="menu-m text-white sm:hidden">
          Muhammed Shahul
        </span>

<!-- Desktop -->
        <span class="logo-m hidden sm:inline">&lt;C/&gt;</span>
        <span class="logo-m text-white hidden sm:inline">
          Muhammed Shahul
        </span>

      </div>

      <!-- Social -->
      <div class="flex items-center gap-3 md:gap-6">
        <a class="flex items-center gap-1.5 media-m">
          <Instagram class="w-5 h-5" />
          <span class="hidden sm:inline">instagram</span>
        </a>

        <a class="flex items-center gap-1.5 media-m">
          <Github class="w-5 h-5" />
          <span class="hidden sm:inline">Github</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Github, Instagram } from 'lucide-vue-next'
</script>
<style>

</style>
