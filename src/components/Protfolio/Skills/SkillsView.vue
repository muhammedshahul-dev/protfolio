<script setup lang="ts">
import DomainView from '@/components/Ui/DomainView.vue';
import ScrollUi from '@/components/Ui/ScrollUi.vue';
import SectionHeding from '@/components/Ui/SectionHeding.vue';
import { MonitorSmartphone, Server } from 'lucide-vue-next'

</script>

<template>
  <div class=" relative flex flex-col gap-16 lg:px-32 lg:py-32">
    <div class="absolute top-24 right-20 hidden lg:block text-[168px] opacity-70 pointer-events-none select-none">
      <span>&lt;/&gt;</span>
    </div>
    <div class="">
      <ScrollUi  />
      <SectionHeding title="Skills">
        I am striving to never stop learning and improving
      </SectionHeding>
    </div>
    <div>
      <div class="flex flex-col sm:flex-row gap-32">
        <DomainView >
          <MonitorSmartphone :size="32"/>
          <template #domain>
            Front-end Dev
          </template>
          <template #skills>
            <span>HTML</span>&middot;<span>CSS</span>&middot;<span>JavaScript</span>
          </template>
        </DomainView>
        <DomainView >
          <Server :size="32"/>
          <template #domain>
            Back-end Dev
          </template>
          <template #skills>
            <span>PHP</span>&middot;<span>Laravel</span>&middot;<span>MySql</span>
          </template>
        </DomainView>
      </div>
      <div class="">

      </div>
    </div>
  </div>
</template>
