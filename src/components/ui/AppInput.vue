<script setup>
import { useAttrs } from 'vue'

defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  // theme: 'dark' | 'light'
  theme: {
    type: String,
    default: 'dark',
  },
  required: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['update:modelValue'])

// Expose all attrs to parent (e.g. name, autocomplete)
defineOptions({ inheritAttrs: false })
const attrs = useAttrs()
</script>

<template>
  <input
    v-bind="attrs"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :required="required"
    :class="[
      'w-full text-sm font-inter rounded-sm outline-none transition-colors duration-200',
      'px-4 py-3 border',

      theme === 'dark' && [
        'bg-bg-dark text-white placeholder-white',
        'border-gray-dim focus:border-gray-light',
      ],
      theme === 'light' && [
        'bg-white text-black placeholder-white',
        'border-gray-muted focus:border-gray-dark',
      ],
    ]"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
