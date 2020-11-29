<template>
  <div class="grid max-w-5xl gap-20 pb-24 m-auto text-center sm:gap-32 sm:pb-52">
    <Header />
    <div class="flex flex-col items-center px-5">
      <h1 class="text-3xl font-semibold leading-tight sm:leading-tight sm:text-5xl">Bag, a shopping cart<br />for sales growth</h1>
      <p class="max-w-xs mt-4 text-gray-500 sm:text-xl sm:max-w-lg">
        Impress your customers with a smooth checkout experience and grow your sales at the same time.
      </p>
      <Button text="Get early access" class="mt-5" />
      <Browser class="w-full mt-16" />
    </div>
    <div class="flex flex-col items-center px-5 m-auto sm:flex-row-reverse">
      <div class="w-full sm:flex-1 sm:flex sm:justify-center">
        <div class="flex flex-col items-center sm:text-left sm:items-start sm:w-10/12">
          <Bolt />
          <h3 class="mt-4 text-2xl font-semibold sm:text-3xl">A new way to<br />grow your sales</h3>
          <p class="mt-4 text-base text-gray-500">
            Sell more with smart cross sells. They’re highly targeted offers that change depending on the items in each customers' cart.
          </p>
          <Quote class="inline-flex mt-8 text-left">You're buying a tape dispenser...<br />Need some tape?</Quote>
        </div>
      </div>
      <div class="w-full mt-8 sm:mt-0 sm:flex-1 sm:flex sm:justify-center">
        <Figure1 class="sm:w-3/4 sm:transform sm:-rotate-2" />
      </div>
    </div>
    <div class="flex flex-col items-center px-5 m-auto sm:flex-row">
      <div class="w-full sm:flex-1 sm:flex sm:justify-center">
        <div class="flex flex-col items-center sm:text-left sm:items-start sm:w-10/12">
          <Sparkles />
          <h3 class="mt-4 text-2xl font-semibold sm:text-3xl">Your customers<br />will thank you</h3>
          <p class="mt-4 text-base text-gray-500">
            Give your customers a smooth checkout experience. Our variant editor makes it easy to review items and make changes.
          </p>
        </div>
      </div>
      <div class="w-full mt-8 sm:mt-0 sm:flex-1 sm:flex sm:justify-center">
        <Figure2 class="sm:w-3/4 sm:transform sm:rotate-2" />
      </div>
    </div>
    <div class="flex flex-col items-center px-5">
      <Chart />
      <h3 class="mt-4 text-2xl font-semibold sm:text-3xl">Cart manager</h3>
      <p class="mt-4 text-base text-gray-500">
        Create cross sells and track their performance in our easy-to-use Shopify embedded app.
      </p>
      <img class="w-full mt-8 rounded-md shadow-md" src="@/assets/img/admin.png" alt="Cart manager" />
    </div>
    <div class="flex flex-col items-center">
      <Bag />
      <h3 class="mt-4 text-2xl font-semibold sm:text-4xl">Get early access</h3>
      <p class="mt-4 text-base text-gray-500">Help us build the tool to<br />enhance your ecommerce.</p>
      <Button class="mt-5" text="Get early access" />
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
import Bag from '@/icons/Bag/Bag.vue'
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
    Bag
  }
})
</script>
