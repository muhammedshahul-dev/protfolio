<template>
  <div class="flex justify-center flex-col gap-16 items-center lg:flex-row">
    <div class=" flex flex-col gap-[32px] ">
        <div class="">
          <span class="code-m"> &lt;<span>h1</span>&gt; </span>
          <!-- pc -->
          <h1 class="h1-u hidden sm:flex text-white flex-col pl-2.5">
            <span class="">Hey</span>
            <span class="">i'm <span class="text-brand1">Shahul,</span></span>
            <span class="">Full-Stack Developer</span>
          </h1>
          <h1 class="h2-u sm:hidden text-white flex flex-col pl-2.5">
            <span class="">Hey</span>
            <span class="">i'm <span class="">Shahul,</span></span>
            <span class="">Full-Stack Developer</span>
          </h1>
          <span class="code-m"> &lt;<span>/h1</span>&gt; </span>
        </div>
      <div class="flex flex-col gap-4 px-6">

        <ParaView>
          <p class="para-m text-white flex flex-col pl-2.5">
            <span class="">
              I help business grow by crafting amazing web experiences. If you’re looking for a
              developer that likes to get stuff done,
            </span>
          </p>
        </ParaView>
        <div class="flex items-center gap-5">
          <h2 class="h2-u">Lets Talk</h2>
          <a href="#contact"><Mail /></a>
        </div>
      </div>
    </div>
    <div class="border border-none  bg-bg2 w-[215px] h-[378px] flex flex-col gap-[48px] py-[32px] px-[48px] items-center rounded-[80px] justify-center">
      <div class="flex gap-4 items-center">
        <h1 class="number-m">4</h1>
        <p class="para-m">Programming Language</p>
      </div>
      <div class="flex gap-4 items-center">
        <h1 class="number-m">6</h1>
        <p class="para-m">Development tools</p>
      </div>
      <div class="flex gap-4 items-center">
        <h1 class="number-m">{{ experiences }}</h1>
        <p class="para-m">Years of experiences</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import ParaView from '@/components/Ui/ParaView.vue';
import { Mail } from 'lucide-vue-next'

const experiences = new Date().getFullYear() - 2025
</script>
