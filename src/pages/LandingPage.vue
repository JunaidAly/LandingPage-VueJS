<script setup>
import Navbar from '../components/Navbar.vue'
import Hero from '../components/Hero.vue'
import BookingBar from '../components/BookingBar.vue'
import Features from '../components/Features.vue'
import About from '../components/About.vue'
import Highlights from '../components/Highlights.vue'
import ReserveBanner from '../components/ReserveBanner.vue'
import BookingCTA from '../components/BookingCTA.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen">

  
    <div class="relative w-full overflow-hidden">
      <img src="/assets/heroimg.png" alt="" class="w-full h-auto block" />
      <div class="absolute inset-0 flex flex-col">
        <Navbar />
        <Hero />
      </div>
    </div>

    <BookingBar />

    <main>
      <Features />
      <About />
      <BookingCTA />
      <Highlights />
      <ReserveBanner />
    </main>

    <Footer />

  </div>
</template>
