<script setup lang="ts">
import SkillIcon from '@/components/Ui/SkillIcon.vue'
import { useSkillsStore } from '@/stores/skills.js'

const { skills } = useSkillsStore()
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-8">
    <SkillIcon v-for="skill in skills" :key="skill.id" :skill="skill" />
  </div>
</template>
