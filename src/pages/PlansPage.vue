<script setup>
import Navbar from '../components/Navbar.vue'
import ReserveBanner from '../components/ReserveBanner.vue'
import BookingCTA from '../components/BookingCTA.vue'
import Footer from '../components/Footer.vue'
import PropertyOverview from '../components/PropertyOverview.vue'
</script>

<template>
  <div class="min-h-screen bg-black">

    <div class="relative w-full bg-cover bg-center" style="background-image: url('/assets/plan.png');">

      <Navbar />

      <!-- Hero section -->
      <section
        class="relative z-10 w-full py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">

      </section>
    </div>



    <!-- Property Overview -->
    <PropertyOverview />

    <!-- Booking CTA -->
    <BookingCTA />

    <!-- Property Overview -->
    <PropertyOverview />

    <!-- Reserve Banner -->
    <ReserveBanner />

    <!-- Footer -->
    <Footer />

  </div>
</template>
