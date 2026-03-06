<script setup>
import { TreePine, Dumbbell, Bike, ShieldCheck } from 'lucide-vue-next'
import AppButton from './ui/AppButton.vue'

const features = [
  {
    icon: TreePine,
    title: 'Lush Landscaped Parks',
    description: 'Dedicated green zones for recreation and relaxation.',
  },
  {
    icon: Dumbbell,
    title: 'State-of-the-Art Fitness Center',
    description: 'Fully equipped gym and outdoor sports courts.',
  },
  {
    icon: Bike,
    title: 'Jogging & Cycling Tracks',
    description: 'Integrated trails throughout the community.',
  },
  {
    icon: ShieldCheck,
    title: '24/7 Security & Gated Entry',
    description: 'Ensuring total peace of mind for residents.',
  },
]
</script>

<template>
  <section class="bg-black py-16 px-4 sm:px-6 lg:px-8">

    <!-- Section label -->
    <div class="text-center mb-10">
      <p class="text-gray-light text-xs tracking-[0.25em] uppercase font-inter">
        World-Class Amenities at Binghatti Tilal
      </p>
      <!-- decorative dot -->
      <div class="mt-3 flex items-center justify-center gap-2">
       
        <span class="block h-1.5 w-1.5  bg-white"></span>
      
      </div>
    </div>

    <!-- Cards grid -->
    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div
        v-for="feature in features"
        :key="feature.title"
        class="flex flex-col items-center text-center p-8 border border-gray-dim bg-bg-rich rounded-sm gap-5 hover:border-gray-soft transition-colors duration-300"
      >
        <!-- Icon -->
        <div class="text-white">
          <component :is="feature.icon" :size="44" :stroke-width="1.25" />
        </div>

        <!-- Title -->
        <h3 class="text-white font-satoshi font-bold text-base leading-snug">
          {{ feature.title }}
        </h3>

        <!-- Description -->
        <p class="text-gray-light font-inter text-sm leading-relaxed flex-1">
          {{ feature.description }}
        </p>

        <!-- CTA Button -->
        <AppButton variant="outline-white" size="sm">
          Book Now &nbsp;&rarr;
        </AppButton>
      </div>
    </div>

  </section>
</template>
