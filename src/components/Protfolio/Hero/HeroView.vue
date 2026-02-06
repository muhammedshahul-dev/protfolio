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
    </aside>
    <main>
      <div>
        <h1 class=" hidden lg:block bg-text-u text-center lg:mt-[64px] lg:mx-[364px]">Developer</h1>
      </div>
      <div class=" flex lg:flex-col justify-center items-center">
        <Profileview/>
        <IntroView/>
      </div>


    </main>
  </main>
</template>
