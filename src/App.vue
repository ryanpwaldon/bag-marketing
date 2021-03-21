<template>
  <Layout>
    <router-view v-slot="{ Component }">
      <transition
        mode="out-in"
        enter-active-class="transition duration-75 ease-in"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout/Layout.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    Layout
  }
})
</script>
