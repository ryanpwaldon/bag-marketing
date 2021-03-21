<template>
  <div class="relative">
    <img src="@/assets/img/figure0-main.png" />
    <img ref="title" class="absolute top-0 left-0 w-full h-full" src="@/assets/img/figure0-title.png" />
    <img ref="offer1" class="absolute top-0 left-0 w-full h-full" src="@/assets/img/figure0-offer1.png" />
    <img ref="offer2" class="absolute top-0 left-0 w-full h-full" src="@/assets/img/figure0-offer2.png" />
    <img ref="offer3" class="absolute top-0 left-0 w-full h-full" src="@/assets/img/figure0-offer3.png" />
    <img ref="offer4" class="absolute top-0 left-0 w-full h-full" src="@/assets/img/figure0-offer4.png" />
    <div ref="pulseContainer" class="absolute top-0 left-0 w-full h-full">
      <img ref="pulse" class="w-full h-full" src="@/assets/img/figure0-pulse.png" />
    </div>
  </div>
</template>

<script lang="ts">
import anime from 'animejs'
import { defineComponent } from 'vue'
export default defineComponent({
  mounted() {
    const { title, pulseContainer, pulse, offer1, offer2, offer3, offer4 } = this.$refs
    anime({ targets: [pulse], opacity: [0, 0.5], loop: true, easing: 'easeInOutQuad', direction: 'alternate', duration: 1000 })
    const tl = anime.timeline({ loop: true, easing: 'easeInOutQuad', duration: 300 })
    tl.add({ targets: [title, offer1, pulseContainer], opacity: [0, 1], translateY: { value: [5, 0], easing: 'easeOutQuad' } }, '+=200')
    tl.add({ targets: [title, offer1, pulseContainer], opacity: 0 }, '+=2500')
    tl.add({ targets: [title, offer2, pulseContainer], opacity: [0, 1], translateY: { value: [5, 0], easing: 'easeOutQuad' } }, '+=200')
    tl.add({ targets: [title, offer2, pulseContainer], opacity: 0 }, '+=2500')
    tl.add({ targets: [title, offer3, pulseContainer], opacity: [0, 1], translateY: { value: [5, 0], easing: 'easeOutQuad' } }, '+=200')
    tl.add({ targets: [title, offer3, pulseContainer], opacity: 0 }, '+=2500')
    tl.add({ targets: [title, offer4, pulseContainer], opacity: [0, 1], translateY: { value: [5, 0], easing: 'easeOutQuad' } }, '+=200')
    tl.add({ targets: [title, offer4, pulseContainer], opacity: 0 }, '+=2500')
  }
})
</script>
