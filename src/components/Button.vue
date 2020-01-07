<template>
  <a
    class="px-6 py-3 rounded-lg cursor-pointer inline-block"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </a>
</template>
