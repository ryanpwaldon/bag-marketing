<template>
  <div class="flex justify-between w-full max-w-4xl p-5 m-auto">
    <Logo class="w-auto h-6" />
    <Badge text="Made for Shopify" theme="white" size="largeSquare" />
  </div>
</template>

<script lang="ts">
import Badge from '@/components/Badge/Badge.vue'
import Logo from '@/icons/Logo/Logo.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Logo,
    Badge
  }
})
</script>
