<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSkillsStore } from '@/stores/skills'
import MonitorMockup from '@/components/Ui/MonitorMockup.vue'

// 1. Initialize the store
const projectStore = useSkillsStore()

// 2. Destructure the combined 'projects' array (which contains image and link)
const { projects } = storeToRefs(projectStore)

const currentIndex = ref(0)

// 3. Navigation Logic
const nextImage = () => {
  if (projects.value.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % projects.value.length
  }
}

const prevImage = () => {
  if (projects.value.length > 0) {
    currentIndex.value =
      (currentIndex.value - 1 + projects.value.length) % projects.value.length
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8 sm:gap-16 px-4 sm:px-6 md:px-16 lg:px-32 py-8 sm:py-16 lg:py-32">

    <div
      v-if="projects && projects.length > 0"
      class="relative flex items-center justify-center group w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto"
    >
      <button
        @click="prevImage"
        class="absolute left-2 sm:left-[-70px] z-20 p-2 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/10 backdrop-blur-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
      </button>

      <MonitorMockup>
        <div class="monitor-screen-inner bg-black group/screen">

          <div class="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover/screen:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
            <a
              :href="projects[currentIndex].link"
              target="_blank"
              class="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-lg shadow-2xl transform translate-y-2 group-hover/screen:translate-y-0 transition-all duration-500 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              View Website
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          <transition name="slide-fade">
            <img
              :key="currentIndex"
              :src="projects[currentIndex].image"
              class="w-full h-full object-cover shadow-inner"
            />
          </transition>
        </div>
      </MonitorMockup>

      <button
        @click="nextImage"
        class="absolute right-2 sm:right-[-70px] z-20 p-2 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/10 backdrop-blur-md"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
      </button>
    </div>

    <div v-else class="text-white opacity-50 text-center py-10">No projects found...</div>
  </div>
</template>

<style scoped>
.monitor-screen-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide-fade-enter-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.7, 0, 0.84, 0);
  position: absolute;
  width: 100%;
}

.slide-fade-enter-from {
  transform: translateX(100%) scale(0.95);
  opacity: 0;
  filter: blur(4px);
}

.slide-fade-leave-to {
  transform: translateX(-100%) scale(1.05);
  opacity: 0;
  filter: blur(4px);
}

img {
  backface-visibility: hidden;
  transform: translateZ(0);
}
</style>
