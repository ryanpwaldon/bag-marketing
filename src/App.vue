<template>
  <Layout>
    <transition mode="out-in" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <router-view class="transition" />
    </transition>
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
