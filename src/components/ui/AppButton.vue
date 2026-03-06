<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    // primary      → green bg, white text  (CTA / main actions)
    // outline-white → transparent, white border + text (dark bg cards)
    // outline-dark  → transparent, dark border + text (light bg cards)
    // ghost        → no border, text only
  },
  size: {
    type: String,
    default: 'md', // sm | md | lg
  },
  as: {
    type: String,
    default: 'button', // button | a
  },
})
</script>

<template>
  <component
    :is="as"
    :class="[
      // base
      'inline-flex items-center justify-center gap-2 font-bold tracking-widest uppercase cursor-pointer transition-all duration-200 leading-none',

      // size
      size === 'sm' && 'text-[10px] px-4 py-2',
      size === 'md' && 'text-xl px-6 py-1',
      size === 'lg' && 'text-sm px-8 py-4',

      // variant: primary (green)
      variant === 'primary' && [
        'bg-green-deep text-white border border-green-deep rounded-sm',
        'hover:brightness-110 active:scale-95',
      ],

      // variant: outline-white (for dark backgrounds)
      variant === 'outline-white' && [
        'bg-transparent border border-white text-white',
        'hover:bg-white hover:text-black active:scale-95',
      ],

      // variant: outline-dark (for light backgrounds)
      variant === 'outline-dark' && [
        'bg-transparent border border-gray-dark text-black',
        'hover:bg-black hover:text-white active:scale-95',
      ],

      // variant: ghost
      variant === 'ghost' && [
        'bg-transparent border-none text-white',
        'hover:text-accent active:scale-95',
      ],
    ]"
  >
    <slot />
  </component>
</template>
