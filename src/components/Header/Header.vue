<template>
  <div class="flex justify-between w-full max-w-4xl p-5">
    <Logo class="w-auto h-6" />
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
