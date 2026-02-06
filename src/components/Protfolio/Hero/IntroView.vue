<template>
  <div class=" flex flex-col gap-[32px] ">
      <div>
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
    <div class="flex flex-col gap-4">
      <div>
        <span class="code-m"> &lt;<span>p</span>&gt; </span>
        <p class="para-m text-white flex flex-col pl-2.5">
          <span class=""
            >I help business grow by crafting amazing web experiences. If you’re looking for a
            developer that likes to get stuff done,</span
          >
        </p>
        <span class="code-m"> &lt;<span>/p</span>&gt; </span>
      </div>
      <div class="flex items-center gap-5">
        <h2 class="h2-u">Lets Talk</h2>
        <a href="#contact"><Mail /></a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Mail } from 'lucide-vue-next'
</script>
