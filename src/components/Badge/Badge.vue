<template>
  <span class="inline-flex items-center select-none" :class="[classes]">
    {{ text }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'smallSquare'
    },
    theme: {
      type: String,
      default: 'gray'
    }
  },
  computed: {
    classes(): string {
      const sizeClasses = ({
        smallRounded: 'px-2.5 py-0.5 rounded-full text-xs font-medium leading-4',
        largeRounded: 'px-3 py-0.5 rounded-full text-sm font-medium leading-5',
        smallSquare: 'px-2 py-0.5 rounded text-xs font-medium leading-4',
        largeSquare: 'px-2.5 py-0.5 rounded-md text-sm font-medium leading-5'
      } as { [key: string]: string })[this.size]
      const themeClasses = ({
        white: 'bg-white text-gray-500',
        lightGray: 'bg-gray-50 text-gray-900',
        gray: 'bg-gray-100 text-gray-900',
        red: 'bg-red-100 text-red-800',
        orange: 'bg-orange-100 text-orange-800',
        yellow: 'bg-yellow-100 text-yellow-800',
        green: 'bg-green-100 text-green-800',
        teal: 'bg-teal-100 text-teal-800',
        blue: 'bg-blue-100 text-blue-800',
        indigo: 'bg-indigo-100 text-indigo-800',
        purple: 'bg-purple-100 text-purple-800',
        pink: 'bg-pink-100 text-pink-800'
      } as { [key: string]: string })[this.theme]
      return `${sizeClasses} ${themeClasses}`
    }
  }
})
</script>
