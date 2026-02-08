<template>
  <div
    class="flex flex-col border-4 border-white py-6 sm:py-8 lg:py-[24px] max-w-[280px] sm:max-w-[320px] min-h-fit rounded-tl-[100px] sm:rounded-tl-[130px] lg:rounded-tl-[160px] rounded-br-[100px] sm:rounded-br-[130px] lg:rounded-br-[160px] shadow-[-3px_-3px_0px_0px_#00df9a]"
  >
    <div class="flex flex-col items-center">
      <div class="rounded-full border-white border-2 overflow-hidden w-20 sm:w-24 h-20 sm:h-24">
        <img
          src="@/assets/image/portrait-happy-male-with-broad-smile.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <span class="logo-m">Shahul</span>
      <span class="code-m">Full-Stack developer</span>
    </div>
    <div
      class="text-white code-m flex flex-col gap-2 sm:gap-3 lg:gap-[12px] mt-4 sm:mt-6 lg:mt-[25px] ml-4 sm:ml-6 lg:ml-[24px] px-2 sm:px-0"
    >
      <div class="flex gap-2">
        <Mail class="text-brand1" :size="14" />
        <a href="mailto:muahmmedshahullkp@gmail.com" rel="noopener noreferrer" class=""
          >muahmmedshahullkp@gmail.com</a
        >
      </div>
      <div class="flex gap-2">
        <MapPin class="text-brand1" :size="14" />
        <a
          href="https://www.google.com/maps/search/?api=1&query=Kozhikode,+Kerala,+India"
          target="_blank"
          rel="noopener noreferrer"
          >Calicut, Kerala</a
        >
      </div>
      <div class="flex gap-3">
        <BriefcaseBusiness class="text-brand1" :size="14" />
        <span>internship</span>
      </div>
      <div class="flex">
        <Link class="text-brand1" :size="14" />
        <a href="http://www.muhammedshahullKp.com" target="_blank" rel="noopener noreferrer"
          >www.muhammedshahullKp.com</a
        >
      </div>
      <div>
        <ul class="flex flex-wrap gap-4 code-m">
          <li
            v-for="skill in store.skills"
            :key="skill.id"
            class="rounded border-none bg-brand1 text-bg2 px-2 py-"
          >
            {{ skill.skill }}
          </li>
        </ul>
      </div>
    </div>

    <div
      class="flex items-center justify-center mt-6 sm:mt-8 lg:mt-[32px] ml-4 sm:ml-6 lg:ml-[24px] mr-4 sm:mr-8 lg:mr-[69px]"
    >
      <a
        href="/muhammed shahul cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-u flex justify-center text-black border-none bg-white rounded-[20px] py-3 sm:py-4 px-4 sm:px-6 lg:pr-[25px] text-sm sm:text-base w-full sm:w-auto lg:min-w-[227px] h-auto"
        >Download cv<ArrowDownToLine
      /></a>
    </div>
  </div>
</template>
<script setup>
import { Mail, MapPin, BriefcaseBusiness, Link, ArrowDownToLine } from 'lucide-vue-next'
import { useSkillsStore } from '@/stores/SkillStore'
const store = useSkillsStore()
</script>
