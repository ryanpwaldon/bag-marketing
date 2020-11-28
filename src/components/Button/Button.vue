<template>
  <button :type="type" :class="classes" class="flex items-center justify-center transition focus:outline-none">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type Themes = 'white' | 'black'
type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Classes<T extends string> = { [K in T]: string }

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'button'
    },
    size: {
      type: String as PropType<Sizes>,
      default: 'md'
    },
    theme: {
      type: String as PropType<Themes>,
      default: 'black'
    },
    loading: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    // prettier-ignore
    classes(): string {
      const sizeClasses: Classes<Sizes> = {
        xs: 'rounded px-2.5 py-1.5 text-xs font-medium leading-4',
        sm: 'rounded-md px-3 py-2 text-sm font-medium leading-4',
        md: 'rounded-md px-4 py-2 text-sm font-medium leading-5',
        lg: 'rounded-lg px-5 py-3 text-lg font-medium leading-6',
        xl: 'rounded-md px-6 py-3 text-base font-medium leading-6'
      }
      const themeClasses: Classes<Themes> = {
        white: 'border text-gray-700 hover:text-gray-900 bg-white border-gray-200 hover:bg-gray-50 focus:bg-gray-100',
        black: 'border text-white bg-gray-900 border-gray-700 hover:bg-gray-800 focus:bg-gray-700'
      }
      return `${sizeClasses[this.size]} ${themeClasses[this.theme]}`
    }
  }
})
</script>
