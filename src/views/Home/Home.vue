<template>
  <div class="grid gap-20 text-center">
    <Header />
    <div class="flex flex-col items-center px-5">
      <h1 class="text-3xl font-semibold leading-tight">Bag, a shopping cart<br />for sales growth</h1>
      <p class="max-w-xs mt-4 text-gray-500">
        Impress your customers with a smooth checkout experience and grow your sales at the same time.
      </p>
      <Button text="Get early access" class="mt-5" />
      <Browser class="w-full mt-16" />
    </div>
    <div class="flex flex-col items-center px-5">
      <Bolt class="text-blue-700" />
      <h3 class="mt-4 text-2xl font-semibold">A new way to grow sales</h3>
      <p class="mt-4 text-base text-gray-500">
        Sell more with smart cross sells. They’re highly targeted offers that change depending on the items in each customers' cart.
      </p>
      <Figure1 class="w-full mt-8" />
      <Quote class="inline-flex mt-8 text-left">You're buying a tape dispenser...<br />Need some tape?</Quote>
    </div>
    <div class="flex flex-col items-center px-5">
      <Sparkles class="text-blue-700" />
      <h3 class="mt-4 -mx-2 text-2xl font-semibold">Your customers will thank you</h3>
      <p class="mt-4 text-base text-gray-500">
        Give your customers a smooth checkout experience. Our variant editor makes it easy to review items and make changes.
      </p>
      <Figure2 class="w-full mt-8" />
    </div>
    <div class="flex flex-col items-center px-5">
      <Chart class="text-blue-700" />
      <h3 class="mt-4 text-2xl font-semibold">Cart manager</h3>
      <p class="mt-4 text-base text-gray-500">
        Create cross sells and track their performance in our easy-to-use Shopify embedded app.
      </p>
      <img class="w-full mt-8 rounded-md shadow-md" src="@/assets/img/admin.png" alt="Cart manager" />
    </div>
    <div class="flex flex-col items-center px-5">
      <Bag />
      <h3 class="mt-4 text-2xl font-semibold">Get early access</h3>
      <p class="mt-4 text-base text-gray-500">Help us build a tool that enhances<br />your Shopify experience.</p>
      <Button class="mt-5 mb-24" text="Get early access" />
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
