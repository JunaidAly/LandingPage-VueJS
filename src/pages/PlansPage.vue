<script setup>
import Navbar from '../components/Navbar.vue'
import ReserveBanner from '../components/ReserveBanner.vue'
import BookingCTA from '../components/BookingCTA.vue'
import Footer from '../components/Footer.vue'
import PropertyOverview from '../components/PropertyOverview.vue'
</script>

<template>
  <div class="min-h-screen bg-black">

    <div class="relative w-full overflow-hidden">
      <img src="/assets/plan.png" alt="" class="w-full h-auto block" />
      <div class="absolute inset-0 flex flex-col">
        <Navbar />
      </div>
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
