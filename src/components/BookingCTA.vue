<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronDown, Check } from 'lucide-vue-next'
import AppButton from './ui/AppButton.vue'
import AppInput from './ui/AppInput.vue'

const form = ref({ name: '', email: '', phone: '', location: '' })

const investments = [
  'Under AED 1M',
  'AED 1M – 2M',
  'AED 2M – 5M',
  'AED 5M – 10M',
  'Above AED 10M',
]
const selectedInvestment = ref(null)

function handleSubmit() {
  // handle form submit
}
</script>

<template>
  <section class="relative bg-black overflow-hidden py-14 px-4 sm:px-6 lg:px-12">

    <div class="max-w-6xl mx-auto flex items-center gap-8">

      <!-- Left: form content -->
      <div class="flex-1 min-w-0 flex flex-col gap-5">

        <!-- Heading -->
        <div>
          <h2 class="text-white font-satoshi font-bold text-2xl sm:text-3xl leading-snug">
            Book Your Exclusive Villa at Binghatti Tilal Today!
          </h2>
          <p class="mt-2 text-gray-light font-inter text-sm leading-relaxed max-w-lg">
            Discover refined villas and townhouses in Dubai — register now to unlock exclusive
            launch prices, floor plans, and priority booking access.
          </p>
        </div>

        <!-- Form fields -->
        <form class="flex flex-col gap-3" @submit.prevent="handleSubmit">

          <!-- Row 1: Name + Email -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <AppInput
              v-model="form.name"
              placeholder="Your Name *"
              theme="dark"
              required
            />
            <AppInput
              v-model="form.email"
              type="email"
              placeholder="Email *"
              theme="dark"
              required
            />
          </div>

          <!-- Row 2: Phone + Investment -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <AppInput
              v-model="form.phone"
              type="tel"
              placeholder="Phone Number *"
              theme="dark"
              required
            />

            <!-- Investment Listbox -->
            <div class="relative">
              <Listbox v-model="selectedInvestment">
                <ListboxButton
                  class="w-full flex items-center justify-between gap-2 px-4 py-3 text-sm font-inter bg-bg-dark border border-gray-dim text-white text-left rounded-sm transition-colors focus:outline-none focus:border-gray-light"
                >
                  <span class="truncate">{{ selectedInvestment ?? 'Investment' }}</span>
                  <ChevronDown :size="16" class="shrink-0 text-white" />
                </ListboxButton>
                <ListboxOptions
                  class="absolute z-50 mt-1 w-full bg-bg-rich border border-gray-dim shadow-xl focus:outline-none"
                >
                  <ListboxOption
                    v-for="option in investments"
                    :key="option"
                    :value="option"
                    v-slot="{ active, selected }"
                  >
                    <li
                      :class="[
                        'flex items-center justify-between px-4 py-2.5 text-sm font-inter cursor-pointer select-none',
                        active ? 'bg-gray-dim text-white' : 'text-gray-light',
                      ]"
                    >
                      <span>{{ option }}</span>
                      <Check v-if="selected" :size="14" class="text-accent" />
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </Listbox>
            </div>
          </div>

          <!-- Row 3: Location full-width -->
          <AppInput
            v-model="form.location"
            placeholder="Location"
            theme="dark"
          />

          <!-- Submit -->
          <AppButton
            as="button"
            type="submit"
            variant="primary"
            size="md"
            class="w-full mt-1 py-4 text-sm"
          >
            Book Now – Limited Availability
          </AppButton>

        </form>
      </div>

      <!-- Right: man image -->
      <div class="hidden absolute right-10  lg:flex items-end self-stretch shrink-0 w-72 xl:w-80">
        <img
          src="/assets/man.png.png"
          alt="Binghatti Tilal Agent"
          class="w-full h-auto object-contain object-bottom drop-shadow-2xl"
        />
      </div>

    </div>
  </section>
</template>
