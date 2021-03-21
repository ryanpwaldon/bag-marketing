<template>
  <div class="relative">
    <img src="@/assets/img/figure1-main.png" />
    <img ref="title" class="absolute top-0 left-0 w-full h-full" src="@/assets/img/figure1-title.png" />
    <img ref="offer" class="absolute top-0 left-0 w-full h-full" src="@/assets/img/figure1-offer.png" />
  </div>
</template>

<script lang="ts">
import anime from 'animejs'
import { defineComponent } from 'vue'
export default defineComponent({
  mounted() {
    const { title, offer } = this.$refs
    const tl = anime.timeline({ loop: true, easing: 'easeInOutQuad', duration: 300 })
    tl.add({ targets: [title, offer], opacity: [0, 1], translateY: { value: [5, 0], easing: 'easeOutQuad' } }, '+=200')
    tl.add({ targets: [title, offer], opacity: 0 }, '+=2500')
  }
})
</script>
