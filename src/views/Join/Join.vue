<template>
  <div class="flex flex-col items-center justify-center w-full pt-16 space-y-8 sm:h-screen sm:pt-0">
    <router-link to="/">
      <Logo />
    </router-link>
    <div class="relative flex flex-col w-full max-w-full bg-white rounded shadow sm:w-96">
      <div
        :class="success ? 'opacity-100 z-10' : 'opacity-0 -z-10'"
        class="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full p-6 text-center transition duration-300 delay-300"
      >
        <Star class="w-6 h-6 star" />
        <p class="mt-2 text-2xl font-medium">You're on the list</p>
        <p class="mt-2 text-base text-gray-500">Thanks for the interest!<br />We’ll be sending invites shortly,<br />so keep your eyes peeled.</p>
      </div>
      <div :class="success ? 'opacity-0' : 'opacity-100'" class="transition duration-300">
        <div class="grid gap-1 p-6 text-center sm:py-6 sm:px-8">
          <h3 class="text-lg font-medium">Join early access</h3>
          <p class="text-sm text-gray-500">Streamline your checkout, grow your sales.</p>
        </div>
        <div class="w-full h-px bg-gray-200" />
        <form class="grid gap-6 p-6 sm:p-8" @submit="handleSubmit">
          <InputText name="Email" placeholder="Your email" v-model="fields.email.value.value" :error="fields.email.error.value" />
          <InputText name="Shop URL" placeholder="Your shop website" v-model="fields.shopUrl.value.value" :error="fields.shopUrl.error.value" />
          <Button type="submit" size="md" text="Get early access" :loading="loading" />
          <p class="text-sm text-center text-red-600" v-if="error">
            An error occurred. Please email your details to ryanpwaldon@gmail.com, and I'll manually put you on the list 👍
          </p>
        </form>
      </div>
    </div>
    <p class="text-sm text-gray-500">Made for Shopify</p>
  </div>
</template>

<script lang="ts">
import Star from '@/icons/Star/Star.vue'
import Logo from '@/icons/Logo/Logo.vue'
import Button from '@/components/Button/Button.vue'
import InputText from '@/components/InputText/InputText.vue'
import useForm from '@/composables/useForm'
import { defineComponent, ref } from 'vue'
import { object, string } from 'yup'
import leadService from '@/services/api/services/leadService'
export default defineComponent({
  components: {
    Logo,
    Button,
    InputText,
    Star
  },
  setup() {
    const error = ref(false)
    const loading = ref(false)
    const success = ref(false)
    const schema = object({
      email: string()
        .required('Please enter an email.')
        .email('Please enter a valid email.')
        .default(''),
      shopUrl: string()
        .required('Please enter your shop URL.')
        .default('')
    }).defined()
    const { fields, handleSubmit, getValues } = useForm(schema)
    const onSubmit = async () => {
      loading.value = true
      try {
        const lead = await leadService.create(getValues())
        console.log(lead)
        success.value = true
      } catch (err) {
        console.log(err)
        loading.value = false
        error.value = true
      }
    }
    return {
      error,
      fields,
      loading,
      success,
      handleSubmit: handleSubmit(onSubmit)
    }
  }
})
</script>

<style scoped>
.star {
  animation: spin 2.5s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
