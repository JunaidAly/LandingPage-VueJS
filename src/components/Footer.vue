<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer class="bg-black text-white font-inter max-w-7xl mx-auto">

    <!-- Top row: Logo | Nav links | Social icons -->
    <div class="flex flex-col md:flex-row items-center justify-between gap-6 px-6 lg:px-12 py-5">

      <!-- Logo -->
      <div class="shrink-0">
        <img src="/assets/logo.png" alt="Binghatti Tilal" class="h-12 w-auto object-contain" />
      </div>

      <!-- Nav links -->
      <nav class="flex flex-wrap items-center justify-center gap-8">
        <a href="#" class="text-white text-sm tracking-wide ">Plan</a>
        <a href="#" class="text-white text-sm tracking-wide ">Master Plan</a>
        <a href="#" class="text-white text-sm tracking-wide ">Amenities</a>
        <a href="#" class="text-white text-sm tracking-wide ">Floor Plan</a>
        <a href="#" class="text-white text-sm tracking-wide ">Locations</a>
      </nav>

      <!-- Social icons -->
      <div class="flex items-center gap-4">
        <a href="#" class="text-white">
          <Icon icon="mdi:twitter" width="18" />
        </a>
        <a href="#" class="text-white">
          <Icon icon="mdi:facebook" width="18" />
        </a>
        <a href="#" class="text-white">
          <Icon icon="mdi:instagram" width="18" />
        </a>
        <a href="#" class="text-white">
          <Icon icon="mdi:github" width="18" />
        </a>
      </div>
    </div>

    <!-- Bottom row: Copyright | CTA links -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 lg:px-12 py-4">
      <p class="text-white text-xs tracking-wide">
        &copy;2026 Tilal Binghatti City Dubai. All Rights Reserved
      </p>
      <div class="flex items-center gap-6">
        <a href="#" class="text-white text-xs tracking-wide ">Payment Plan</a>
        <a href="#" class="text-white text-xs tracking-wide ">Book Now</a>
      </div>
    </div>

  </footer>
</template>
