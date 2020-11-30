<template>
  <div class="flex flex-col items-start">
    <label :for="name" class="block mb-1 text-sm font-medium text-gray-700" v-if="label">{{ label }}</label>
    <input
      :id="name"
      type="text"
      v-model="value"
      :placeholder="placeholder"
      class="block w-full rounded shadow-sm sm:text-sm focus:outline-none"
      :class="
        error
          ? 'text-red-900 placeholder-red-300 border-red-300 focus:ring-red-500 focus:border-red-500'
          : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
      "
    />
    <div class="mt-2 text-sm" v-if="error || description">
      <p class="text-red-600" v-if="error">{{ error }}</p>
      <p class="text-gray-500" v-if="description && !error">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import useModel from '@/composables/useModel'
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    placeholder: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    error: {
      type: String,
      required: false
    }
  },
  setup(props, { emit }) {
    return {
      value: useModel(props, emit, 'modelValue')
    }
  }
})
</script>
