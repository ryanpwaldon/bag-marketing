<template>
  <div class="grid max-w-5xl gap-24 px-5 pb-24 m-auto text-center sm:gap-32 sm:pb-52">
    <Header />
    <div class="relative flex flex-col items-center">
      <h1 class="text-3xl font-semibold leading-tight sm:leading-tight sm:text-5xl">
        Bag, a shopping cart
        <br class="hidden xs:block" />
        that <span class="text-blue-700">grows your sales</span>
      </h1>
      <p class="max-w-md mt-4 text-gray-500 sm:text-xl sm:max-w-xl">
        Impress your customers with a smooth checkout experience
        <br class="hidden sm:block" />
        and sell more products at the same time.
      </p>
      <div class="flex flex-col w-full mt-5 space-y-3 sm:space-y-0 sm:space-x-4 sm:flex-row sm:w-auto">
        <router-link to="/demo">
          <Button text="Interactive demo" theme="white" class="w-full sm:w-auto">
            <template #icon>
              <Cursor />
            </template>
          </Button>
        </router-link>
        <a href="http://apps.shopify.com/bag" target="_blank">
          <Button text="Get early access →" class="w-full sm:w-auto" />
        </a>
      </div>
      <Browser class="w-full mt-16" :aspect="760 / 1200">
        <video ref="videoLoop" autoplay muted loop playsinline src="@/assets/video/demo.mp4" />
        <video ref="videoHidden" class="absolute top-0 left-0 invisible w-full" muted loop src="@/assets/video/demo.mp4" />
      </Browser>
      <Button class="mt-6 sm:hidden" text="View fullscreen" size="md" theme="white" @click="fullscreen">
        <template #icon>
          <Expand />
        </template>
      </Button>
    </div>
    <div class="flex flex-col items-center sm:flex-row-reverse">
      <div class="w-full sm:flex-1 sm:flex sm:justify-center">
        <div class="flex flex-col items-center sm:text-left sm:items-start sm:w-10/12">
          <Trend />
          <h3 class="mt-4 text-2xl font-semibold sm:text-xl md:text-2xl lg:text-3xl">Drive customer spending</h3>
          <p class="max-w-md mt-4 text-gray-500 sm:text-sm md:text-base">
            Increase your AOV with customizable progress bars. Customers are open to spending more if you present them with the right incentives.
          </p>
          <Quote class="hidden mt-8 sm:text-sm md:text-base sm:inline-flex">Want a free pencil case?<br />You’re only $28 away</Quote>
        </div>
      </div>
      <div class="w-full max-w-md mt-8 sm:max-w-none sm:mt-0 sm:flex-1 sm:flex sm:justify-center">
        <Figure0 class="sm:w-3/4 sm:transform sm:-rotate-2" />
      </div>
      <Quote class="mt-8 text-left sm:hidden">Want a free pencil case?<br />You’re only $28 away</Quote>
    </div>
    <div class="flex flex-col items-center sm:flex-row">
      <div class="w-full sm:flex-1 sm:flex sm:justify-center">
        <div class="flex flex-col items-center sm:text-left sm:items-start sm:w-10/12">
          <Bolt />
          <h3 class="mt-4 text-2xl font-semibold sm:text-xl md:text-2xl lg:text-3xl">Smarter cross sells</h3>
          <p class="max-w-md mt-4 text-gray-500 sm:text-sm md:text-base">
            Sell more with smart cross sells – they’re dynamic offers that only appear when certain products are added to a customer’s cart.
          </p>
          <Quote class="hidden mt-8 sm:text-sm md:text-base sm:inline-flex">You're buying a tape dispenser...<br />Need some tape?</Quote>
        </div>
      </div>
      <div class="w-full max-w-md mt-8 sm:max-w-none sm:mt-0 sm:flex-1 sm:flex sm:justify-center">
        <Figure1 class="sm:w-3/4 sm:transform sm:rotate-2" />
      </div>
      <Quote class="mt-8 text-left sm:hidden">You're buying a tape dispenser...<br />Need some tape?</Quote>
    </div>
    <div class="flex flex-col items-center sm:flex-row-reverse">
      <div class="w-full sm:flex-1 sm:flex sm:justify-center">
        <div class="flex flex-col items-center sm:text-left sm:items-start sm:w-10/12">
          <Sparkles />
          <h3 class="mt-4 text-2xl font-semibold sm:text-xl md:text-2xl lg:text-3xl">Customers will thank you</h3>
          <p class="max-w-md mt-4 text-gray-500 sm:text-sm md:text-base">
            Our variant editor makes it easy to review items and make changes — we give your customers a smooth checkout experience.
          </p>
        </div>
      </div>
      <div class="w-full max-w-md mt-8 sm:max-w-none sm:mt-0 sm:flex-1 sm:flex sm:justify-center">
        <Figure2 class="sm:w-3/4 sm:transform sm:-rotate-2" />
      </div>
    </div>
    <div class="flex flex-col items-center">
      <Chart />
      <h3 class="mt-4 text-2xl font-semibold sm:text-4xl">Track conversions</h3>
      <p class="max-w-md mt-4 text-base text-gray-500">
        Create offers and track conversions in our simple-to-use Shopify embedded app.
      </p>
      <Browser class="w-full mt-8" :aspect="640 / 1200">
        <img src="@/assets/img/admin.png" />
      </Browser>
    </div>
    <div class="flex flex-col items-center">
      <h3 class="mt-4 text-3xl font-semibold sm:text-4xl">Try it out</h3>
      <p class="mt-4 text-base text-gray-500">Grow your sales, streamline your checkout.</p>
      <div class="flex flex-col w-full mt-5 space-y-3 sm:space-y-0 sm:space-x-4 sm:flex-row sm:w-auto">
        <router-link to="/demo">
          <Button text="Interactive demo" theme="white" class="w-full sm:w-auto">
            <template #icon>
              <Cursor />
            </template>
          </Button>
        </router-link>
        <a href="http://apps.shopify.com/bag" target="_blank">
          <Button text="Get early access →" class="w-full sm:w-auto" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Header from '@/components/Header/Header.vue'
import Browser from '@/components/Browser/Browser.vue'
import Bolt from '@/icons/Bolt/Bolt.vue'
import Quote from '@/components/Quote/Quote.vue'
import Figure1 from '@/components/Figure1/Figure1.vue'
import Sparkles from '@/icons/Sparkles/Sparkles.vue'
import Figure2 from '@/components/Figure2/Figure2.vue'
import Button from '@/components/Button/Button.vue'
import Chart from '@/icons/Chart/Chart.vue'
import Expand from '@/icons/Expand/Expand.vue'
import Figure0 from '@/components/Figure0/Figure0.vue'
import Trend from '@/icons/Trend/Trend.vue'
import Cursor from '@/icons/Cursor/Cursor.vue'
export default defineComponent({
  components: {
    Header,
    Browser,
    Bolt,
    Quote,
    Figure1,
    Sparkles,
    Figure2,
    Button,
    Chart,
    Expand,
    Figure0,
    Trend,
    Cursor
  },
  setup() {
    const videoLoop = ref()
    const videoHidden = ref()
    const fullscreen = () => {
      if (videoLoop.value.requestFullScreen) return videoLoop.value.requestFullScreen()
      else if (videoLoop.value.webkitRequestFullScreen) return videoLoop.value.webkitRequestFullScreen()
      else videoHidden.value.play()
    }
    return { videoLoop, videoHidden, fullscreen }
  }
})
</script>
