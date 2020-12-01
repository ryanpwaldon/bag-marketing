<template>
  <button
    :type="type"
    :class="[classes, loading && 'pointer-events-none']"
    class="relative flex items-center justify-center transition focus:outline-none"
  >
    <Spinner v-if="loading" class="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2" />
    <span :class="loading && 'invisible'">{{ text }}</span>
  </button>
</template>

<script lang="ts">
import Spinner from '@/components/Spinner/Spinner.vue'
import { defineComponent, PropType } from 'vue'

type Themes = 'white' | 'black' | 'dark'
type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type Classes<T extends string> = { [K in T]: string }

export default defineComponent({
  components: { Spinner },
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
      default: 'lg'
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
        lg: 'rounded-md px-5 py-3 text-lg font-medium leading-6',
        xl: 'rounded-md px-6 py-3 text-base font-medium leading-6'
      }
      const themeClasses: Classes<Themes> = {
        white: 'border text-gray-700 hover:text-gray-900 bg-white border-gray-200 hover:bg-gray-50 focus:bg-gray-100',
        black: 'border text-white bg-gray-900 border-gray-700 hover:bg-gray-800 focus:bg-gray-700',
        dark: 'border text-white bg-gray-800 border-gray-700 hover:bg-gray-900 focus:bg-black'
      }
      return `${sizeClasses[this.size]} ${themeClasses[this.theme]}`
    }
  }
})
</script>
