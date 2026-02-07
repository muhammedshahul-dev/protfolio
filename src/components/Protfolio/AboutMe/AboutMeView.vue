<script setup lang="ts">
import ParaView from '@/components/Ui/ParaView.vue';
import ScrollUi from '@/components/Ui/ScrollUi.vue';


</script>

<template>
  <div class=" flex flex-col gap-32 px-6 py-16 lg:pr-32 bg-bg2" id="about">
    <div class="hidden lg:block">
      <ScrollUi/>
    </div>
    <div class="flex flex-col gap-32 lg:pl-32 justify-center items-center ">
      <div class="flex flex-col gap-16 ">
        <div class="border-2 border-brand1 rounded-tl-[40px] rounded-br-[40px] w-full max-w-[224px] md:max-w-[367px] px-10 py-4 text-center">
          <h1 class=" hidden md:block h1-u">About Me</h1>
          <h1 class=" h2-u md:hidden">About Me</h1>
        </div>
        <div class="">
          <ParaView class="border border-none rounded-[40px] bg-bg1 px-10 py-6">
            <div class="my-1 mx-3 ">
              <h1 class="logo-m">Hello!</h1>
              <p class="text-white">
                <span>
                  I'm <span class="text-brand1">Muhammed Shahul</span>, a <span class="text-brand1">self-taught web developer</span> fueled by a genuine passion for coding. I focus on building clean, functional sites using <span class="text-brand1">HTML, CSS, JS, Vue,</span> and <span class="text-brand1">Laravel</span>.
                </span><br>
                <span>
                  I’m naturally curious and a dedicated <span class="text-brand1">coding enthusiast</span>, constantly teaching myself new ways to write better, more efficient code. For me, development is about the challenge of solving problems and the <span class="text-brand1">drive to never stop learning</span>.
                  When I’m not at my desk, I’m usually exploring <span class="text-brand1">traveling</span> or reading. I enjoy projects that challenge my perspective and push me to see things through new eyes.
                </span>
              </p>
            </div>
          </ParaView>
        </div>
      </div>
      <div class="flex items-center justify-center" >
          <img src="@/assets/image/Image.png" alt="" class="max-w-full max-h-139">
      </div>
    </div>
  </div>
</template>
