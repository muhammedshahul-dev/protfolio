<template>

    <div class="flex flex-col border-4 border-white py-[24px] max-w-[320px] min-h-fit rounded-tl-[160px] rounded-br-[160px] shadow-[-3px_-3px_0px_0px_#00df9a] ">
      <div class="flex flex-col items-center">
        <div class="rounded-full border-white border-2 overflow-hidden w-24 h-24">
          <img
            src="@/assets/image/portrait-happy-male-with-broad-smile.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <span class="logo-m">Shahul</span>
        <span class="code-m ">Full-Stack developer</span>
      </div>
        <div class="text-white code-m flex flex-col gap-[12px] mt-[25px] ml-[24px]">

          <div class="flex gap-2 ">
            <Mail class="text-brand1"  :size="14" />
            <a href="mailto:muahmmedshahullkp@gmail.com" rel="noopener noreferrer" class="">muahmmedshahullkp@gmail.com</a>
          </div>
          <div class="flex gap-2">
            <MapPin class="text-brand1"  :size="14"/>
            <a href="https://www.google.com/maps/search/?api=1&query=Kozhikode,+Kerala,+India" target="_blank" rel="noopener noreferrer">Calicut, Kerala</a>
          </div>
          <div class="flex gap-3">
            <BriefcaseBusiness class="text-brand1"  :size="14"/>
            <span>internship</span>
          </div>
          <div class="flex">
            <Link class="text-brand1"  :size="14"/>
            <a href="http://www.muhammedshahullKp.com" target="_blank" rel="noopener noreferrer">www.muhammedshahullKp.com</a>
          </div>
          <div>
          <ul class="flex flex-wrap gap-4 code-m " >
            <li v-for="skill in store.skills" :key="skill.id" class="rounded border-none bg-brand1 text-bg2 px-2 py-">{{ skill.skill }}</li>
          </ul>
        </div>
        </div>

      <div class="flex items-center justify-center mt-[32px] ml-[24px] mr-[69px]">
        <a href="/muhammed shahul cv.pdf" target="_blank" rel="noopener noreferrer" class="btn-u flex justify-center text-black border-none bg-white rounded-[20px] py-4 pr-[25px] min-w-[227px] h-auto">Download cv<ArrowDownToLine/></a>
      </div>
    </div>
</template>
<script setup>
import { Mail, MapPin,BriefcaseBusiness ,Link,ArrowDownToLine} from 'lucide-vue-next'
import { useSkillsStore } from '@/stores/skills';
const store= useSkillsStore()
</script>
