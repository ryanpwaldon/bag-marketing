<template>
  <div class="flex items-center justify-between w-full max-w-4xl py-8 m-auto">
    <Logo class="w-auto h-7" />
    <a href="http://apps.shopify.com/bag" target="_blank" class="text-sm font-medium text-gray-900 border-b border-transparent hover:border-gray-900">
      View on Shopify →
    </a>
  </div>
</template>

<script lang="ts">
import Logo from '@/icons/Logo/Logo.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Logo
  }
})
</script>
