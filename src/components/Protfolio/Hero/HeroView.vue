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
  <main class="w-full  h-full lg:pb-32 py-16" id="home">
    <aside>
      <NavView/>
      <h1 class=" hidden lg:flex bg-text-u text-center lg:mt-16 lg:mx-91 items-center">Developer</h1>
    </aside>
    <main>
      <div class="
        flex xl:flex-row justify-center items-center flex-col
        mt-16
        xl:gap-32 xl:mx-32
        gap-16 mx-7.75
        md:mx-15
        lg:mx-40

      ">
        <Profileview/>
        <IntroView/>
        <!-- <span class="mt-[64px] mx-[35px] sm:mx-[224px] xl:ml-[440px]">pro</span>
        <span class="mt-[32px] max-w-[960px] sm:mx-[60px] mx-[31px]">intro</span> -->
      </div>


    </main>
  </main>
</template>
