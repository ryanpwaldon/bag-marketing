<template>
  <div class="p-2.5 pb-0 overflow-hidden bg-white shadow-md rounded-t-4xl">
    <div class="overflow-hidden border border-b-0 border-gray-200 rounded-t-3xl">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>
