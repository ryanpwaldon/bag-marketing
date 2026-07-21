<template>
  <div class="flex flex-col items-center justify-center w-full pt-16 space-y-6 sm:h-screen sm:pt-0">
    <div class="relative flex flex-col w-full max-w-full bg-white rounded shadow sm:w-96">
      <div class="grid gap-1 p-6 text-center sm:py-6 sm:px-8">
        <h1 class="text-lg font-medium">Demo unavailable</h1>
        <p class="m-auto text-sm text-gray-500" style="max-width: 230px">
          Bag is no longer available on the Shopify App Store.
        </p>
        <a
          href="https://web.archive.org/web/20211019140256/https://apps.shopify.com/bag"
          target="_blank"
          rel="noopener noreferrer"
          class="relative flex items-center justify-center w-full px-4 py-2 mt-6 text-sm font-medium leading-5 text-white bg-gray-900 border border-gray-700 rounded-md shadow transition hover:bg-gray-800 focus:bg-gray-700 focus:outline-none"
        >
          View archived Shopify listing →
        </a>
      </div>
    </div>
    <router-link to="/" class="text-sm text-gray-500 transition-colors hover:text-gray-900 focus:text-gray-900">
      ← Return home
    </router-link>
  </div>
</template>
