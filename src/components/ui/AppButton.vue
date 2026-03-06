<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
   
  },
  size: {
    type: String,
    default: 'md',
  },
  as: {
    type: String,
    default: 'button', 
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
      size === 'sm' && 'text-sm px-4 py-2',
      size === 'md' && 'text-xl px-6 py-1',
      size === 'lg' && 'text-sm px-8 py-4',

      variant === 'primary' && [
        'bg-green-deep text-white border border-green-deep rounded-sm'
      ],

    
      variant === 'outline-white' && [
        'bg-transparent border border-white text-white ',
        'rounded-md font-inter font-bold ',
      ],

  
      variant === 'outline-about' && [
        'bg-transparent font-inter border  uppercase text-black',
        'bg-white ',
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
