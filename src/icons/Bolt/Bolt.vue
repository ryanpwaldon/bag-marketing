<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="transform -rotate-12">
    <path
      ref="line"
      stroke-width="2"
      stroke="currentColor"
      stroke-linecap="round"
      class="text-blue-700"
      stroke-linejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
    <path
      ref="clip"
      stroke-width="3"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="text-gray-100"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
    <path
      opacity="0.25"
      stroke-width="2"
      stroke="currentColor"
      stroke-linecap="round"
      class="text-blue-700"
      stroke-linejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
</template>

<script lang="ts">
import anime from 'animejs'
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  setup() {
    const line = ref()
    const clip = ref()
    onMounted(() => {
      const tl = anime.timeline({ loop: true, easing: 'linear' })
      tl.add({ targets: line.value, strokeDashoffset: [anime.setDashoffset, 0], duration: 500 }, 0)
      tl.add({ targets: clip.value, strokeDashoffset: [anime.setDashoffset, 0], duration: 1000, delay: 100 }, 0)
    })
    return { line, clip }
  }
})
</script>
