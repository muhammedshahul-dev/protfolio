<template>
  <div class="flex justify-center flex-col gap-16 items-center lg:flex-row">
    <div class="flex flex-col gap-[32px]">
      <div class="">
        <span class="code-m"> &lt;<span>h1</span>&gt; </span>
        <!-- pc -->
        <h1 class="h1-u hidden sm:flex text-white flex-col pl-2.5">
          <span class="">Hey</span>
          <span class="">i'm <span class="text-brand1">{{ profile.name }},</span></span>
          <span class="">{{ profile.title }}</span>
        </h1>
        <h1 class="h2-u sm:hidden text-white flex flex-col pl-2.5">
          <span class="">Hey</span>
          <span class="">i'm <span class="">{{ profile.name }},</span></span>
          <span class="">{{ profile.title }}</span>
        </h1>
        <span class="code-m"> &lt;<span>/h1</span>&gt; </span>
      </div>
      <div class="flex flex-col gap-4 px-6">
        <ParaView>
          <p class="para-m text-white flex flex-col pl-2.5">
            <span class="">
              {{ profile.description }}
            </span>
          </p>
        </ParaView>
        <div class="flex items-center gap-5">
          <h2 class="h2-u">Lets Talk</h2>
          <a href="#contact"><Mail /></a>
        </div>
      </div>
    </div>
    <div
      class="border border-none bg-bg2 w-full sm:w-[280px] lg:w-[215px] lg:h-[378px] flex flex-col gap-6 sm:gap-8 sm:gap-[48px] py-6 sm:py-8 lg:py-[32px] px-10 sm:px-8 lg:px-[48px] md:items-center rounded-[40px] sm:rounded-[60px] lg:rounded-[80px] justify-center"
    >
      <div class="flex gap-3 sm:gap-4 items-center">
        <h1 class="number-m  ">{{ profile.programingLanguagesCount }}</h1>
        <p class="para-m text-sm sm:text-base">Programming Language</p>
      </div>
      <div class="flex gap-3 sm:gap-4 items-center">
        <h1 class="number-m ">{{ profile.developmentToolsCount }}</h1>
        <p class="para-m text-sm sm:text-base">Development tools</p>
      </div>
      <div class="flex gap-3 sm:gap-4 items-center">
        <h1 class="number-m ">{{ profile.yearsOfExperience}}</h1>
        <p class="para-m text-sm sm:text-base">Years of experiences</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import ParaView from '@/components/Ui/ParaView.vue'
import { Mail } from 'lucide-vue-next'
import { useSkillsStore } from '@/stores/skills'
const {profile} = useSkillsStore()


</script>
