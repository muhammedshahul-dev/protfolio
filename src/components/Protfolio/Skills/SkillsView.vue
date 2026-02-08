<script setup lang="ts">
import DomainView from '@/components/Ui/DomainView.vue'
import ScrollUi from '@/components/Ui/ScrollUi.vue'
import SectionHeding from '@/components/Ui/SectionHeding.vue'
import { MonitorSmartphone, Server } from 'lucide-vue-next'
import SkillSection from './SkillSection.vue'
</script>

<template>
  <div
    class="relative flex flex-col gap-8 sm:gap-16 px-4 sm:px-6 lg:px-32 py-8 sm:py-16 lg:py-32 items-center"
    id="skills"
  >
    <div
      class="absolute top-12 right-4 sm:top-20 sm:right-10 lg:top-24 lg:right-20 hidden lg:block text-[100px] sm:text-[140px] lg:text-[168px] opacity-70 pointer-events-none select-none"
    >
      <span>&lt;/&gt;</span>
    </div>
    <div class="w-full">
      <ScrollUi />
      <SectionHeding title="Skills">
        I am striving to never stop learning and improving
      </SectionHeding>
    </div>
    <div class="flex gap-8 sm:gap-16 lg:gap-[90px] flex-col items-center justify-center w-full">
      <div class="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-32 w-full justify-center items-center">
        <DomainView>
          <MonitorSmartphone :size="32" />
          <template #domain> Front-end Dev </template>
          <template #skills>
            <span>HTML</span>&middot;<span>CSS</span>&middot;<span>JavaScript</span>
          </template>
        </DomainView>
        <DomainView>
          <Server :size="32" />
          <template #domain> Back-end Dev </template>
          <template #skills>
            <span>PHP</span>&middot;<span>Laravel</span>&middot;<span>MySql</span>
          </template>
        </DomainView>
      </div>
      <div class="w-full">
        <SkillSection />
      </div>
    </div>
  </div>
</template>
