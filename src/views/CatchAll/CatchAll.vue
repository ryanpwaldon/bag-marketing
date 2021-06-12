<template>
  <div class="grid items-center w-screen h-screen">
    <div class="flex w-full max-w-xs py-16 m-auto">
      <div class="flex flex-col items-center py-5 m-auto text-center bg-white rounded shadow px-9">
        <Spinner class="w-6 h-6" />
        <h3 class="mt-4 text-lg font-medium">Redirecting</h3>
        <p class="text-gray-500">Please wait</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Spinner from '@/components/Spinner/Spinner.vue'
import referralService from '@/services/api/services/referralService'
export default defineComponent({
  async created() {
    const affiliateCode = this.$route.params.affiliateCode as string
    const affiliateCodeWasValid = await referralService.track(affiliateCode)
    if (affiliateCodeWasValid) window.location.replace(`${process.env.VUE_APP_LISTING_URL}?affiliateCode=${affiliateCode}`)
    else this.$router.push({ name: 'Home' })
  },
  components: { Spinner }
})
</script>
