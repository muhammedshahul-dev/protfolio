<script setup lang="ts">
import HeaderView from './HeaderView.vue';
import IntroView from './IntroView.vue';
import NavView from './NavView.vue';
import Profileview from './ProfileView.vue';
</script>

<template>
  <div>
    <HeaderView/>
  </div>
  <main class="w- lg:h-[1406px]">
    <aside>
      <NavView/>
      <h1 class=" hidden lg:block bg-text-u text-center lg:mt-[64px] lg:mx-[364px]">Developer</h1>
    </aside>
    <main>
      <div class="
        flex xl:flex-row justify-center items-center flex-col
        mt-[64px]
        xl:gap-[128px] xl:mx-[128px]
        gap-[64px] mx-[31px]
        md:mx-[60px]
        lg:mx-[160px]

      ">
        <Profileview/>
        <IntroView/>
        <!-- <span class="mt-[64px] mx-[35px] sm:mx-[224px] xl:ml-[440px]">pro</span>
        <span class="mt-[32px] max-w-[960px] sm:mx-[60px] mx-[31px]">intro</span> -->
      </div>


    </main>
  </main>
</template>
