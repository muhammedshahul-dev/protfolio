<template>
  <div class=" ">
    <div class="flex flex-col border border-white py-[24px] max-w-[320px] h-130">
      <div class="flex flex-col items-center">
        <div class="rounded-full border-white border-2 overflow-hidden w-24 h-24">
          <img
            src="@\assets\image\portrait-happy-male-with-broad-smile.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <span class="logo-m">Shahul</span>
        <span class="code-m ">Full-Stack developer</span>
      </div>
      <div>
        <div class="flex gap-2">
          <Mail class="" />
          <a href="mailto:muahmmedshahullkp@gmail.com">muahmmedshahullkp@gmail.com</a>
        </div>
        <div class="flex gap-2">
          <MapPin />
          <span class="text-white">kerala india</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Mail, MapPin } from 'lucide-vue-next'
</script>
