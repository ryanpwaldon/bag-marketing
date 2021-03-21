<template>
  <div class="flex flex-col items-center justify-center w-full pt-16 space-y-8 sm:h-screen sm:pt-0">
    <div class="relative flex flex-col w-full max-w-full bg-white rounded shadow sm:w-96">
      <div class="grid gap-1 p-6 text-center sm:py-6 sm:px-8">
        <h3 class="text-lg font-medium">Demo password</h3>
        <p class="m-auto text-sm text-gray-500" style="max-width: 230px">Use the following password to access the demo</p>
        <p class="mt-5 font-mono text-5xl font-semibold mb-7">1234</p>
        <a href="https://bag-demo.myshopify.com/" target="_blank" @click="$router.push('Home')">
          <Button size="md" text="Access demo →" class="w-full" />
        </a>
      </div>
    </div>
    <router-link to="/" class="text-sm text-gray-500">Back to home</router-link>
  </div>
</template>

<script lang="ts">
import Button from '@/components/Button/Button.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { Button }
})
</script>
