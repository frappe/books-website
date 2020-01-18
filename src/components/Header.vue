<template>
  <header :class="{ 'border-b': navOpen }">
    <div class="container sm:flex sm:items-baseline justify-between py-7">
      <div class="flex-1 flex justify-between">
        <g-link class="text-xl text-gray-900 font-bold" to="/">
          Frappe Books
        </g-link>
        <button
          class="sm:hidden focus:outline-none focus:shadow-outline"
          @click="navOpen = !navOpen"
        >
          <MenuIcon v-show="!navOpen" />
          <XIcon v-show="navOpen" />
        </button>
      </div>
      <nav
        class="sm:block mt-4 sm:mt-0 flex flex-col text-gray-800 text-sm"
        :class="{ hidden: !navOpen }"
      >
        <g-link class="py-2" to="/docs">Documentation</g-link>
        <g-link class="ml-0 sm:ml-12 py-2" to="https://github.com/frappe/books">
          GitHub
        </g-link>
        <!-- <g-link class="ml-0 sm:ml-12 py-2" to="/about">About</g-link> -->
      </nav>
    </div>
  </header>
</template>

<script>
import { MenuIcon, XIcon } from 'vue-feather-icons';

export default {
  name: 'Header',
  data: () => ({ navOpen: false }),
  components: {
    MenuIcon,
    XIcon
  }
};
</script>
