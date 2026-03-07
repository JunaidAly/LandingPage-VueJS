<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const menuOpen = ref(false)
</script>

<template>
  <nav class="w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-24">

        <!-- Logo -->
        <RouterLink to="/" class="shrink-0">
          <img src="/assets/logo.png" alt="Logo" class="h-12 w-auto object-contain" />
        </RouterLink>
        <div class="hidden md:flex items-center gap-20">

          <!-- Top Rated -->
          <div class="flex flex-col items-center font-inter">
            <span class="text-white text-sm font-semibold tracking-widest uppercase mb-0.5">Top Rated</span>
            <div class="flex items-center gap-0.5">
              <Icon v-for="i in 5" :key="i" icon="mdi:star" width="24" class="text-yellow-400" />
            </div>
          </div>

          <!-- Phone -->
          <div class="flex flex-col font-inter">
            <span class="text-white text-sm font-medium text-right tracking-wide mb-0.5">Call for instant quote</span>
            <a href="tel:0051234567" class="flex items-center gap-1.5 text-white font-bold text-2xl tracking-wide ">
              <Icon icon="mdi:phone" width="24" />
              005-123-4567
            </a>
          </div>

          <!-- CTA button -->
          <button class="bg-black text-white text-xs cursor-pointer font-satoshi font-bold  border-b-5 shadow-lg border-bg-rich tracking-widest uppercase px-8 py-2 rounded-md transition-colors text-center leading-tight">
            BOOK BEFORE<br />PRICES RISE
          </button>

        </div>

        <!-- Mobile menu button -->
        <button class="md:hidden p-2 text-white" @click="menuOpen = !menuOpen">
          <Icon :icon="menuOpen ? 'mdi:close' : 'mdi:menu'" width="24" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="md:hidden bg-black/95 px-4 py-5 space-y-4 border-t border-white/10">
      <div class="flex flex-col items-center gap-1">
        <span class="text-white text-xs font-semibold tracking-widest uppercase">Top Rated</span>
        <div class="flex gap-0.5">
          <Icon v-for="i in 5" :key="i" icon="mdi:star" width="16" class="text-yellow-400" />
        </div>
      </div>
      <a href="tel:0051234567" class="flex items-center justify-center gap-2 text-white font-bold text-lg">
        <Icon icon="mdi:phone" width="16" />
        005-123-4567
      </a>
      <a href="#" class="block text-center bg-black border border-white/20 text-white text-xs font-bold tracking-widest uppercase py-3">
        BOOK BEFORE PRICES RISE
      </a>
    </div>
  </nav>
</template>
