<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="text-blue-700">
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path ref="box" class="origin-bottom" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" style="transform-box: fill-box" />
      <path ref="line1" class="origin-bottom" d="M8 14v2" style="transform-box: fill-box" />
      <path ref="line2" class="origin-bottom" d="M12 11v5" style="transform-box: fill-box" />
      <path ref="line3" class="origin-bottom" d="M16 8v8" style="transform-box: fill-box" />
    </g>
  </svg>
</template>

<script lang="ts">
import anime from 'animejs'
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  setup() {
    const line1 = ref()
    const line2 = ref()
    const line3 = ref()
    const box = ref()
    onMounted(() => {
      const tl = anime.timeline({ loop: true, duration: 2000 })
      tl.add({ targets: line1.value, scaleY: [0, 1] }, 200)
      tl.add({ targets: line2.value, scaleY: [0, 1] }, 400)
      tl.add({ targets: line3.value, scaleY: [0, 1] }, 600)
      tl.add({ targets: box.value, scaleY: 1.1 }, 700)
      tl.add({ targets: box.value, scaleY: 1 }, 1100)
      tl.add({ targets: line1.value, scaleY: [1, 0], easing: 'easeInOutQuad', duration: 300 }, 2200)
      tl.add({ targets: line2.value, scaleY: [1, 0], easing: 'easeInOutQuad', duration: 300 }, 2400)
      tl.add({ targets: line3.value, scaleY: [1, 0], easing: 'easeInOutQuad', duration: 300 }, 2600)
    })
    return { line1, line2, line3, box }
  }
})
</script>
