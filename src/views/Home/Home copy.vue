<template>
  <div class="relative flex items-start min-h-screen overflow-hidden bg-gray-900 lg:bg-gray-900">
    <div
      class="relative flex-shrink-0 min-h-screen bg-no-repeat lg:min-w-3xl xl:min-w-4xl lg:flex lg:items-center lg:justify-center lg:w-3/5 lg:py-20 lg:pl-8 lg:pr-8"
      :style="`background-image: url(${require('@/assets/img/angled-background.svg')}); background-size: 100% auto; background-position: -5px -5px;`"
    >
      <div>
        <div class="px-6 pt-8 pb-12 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none lg:pt-0 lg:pb-16">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-6 lg:h-8 xl:h-9" src="@/assets/img/logo.svg" alt="Checkout" />
            </div>
            <div>
              <a href="https://www.tailwindui.com/login" class="text-sm font-semibold text-gray-900 focus:outline-none focus:underline">
                Login &rarr;
              </a>
            </div>
          </div>
        </div>
        <div class="px-6 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none">
          <p class="text-sm font-semibold tracking-wider text-gray-400 uppercase">
            Arment jarmor
          </p>
          <h1 class="mt-3 text-3xl font-semibold leading-9 text-gray-900 font-display sm:mt-6 sm:text-4xl sm:leading-10 xl:text-5xl xl:leading-none">
            Lorem ispum dolor sit
            <br class="hidden sm:inline" />
            <span class="text-blue-500">
              Amet occaecat non proident.
            </span>
          </h1>
          <p class="mt-2 text-lg leading-7 text-gray-400 sm:mt-3 sm:text-xl sm:max-w-xl xl:mt-4 xl:text-2xl xl:max-w-2xl">
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="mt-6 sm:flex sm:mt-8 xl:mt-12">
            <a
              href="https://www.tailwindui.com/components"
              class="inline-flex items-center justify-center w-full px-6 py-3 text-base font-semibold leading-6 text-gray-900 transition duration-150 ease-in-out bg-white border border-transparent rounded-md shadow-sm sm:w-auto hover:text-gray-600 focus:outline-none focus:text-gray-600 xl:text-lg xl:py-4"
            >
              Explore the preview
            </a>
            <a
              href="https://www.tailwindui.com/pricing"
              class="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-base font-semibold leading-6 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md shadow-sm sm:ml-4 sm:mt-0 sm:w-auto hover:bg-gray-700 focus:outline-none focus:bg-gray-700 xl:text-lg xl:py-4"
            >
              View the demo &rarr;
            </a>
          </div>
        </div>
        <div class="relative h-64 mt-8 overflow-hidden bg-gray-300 sm:mt-12 lg:hidden"></div>
        <div class="px-6 py-8 sm:pt-12 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-full lg:py-0 lg:pt-24">
          <p class="text-sm font-semibold tracking-wider text-gray-400 uppercase">Designed and developed by</p>
          <div class="mt-4 sm:flex">
            <a href="https://twitter.com/adamwathan" class="flex items-center no-underline">
              <div class="flex-shrink-0">
                <img class="w-12 h-12 border-2 border-white rounded-full" src="https://www.tailwindui.com/img/adam.jpg" alt="" />
              </div>
              <div class="ml-3">
                <p class="font-semibold leading-tight text-gray-900">Adam Wathan</p>
                <p class="text-sm leading-tight text-gray-500">Creator of Tailwind CSS</p>
              </div>
            </a>
            <a href="https://twitter.com/steveschoger" class="flex items-center mt-6 no-underline sm:mt-0 sm:ml-12">
              <div class="flex-shrink-0">
                <img class="w-12 h-12 border-2 border-white rounded-full" src="https://www.tailwindui.com/img/steve.jpg" alt="" />
              </div>
              <div class="ml-3">
                <p class="font-semibold leading-tight text-gray-900">Steve Schoger</p>
                <p class="text-sm leading-tight text-gray-500">Author of Refactoring UI</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="relative w-full h-full" style="perspective: 1000px">
      <div class="absolute flex items-center justify-center w-full h-full p-6">
        <img class="max-w-full max-h-full transform -skew-x-6" src="@/assets/img/cart-mockup.png" alt="Checkout" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>
