<script setup lang="ts">
import ScrollUi from '@/components/Ui/ScrollUi.vue'
import SectionHeding from '@/components/Ui/SectionHeding.vue'
import ProjectsView from './ProjectsView.vue'
</script>

<template>
  <div class="bg-bg2 py-8 sm:py-16 lg:py-32 px-4 sm:px-6 lg:px-0" id="work">
    <div class="lg:px-32">
      <ScrollUi />
      <SectionHeding title="Work">
        Here are some of my projects that I have worked on
      </SectionHeding>
    </div>
    <div>
      <ProjectsView />
    </div>
  </div>
</template>
