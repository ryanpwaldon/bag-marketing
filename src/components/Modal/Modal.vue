<template>
  <form @submit="handleSubmit">
    <InputText name="email" placeholder="Enter your email..." v-model="fields.email.value.value" />
  </form>
</template>

<script lang="ts">
import InputText from '@/components/InputText/InputText.vue'
import useForm from '@/composables/useForm'
import { defineComponent } from 'vue'
import { object, string } from 'yup'
export default defineComponent({
  components: { InputText },
  setup() {
    const schema = object({
      email: string()
        .required('Please enter an email.')
        .email('Please enter a valid email.')
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
