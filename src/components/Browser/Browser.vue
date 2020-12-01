<template>
  <div class="overflow-hidden rounded-md shadow-md">
    <Toolbar class="w-full h-auto" />
    <div class="bg-white">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Toolbar from '@/icons/Toolbar/Toolbar.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { Toolbar }
})
</script>
