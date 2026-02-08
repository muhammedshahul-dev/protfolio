<script setup lang="ts">
import HeaderView from './HeaderView.vue'
import IntroView from './IntroView.vue'
import NavView from './NavView.vue'
import Profileview from './ProfileView.vue'
</script>

<template>
  <div>
    <HeaderView />
  </div>
  <main class="w-full h-full lg:pb-32 py-8 sm:py-12 lg:py-16" id="home">
    <aside>
      <NavView />
      <h1 class="hidden lg:flex bg-text-u text-center lg:mt-16 lg:mx-91 items-center">Developer</h1>
    </aside>
    <main>
      <div
        class="flex xl:flex-row justify-center items-center flex-col mt-8 sm:mt-12 lg:mt-16 xl:gap-32 gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 md:mx-auto md:px-0 lg:px-40 xl:mx-32"
      >
        <Profileview />
        <IntroView />
      </div>
    </main>
  </main>
</template>
