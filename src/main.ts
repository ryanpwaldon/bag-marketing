import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import '@/assets/styles/index.css'
import useGoatcounter from '@/composables/useGoatCounter'

useGoatcounter()

createApp(App)
  .use(router)
  .mount('#app')
