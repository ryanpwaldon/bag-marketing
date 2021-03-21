<template>
  <div class="relative">
    <img src="@/assets/img/figure2-main.png" />
    <img ref="outline" class="absolute top-0 left-0 w-full h-full" src="@/assets/img/figure2-outline.png" />
    <img ref="listbox" class="absolute top-0 left-0 w-full h-full" src="@/assets/img/figure2-listbox.png" />
  </div>
</template>

<script lang="ts">
import anime from 'animejs'
import { defineComponent } from 'vue'
export default defineComponent({
  mounted() {
    const { outline, listbox } = this.$refs
    const tl = anime.timeline({ loop: true, easing: 'easeInOutQuad', duration: 300 })
    tl.add({ targets: [outline, listbox], opacity: [0, 1] }, '+=200')
    tl.add({ targets: [listbox], translateY: [-5, 0], easing: 'easeOutQuad' }, '-=300')
    tl.add({ targets: [outline, listbox], opacity: 0 }, '+=2500')
  }
})
</script>
