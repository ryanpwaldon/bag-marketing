<template>
  <div class="flex flex-col items-center justify-center w-full pt-16 space-y-8 sm:h-screen sm:pt-0">
    <div class="relative flex flex-col w-full max-w-full bg-white rounded shadow sm:w-96">
      <div class="grid gap-1 p-6 text-center sm:py-6 sm:px-8">
        <h1 class="text-lg font-medium">Demo unavailable</h1>
        <p class="m-auto text-sm text-gray-500" style="max-width: 230px">
          Bag is no longer available on the Shopify App Store.
        </p>
        <Button size="md" text="Return home →" class="w-full mt-6" @click="$router.push('/')" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '@/components/Button/Button.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { Button }
})
</script>
