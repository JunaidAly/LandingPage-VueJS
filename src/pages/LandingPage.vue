<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import Features from '../components/Features.vue'
import CTA from '../components/CTA.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen">

    <!-- Shared background: Navbar + Hero sit on same image -->
    <div
      class="relative w-full bg-cover bg-center"
      style="background-image: url('/assets/heroimg.png');"
    >
      <Navbar />
      <Hero />
    </div>

    <main>
      <!-- <Features />
      <CTA /> -->
    </main>

    <Footer />

  </div>
</template>
