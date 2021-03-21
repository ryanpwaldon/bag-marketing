<template>
  <div class="relative overflow-hidden rounded-md shadow-md select-none">
    <Toolbar class="w-full h-auto" :url="url" />
    <div class="relative w-full h-0 bg-white" :style="{ paddingTop: `${aspect * 100}%` }">
      <div class="absolute top-0 left-0 w-full h-full">
        <slot />
      </div>
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
      type: Number,
      default: 0.5238095238
    },
    url: {
      type: String,
      required: false
    }
  }
})
</script>
