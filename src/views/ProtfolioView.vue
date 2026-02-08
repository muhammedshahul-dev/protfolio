<script setup lang="ts">
import AboutMeView from '@/components/Protfolio/AboutMe/AboutMeView.vue';
import Contactview from '@/components/Protfolio/Contact/Contactview.vue';
import FooterView from '@/components/Protfolio/footer/FooterView.vue';
import HeroView from '@/components/Protfolio/Hero/HeroView.vue';
import SkillsView from '@/components/Protfolio/Skills/SkillsView.vue';
import WorkView from '@/components/Protfolio/WorkView.vue/WorkView.vue';
import { Contact } from 'lucide-vue-next';


</script>

<template>
  <div>

      <HeroView/>
      <AboutMeView />
      <SkillsView/>
      <WorkView/>
      <Contactview/>
      <FooterView/>


  </div>
</template>
