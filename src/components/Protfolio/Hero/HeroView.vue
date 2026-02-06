<script setup lang="ts">
import HeaderView from './HeaderView.vue';
import NavView from './NavView.vue';
import Profileview from './Profileview.vue';

</script>

<template>
  <div>
    <HeaderView/>
  </div>
  <main class="h-screen">
    <aside>
      <NavView/>
    </aside>
    <main>
      <div>
        <h1 class=" hidden lg:block bg-text-u text-center">Developer</h1>
      </div>
      <div>
        <Profileview/>
      </div>

    </main>
  </main>
</template>
