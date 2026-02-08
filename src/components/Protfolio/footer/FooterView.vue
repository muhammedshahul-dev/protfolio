<script setup lang="ts">
import { Github, Instagram, Mail, MapPin, ExternalLink, Target } from 'lucide-vue-next'
import { useSkillsStore } from '@/stores/skills'

const {profile} = useSkillsStore()
const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: profile.socialLinks.github,
    color: 'hover:text-white',
    target: '_blank',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: profile.socialLinks.instagram,
    color: 'hover:text-pink-400',
    target: '_blank',
  },
  {
    name: 'Email',
    icon: Mail,
    href: `mailto:${profile.socialLinks.email}`,
    color: 'hover:text-brand1',
    target: '_self',
  },
]
</script>

<template>
  <footer class="bg-bg2 border-t border-white/10">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-32 py-8 sm:py-12 lg:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-12">
        <!-- Brand Section -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <span class="logo-m text-brand1">&lt;C/&gt;</span>
            <span class="logo-m text-white">Shahul</span>
          </div>
          <p class="text-white/60 text-sm leading-relaxed">
            Full-stack developer passionate about building clean, functional web experiences. Let's
            create something amazing together.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-col gap-4">
          <h3 class="text-white font-semibold text-base">Quick Links</h3>
          <nav class="flex flex-col gap-2">
            <a
              v-for="link in quickLinks"
              :key="link.name"
              :href="link.href"
              class="text-white/60 hover:text-brand1 transition-colors text-sm flex items-center gap-2 group"
            >
              <span
                class="w-1 h-1 bg-brand1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              ></span>
              {{ link.name }}
            </a>
          </nav>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col gap-4">
          <h3 class="text-white font-semibold text-base">Connect</h3>
          <div class="flex flex-col gap-3">
            <a
              :href="`mailto:${profile.socialLinks.email}`"
              class="text-white/60 hover:text-brand1 transition-colors text-sm flex items-center gap-2"
            >
              <Mail :size="16" />
              {{ profile.socialLinks.email }}
            </a>
            <a
              :href="profile.map"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/60 hover:text-brand1 transition-colors text-sm flex items-center gap-2"
            >
              <MapPin :size="16" />
              {{ profile.location }}
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-white/10 my-8 sm:my-10"></div>

      <!-- Bottom Section -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-6">
        <!-- Copyright -->
        <p class="text-white/40 text-xs sm:text-sm text-center sm:text-left">
          © {{ currentYear }} {{ profile.name }}. All rights reserved.
        </p>

        <!-- Social Links -->
        <div class="flex items-center gap-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.href"
            :title="social.name"
            :target="social.target"
            rel="noopener noreferrer"
            class="text-white/60 transition-all duration-300 p-2 rounded-lg hover:bg-white/5 group"
            :class="social.color"
          >
            <component
              :is="social.icon"
              :size="20"
              class="group-hover:scale-110 transition-transform"
            />
          </a>
        </div>

        <!-- Links -->
        <a
          :href="profile.portfolioLink"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white/60 hover:text-brand1 transition-colors text-xs sm:text-sm flex items-center gap-1"
        >
          Portfolio Site
          <ExternalLink :size="14" />
        </a>
      </div>
    </div>

    <!-- Scroll to Top Button (Mobile) -->
    <div class="flex justify-center pb-4 sm:hidden">
      <a
        href="#home"
        class="text-brand1 hover:text-brand1/80 transition-colors text-xs font-semibold"
      >
        ↑ Back to Top
      </a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
