<script setup>
import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronDown, Check } from 'lucide-vue-next'
import AppButton from './ui/AppButton.vue'
import AppInput from './ui/AppInput.vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
})

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
  <div class="max-w-7xl mx-auto rounded-2xl bg-black border border-gray-dim">
    <form
      class=" px-4 sm:px-6 lg:px-3 py-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
      @submit.prevent="handleSubmit"
    >
      <!-- Name -->
      <AppInput
        v-model="form.name"
        placeholder="Your Name *"
        theme="dark"
        required
        class="flex-1 min-w-0"
      />

      <!-- Email -->
      <AppInput
        v-model="form.email"
        type="email"
        placeholder="Email *"
        theme="dark"
        required
        class="flex-1 min-w-0"
      />

      <!-- Phone -->
      <AppInput
        v-model="form.phone"
        type="tel"
        placeholder="Phone Number *"
        theme="dark"
        required
        class="flex-1 min-w-0"
      />

      <!-- Investment — Headless UI Listbox -->
      <div class="relative flex-1 min-w-0">
        <Listbox v-model="selectedInvestment">
          <ListboxButton
            class="w-full flex items-center  justify-between gap-2 px-4 py-3 text-sm rounded-sm font-inter bg-bg-dark border border-gray-dim text-left transition-colors duration-200 focus:outline-none focus:border-gray-light"
            :class="selectedInvestment ? 'text-white' : 'text-white'"
          >
            <span class="truncate ">{{ selectedInvestment ?? 'Investment' }}</span>
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

      <!-- BOOK NOW -->
      <AppButton
        as="button"
        type="submit"
        variant="primary"
        size="md"
        class="shrink-0 sm:self-stretch"
      >
        Book Now
      </AppButton>
    </form>
  </div>
</template>
