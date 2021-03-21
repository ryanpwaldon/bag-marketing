<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="transform -rotate-12">
    <g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path stroke="#C2CCEF" d="M21 7l-8 8-4-4-6 6M21 7h-5m5 0v5" />
      <path ref="line3" class="text-blue-700" stroke="currentColor" d="M21,7L16,7" />
      <path ref="line2" class="text-blue-700" stroke="currentColor" d="M21 7v5" />
      <path ref="line1" class="text-blue-700" stroke="currentColor" d="M3,17L9,11L13,15L21,7" />
    </g>
  </svg>
</template>

<script lang="ts">
import anime from 'animejs'
import { defineComponent } from 'vue'
export default defineComponent({
  mounted() {
    const { line1, line2, line3 } = this.$refs
    const tl = anime.timeline({ loop: true, easing: 'linear' })
    tl.add({ targets: line1, strokeDashoffset: [anime.setDashoffset, 0], duration: 500 }, 500)
    tl.add({ targets: line2, strokeDashoffset: [anime.setDashoffset, 0], duration: 250 }, '+=0')
    tl.add({ targets: line3, strokeDashoffset: [anime.setDashoffset, 0], duration: 250 }, '-=250')
    tl.add({ targets: [line1, line2, line3], opacity: 0, duration: 500 }, '+=750')
  }
})
</script>
