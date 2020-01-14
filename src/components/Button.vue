<template>
  <a
    class="px-5 py-3 rounded-lg cursor-pointer inline-block"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </a>
</template>
