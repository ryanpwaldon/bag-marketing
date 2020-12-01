<template>
  <div class="flex flex-col items-center justify-center w-full pt-16 space-y-8 sm:h-screen sm:pt-0">
    <router-link to="/">
      <Logo />
    </router-link>
    <div class="w-full max-w-full bg-white rounded shadow sm:w-96">
      <div class="grid gap-1 p-6 text-center sm:py-6 sm:px-8">
        <h3 class="text-lg font-medium">Join early access</h3>
        <p class="text-sm text-gray-500">Ready to streamline your checkout<br />and grow your sales?</p>
      </div>
      <div class="w-full h-px bg-gray-200" />
      <form class="grid gap-6 p-6 sm:p-8" @submit="handleSubmit">
        <InputText name="Email" placeholder="Your email" v-model="fields.email.value.value" :error="fields.email.error.value" />
        <InputText name="Shop URL" placeholder="Your shop website" v-model="fields.shopUrl.value.value" :error="fields.shopUrl.error.value" />
        <Button type="submit" size="md" text="Get early access" />
      </form>
    </div>
    <p class="text-sm text-gray-500">Made for Shopify</p>
  </div>
</template>

<script lang="ts">
import Logo from '@/icons/Logo/Logo.vue'
import Button from '@/components/Button/Button.vue'
import InputText from '@/components/InputText/InputText.vue'
import useForm from '@/composables/useForm'
import { defineComponent } from 'vue'
import { object, string } from 'yup'
export default defineComponent({
  components: {
    Logo,
    Button,
    InputText
  },
  setup() {
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
    const onSubmit = () => console.log(getValues())
    return {
      fields,
      handleSubmit: handleSubmit(onSubmit)
    }
  }
})
</script>
