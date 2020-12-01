<template>
  <div class="grid max-w-5xl gap-24 px-5 pb-24 m-auto text-center sm:gap-32 sm:pb-52">
    <Header />
    <div class="relative flex flex-col items-center">
      <h1 class="text-3xl font-semibold leading-tight sm:leading-tight sm:text-5xl">
        Bag, a shopping cart
        <br class="hidden xs:block" />
        that <span class="text-blue-700">grows your sales</span>
      </h1>
      <p class="max-w-md mt-4 text-gray-500 sm:text-xl sm:max-w-lg">
        Impress your customers with a smooth checkout experience and sell more at the same time.
      </p>
      <router-link to="/join" class="mt-5">
        <Button text="Get early access" />
      </router-link>
      <Browser class="w-full mt-16" :aspect="760 / 1200">
        <video autoplay muted loop src="@/assets/video/demo.mp4" />
      </Browser>
    </div>
    <div class="flex flex-col items-center sm:flex-row-reverse">
      <div class="w-full sm:flex-1 sm:flex sm:justify-center">
        <div class="flex flex-col items-center sm:text-left sm:items-start sm:w-10/12">
          <Bolt />
          <h3 class="mt-4 text-2xl font-semibold sm:text-xl md:text-2xl lg:text-3xl">Unlock more sales</h3>
          <p class="max-w-md mt-4 text-gray-500 sm:text-sm md:text-base">
            Sell more by creating in-cart cross sells. With Bag, you can create highly targeted cross-sells that change depending on the items in each
            customers’ cart.
          </p>
          <Quote class="hidden mt-8 sm:text-sm md:text-base sm:inline-flex">You're buying a tape dispenser...<br />Need some tape?</Quote>
        </div>
      </div>
      <div class="w-full max-w-md mt-8 sm:max-w-none sm:mt-0 sm:flex-1 sm:flex sm:justify-center">
        <Figure1 class="sm:w-3/4 sm:transform sm:-rotate-2" />
      </div>
      <Quote class="mt-8 text-left sm:hidden">You're buying a tape dispenser...<br />Need some tape?</Quote>
    </div>
    <div class="flex flex-col items-center sm:flex-row">
      <div class="w-full sm:flex-1 sm:flex sm:justify-center">
        <div class="flex flex-col items-center sm:text-left sm:items-start sm:w-10/12">
          <Sparkles />
          <h3 class="mt-4 text-2xl font-semibold sm:text-xl md:text-2xl lg:text-3xl">Customers will thank you</h3>
          <p class="max-w-md mt-4 text-gray-500 sm:text-sm md:text-base">
            Our variant editor makes it easy to review items and make changes — giving your customers a smooth checkout experience.
          </p>
        </div>
      </div>
      <div class="w-full max-w-md mt-8 sm:max-w-none sm:mt-0 sm:flex-1 sm:flex sm:justify-center">
        <Figure2 class="sm:w-3/4 sm:transform sm:rotate-2" />
      </div>
    </div>
    <div class="flex flex-col items-center">
      <Chart />
      <h3 class="mt-4 text-2xl font-semibold sm:text-4xl">Cart manager</h3>
      <p class="max-w-md mt-4 text-base text-gray-500">
        Create cross sells and track their performance in our easy-to-use Shopify embedded app.
      </p>
      <div class="w-full h-0 mt-8 bg-white rounded-lg shadow-md" style="padding-top: 60%" />
    </div>
    <div class="flex flex-col items-center">
      <h3 class="mt-4 text-3xl font-semibold sm:text-4xl">Try Bag</h3>
      <p class="mt-4 text-base text-gray-500">Streamline your checkout, grow your sales.</p>
      <router-link to="/join" class="mt-5">
        <Button text="Get early access" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header/Header.vue'
import Browser from '@/components/Browser/Browser.vue'
import Bolt from '@/icons/Bolt/Bolt.vue'
import Quote from '@/components/Quote/Quote.vue'
import Figure1 from '@/components/Figure1/Figure1.vue'
import Sparkles from '@/icons/Sparkles/Sparkles.vue'
import Figure2 from '@/components/Figure2/Figure2.vue'
import Button from '@/components/Button/Button.vue'
import Chart from '@/icons/Chart/Chart.vue'
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
    Chart
  }
})
</script>
