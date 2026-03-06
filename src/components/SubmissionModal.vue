<script setup>
import { X } from 'lucide-vue-next';
defineProps({ show: Boolean })
defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
        @click.self="$emit('close')"
      >
        <div class="relative bg-black border border-white/10 rounded-xl w-full max-w-md px-10 py-12 flex flex-col items-center gap-6 text-center shadow-2xl">

          <button
            class="absolute top-4 right-4 w-6 h-6 flex items-center justify-center rounded-full cursor-pointer border border-white/20 text-white text-sm bg-white "
            @click="$emit('close')"
          >
              <X size="20" class="text-black"/>
          </button>


          <div class="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center text-5xl">
            <img src="/assets/modalicon.png" alt="modal icon" class="w-12 h-12 object-contain">
          </div>

          <!-- Heading -->
          <h2 class="text-white font-satoshi font-bold text-2xl sm:text-3xl leading-tight">
            Thank You For Your Submission!
          </h2>

          <p class="text-white font-light font-inter text-sm leading-relaxed">
            Your information has been successfully received. We'll get in touch with you soon.
          </p>

          <a href="#" class="flex items-center gap-2 text-white font-inter text-sm mt-2 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            Stay Connected
          </a>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
