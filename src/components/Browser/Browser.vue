<template>
  <div class="overflow-hidden rounded-md shadow-lg">
    <Toolbar class="w-full h-auto" />
    <div class="w-full h-0 bg-white" :style="{ paddingTop: `${aspect * 100}%` }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Toolbar from '@/icons/Toolbar/Toolbar.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { Toolbar },
  props: {
    aspect: {
      type: [Number, String],
      default: 0.5238095238
    }
  }
})
</script>
