<script setup>
const highlights = [
  {
    image: '/assets/highlights/1.png',
    label: 'Exclusive First-of-Its-Kind Villa & Townhouse Launch:',
    description:
      'Tilal Binghatti represents the developer\'s first ground-level community blending premium villas and townhouses — a unique horizontal living concept in Dubai\'s real estate landscape.',
    large: true,
  },
  {
    image: '/assets/highlights/2.png',
    label: 'Iconic Binghatti Architectural Philosophy',
    description:
      'Experience the signature bold geometries and high-art aesthetics the brand is known for, reimagined for spacious suburban-style luxury living.',
    large: false,
  },
  {
    image: '/assets/highlights/3.png',
    label: 'Prime Strategic Location in Dubai:',
    description:
      'The project is strategically located in a rapidly growing district, offering residents seamless connectivity to major hubs while maintaining a peaceful, community-oriented environment.',
    large: false,
  },
]
</script>

<template>
  <section class="bg-black py-16 px-4 sm:px-6 lg:px-12">
    <div class="max-w-7xl mx-auto">

      <!-- Section label -->
      <div
        class="flex items-center gap-2 mb-4"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      >
        <span class="text-white text-xs tracking-[0.3em] uppercase font-inter">Highlights</span>
        <span class="block w-px h-4 bg-white"></span>
      </div>

      <!-- Heading -->
      <h2
        class="text-white font-satoshi font-bold text-xl sm:text-2xl lg:text-4xl leading-tight max-w-2xl mb-10"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
      >
        Comprehensive Overview of Key Project Achievements and Milestones
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-[2.2fr_1.4fr_1.4fr] gap-4 items-start">
        <div
          v-for="(item, i) in highlights"
          :key="item.label"
          class="flex flex-col"
          v-motion
          :initial="{ opacity: 0, y: 60 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: i * 150 } }"
        >
          <!-- Image -->
          <div
            :class="[
              'overflow-hidden w-full',
              item.large ? 'h-96 lg:h-120' : 'h-48 lg:h-56',
            ]"
          >
            <img
              :src="item.image"
              :alt="item.label"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Caption -->
          <div class="flex flex-col gap-1.5 ">
            <p class="text-tint-light font-inter bg-bg-dark p-1 font-bold text-xs tracking-wide uppercase leading-snug">
              {{ item.label }}
            </p>
            <p class="text-gray-light font-inter text-xs leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
