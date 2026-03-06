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

  
    <div
      class="relative w-full bg-cover bg-center"
      style="background-image: url('/assets/heroimg.png');"
    >
      <Navbar />
      <Hero />
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
