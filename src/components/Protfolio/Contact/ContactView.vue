<script setup lang="ts">
import { ref } from 'vue'
import ScrollUi from '@/components/Ui/ScrollUi.vue'
import SectionHeding from '@/components/Ui/SectionHeding.vue'
import { Mail, Send } from 'lucide-vue-next'
import { useSkillsStore } from '@/stores/skills.js'

const { profile } = useSkillsStore()

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const handleSubmit = async () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    submitStatus.value = 'error'
    setTimeout(() => (submitStatus.value = 'idle'), 3000)
    return
  }

  isSubmitting.value = true
  try {
    // Using EmailJS for email delivery
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: profile.emailJs.serviceId, // Replace with your EmailJS service ID
        template_id: profile.emailJs.templateId, // Replace with your EmailJS template ID
        user_id: profile.emailJs.userId, // Replace with your EmailJS public key
        template_params: {
          to_email: profile.email, // Recipient email from profile store
          from_name: formData.value.name,
          from_email: formData.value.email,
          message: formData.value.message,
        },
      }),
    })

    if (response.ok) {
      submitStatus.value = 'success'
      formData.value = { name: '', email: '', message: '' }
      setTimeout(() => (submitStatus.value = 'idle'), 4000)
    } else {
      submitStatus.value = 'error'
      setTimeout(() => (submitStatus.value = 'idle'), 3000)
    }
  } catch {
    submitStatus.value = 'error'
    setTimeout(() => (submitStatus.value = 'idle'), 3000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div
    class="flex flex-col gap-8 sm:gap-16 lg:gap-32 px-4 sm:px-6 md:px-12 lg:px-32 py-8 sm:py-12 lg:py-32 bg-bg1 font-ubuntu w-full"
  >
    <div class="hidden lg:block">
      <ScrollUi />
    </div>

    <div class="flex flex-col gap-8 sm:gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto">
      <SectionHeding title="Contact" id="contact">
        Let's work together and create something amazing
      </SectionHeding>

      <div class="w-full max-w-3xl">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-6 sm:gap-8 para-u">
          <!-- Name and Email Row -->
          <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full">
            <div class="flex flex-col gap-3 flex-1 min-w-0">
              <label for="name" class="para-u">Your Name *</label>
              <input
                id="name"
                v-model="formData.name"
                type="text"
                placeholder="Enter your name"
                class="w-full bg-transparent border-b border-brand1 py-2 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:ring-0 placeholder:text-white transition-colors"
                required
              />
            </div>

            <div class="flex flex-col gap-3 flex-1 min-w-0">
              <label for="email" class="para-u">Your Email *</label>
              <input
                id="email"
                v-model="formData.email"
                type="email"
                placeholder="your.email@example.com"
                class="w-full bg-transparent border-b border-brand1 py-2 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:ring-0 placeholder:text-white transition-colors"
                required
              />
            </div>
          </div>

          <!-- Message Field -->
          <div class="flex flex-col gap-3 w-full">
            <label for="message" class="para-u">Message *</label>
            <textarea
              id="message"
              v-model="formData.message"
              placeholder="Your message here..."
              rows="5"
              class="w-full bg-transparent border-b border-brand1 py-2 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:ring-0 transition-colors placeholder:text-white resize-none"
              required
            ></textarea>
          </div>

          <!-- Status Messages -->
          <div
            v-if="submitStatus === 'success'"
            class="p-4 sm:p-5 bg-brand1/15 border border-brand1/40 rounded-lg text-brand1 text-xs sm:text-sm font-medium"
            role="alert"
          >
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
          <div
            v-if="submitStatus === 'error'"
            class="p-4 sm:p-5 bg-red-500/15 border border-red-500/40 rounded-lg text-red-400 text-xs sm:text-sm font-medium"
            role="alert"
          >
            ✗ Please fill in all required fields or try again.
          </div>

          <!-- Submit Button -->
          <div class="flex justify-center sm:justify-start pt-2 sm:pt-4">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn-u flex items-center justify-center gap-2 text-black border-none bg-brand1 rounded-2xl py-3 px-6 sm:px-8 text-sm sm:text-base font-semibold hover:bg-brand1/90 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
            >
              <Send :size="18" class="flex-shrink-0" />
              <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
            </button>
          </div>
        </form>

        <!-- Direct Contact -->
        <div class="mt-10 sm:mt-16 pt-8 sm:pt-12 border-t border-white/5 text-center">
          <p
            class="text-white/50 mb-4 sm:mb-6 text-xs sm:text-sm font-medium uppercase tracking-wide"
          >
            Or reach out directly:
          </p>
          <a
            href="mailto:muahmmedshahullkp@gmail.com"
            class="inline-flex items-center justify-center gap-2 text-brand1 hover:text-brand1/80 transition-colors media-m text-sm sm:text-base"
          >
            <Mail :size="18" />
            muahmmedshahullkp@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input,
textarea {
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  border-color: #06b6d4;
}

button:active {
  transform: scale(0.98);
}

@media (max-width: 640px) {
  input,
  textarea {
    font-size: 16px;
  }
}
</style>
