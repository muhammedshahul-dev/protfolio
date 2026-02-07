<template>
  <div class="lg:flex flex-col items-center gap-6 rounded-2xl border-2 border-white w-14 p-4 bg-bg2 fixed lg:top-32 lg:left-9  hidden ">

    <a href="#home" class="group relative flex items-center justify-center">
      <LayoutDashboard class="text-white group-hover:text-blue-400 transition-colors" />
      <span class="absolute left-12 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 transition-all origin-left shadow-lg">
        Dashboard
      </span>
    </a>

    <a href="#about" class="group relative flex items-center justify-center">
      <User class="text-white group-hover:text-blue-400 transition-colors" />
      <span class="absolute left-12 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 transition-all origin-left shadow-lg">
        About
      </span>
    </a>

    <a href="#skills" class="group relative flex items-center justify-center">
      <Code class="text-white group-hover:text-blue-400 transition-colors" />
      <span class="absolute left-12 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 transition-all origin-left shadow-lg">
        Skills
      </span>
    </a>

    <a href="#work" class="group relative flex items-center justify-center">
      <Monitor class="text-white group-hover:text-blue-400 transition-colors" />
      <span class="absolute left-12 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 transition-all origin-left shadow-lg">
        Work
      </span>
    </a>

    <a href="#contact" class="group relative flex items-center justify-center">
      <Mail class="text-white group-hover:text-blue-400 transition-colors" />
      <span class="absolute left-12 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 transition-all origin-left shadow-lg">
        Contact
      </span>
    </a>

  </div>
</template>

<script setup>
  import { LayoutDashboard, User, Code, Monitor, Mail } from 'lucide-vue-next'
</script>
