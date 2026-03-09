<script setup>
import { ArrowRight } from 'lucide-vue-next'
import AppButton from './ui/AppButton.vue'
</script>

<template>
  <section class="bg-black sm:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      <!-- Left: image -->
      <div
        class="overflow-hidden "
        v-motion
        :initial="{ opacity: 0, x: -60 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 700 } }"
      >
        <img
          src="/assets/aboutimg.png"
          alt="Binghatti Tilal Interior"
          class="w-full h-auto object-cover mx-auto block"
        />
      </div>

      <!-- Right: text content -->
      <div
        class="flex flex-col max-w-xl  gap-6"
        v-motion
        :initial="{ opacity: 0, x: 60 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 700 } }"
      >

        <!-- Label -->
        <div class="flex items-center  gap-2">
          <span class="text-white text-xs tracking-[0.3em] uppercase font-inter">About Us</span>
          <span class="block w-px h-4 bg-white"></span>
        </div>

        <!-- Heading -->
        <h2 class="text-white font-satoshi font-bold text-2xl sm:text-3xl lg:text-5xl leading-tight">
          Redefining Ground-Level Luxury with Binghatti Tilal
        </h2>

        <!-- Body text -->
        <p class="text-gray-light font-inter text-sm  leading-relaxed">
          For the first time, Dubai's most avant-garde developer is bringing its signature
          "hyper-tower" design philosophy to a ground-level masterpiece.
          <a href="#" class="text-white underline underline-offset-2">Binghatti Tilal</a>
          is an exclusive collection of premium townhouses and villas designed for
          those who seek the prestige of a Binghatti property with the privacy and space
          of a suburban estate.
        </p>

        <p class="text-gray-light font-inter text-sm leading-relaxed">
          Known for bold geometries and high-art aesthetics, Binghatti Tilal marks a
          historic shift — offering a serene sanctuary that blends nature with futuristic
          architecture.
        </p>

        <!-- CTA -->
        <div class="mt-2">
          <AppButton variant="outline-about" size="lg">
            Reserve Now – Limited Units <ArrowRight :size="16" />
          </AppButton>
        </div>

      </div>
    </div>
  </section>
</template>
