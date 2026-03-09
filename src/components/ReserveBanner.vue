<script setup>
import { ArrowRight } from 'lucide-vue-next'
import AppButton from './ui/AppButton.vue'
</script>

<template>
  <section class="bg-black py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center gap-10">

    <!-- Heading -->
    <h2
      class="text-white font-satoshi font-bold text-xl sm:text-2xl lg:text-3xl leading-tight max-w-3xl"
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
    >
      Binghatti Tilal – Exclusive New Launch
      <br />
      <span class="underline underline-offset-4 decoration-1">
        of Luxury Villas &amp; Townhouses in
      </span>
      <br />
      <span class="underline underline-offset-4 decoration-1">Dubai</span>
    </h2>

    <!-- CTA -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
    >
      <AppButton variant="outline-about" size="lg">
        Reserve Now – Limited Units <ArrowRight :size="16" />
      </AppButton>
    </div>

  </section>
</template>
