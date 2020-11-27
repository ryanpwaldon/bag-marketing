<template>
  <div class="container shadow-lg">
    <div class="inner">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style scoped>
.container {
  width: 100%;
  padding: 3%;
  overflow: hidden;
  padding-bottom: 0;
  border-radius: 11%;
  background: white;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  /* box-shadow: 0px 10.2747px 15.4121px -3.08242px rgba(0, 0, 0, 0.1), 0px 4.10989px 6.16484px -2.05495px rgba(0, 0, 0, 0.05); */
}
.inner {
  overflow: hidden;
  border-radius: 9.5%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: 0px 1.02747px 3.08242px rgba(0, 0, 0, 0.1), 0px 1.02747px 2.05495px rgba(0, 0, 0, 0.06);
}
</style>
