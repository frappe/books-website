<template>
  <div class="font-body antialiased">
    <header class="container flex items-baseline justify-between py-7">
      <g-link class="text-xl text-gray-900 font-bold" to="/">
        {{ $static.metadata.siteName }}
      </g-link>
      <nav class="text-gray-800 text-sm">
        <g-link to="/docs">Documentation</g-link>
        <g-link class="ml-12" to="https://github.com/frappe/books">
          GitHub
        </g-link>
        <g-link class="ml-12" to="/about">About</g-link>
      </nav>
    </header>
    <slot />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
