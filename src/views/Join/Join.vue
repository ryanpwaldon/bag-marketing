<template>
  <div class="flex flex-col items-center justify-center w-full pt-16 space-y-8 sm:h-screen sm:pt-0">
    <router-link to="/">
      <Logo />
    </router-link>
    <div class="w-full max-w-full bg-white rounded shadow sm:w-96">
      <div class="grid gap-1 p-6 sm:py-6 sm:px-8">
        <h3 class="text-lg font-medium">Get early access</h3>
        <p class="text-sm text-gray-500">Streamline your checkout, grow your sales.</p>
      </div>
      <div class="w-full h-px bg-gray-200" />
      <div class="grid gap-6 p-6 sm:p-8">
        <InputText name="Email" placeholder="Email" modelValue="" />
        <InputText name="Shop website" placeholder="Shop website" modelValue="" />
        <Button size="md" text="Register" />
      </div>
    </div>
    <p class="text-sm text-gray-500">Made for Shopify</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button/Button.vue'
import InputText from '@/components/InputText/InputText.vue'
import Logo from '@/icons/Logo/Logo.vue'
export default defineComponent({
  components: {
    Button,
    InputText,
    Logo
  }
})
</script>
