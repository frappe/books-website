<template>
  <div class="font-body antialiased">
    <header class="container flex items-baseline justify-between py-7">
      <g-link class="text-xl text-gray-900 font-bold" to="/">{{
        $static.metadata.siteName
      }}</g-link>
      <nav class="text-gray-800 text-sm">
        <g-link to="/docs">Documentation</g-link>
        <g-link class="ml-12" to="https://github.com/frappe/books">
          GitHub
        </g-link>
        <g-link class="ml-12" to="/about">About</g-link>
      </nav>
    </header>
    <slot />
    <footer class="py-24">
      <div class="container">
        <div class="flex justify-between">
          <div>
            <div class="text-xl font-bold">Frappe</div>
            <div class="mt-3 text-gray-700 text-sm">
              <p>
                D/324 Neelkanth Business Park,<br />
                Vidyavihar West,<br />
                Mumbai, Maharashtra - 400086, India
              </p>
              <p class="mt-5">+91 22 4897 0555</p>
              <p class="mt-3">hello@frappe.io</p>
            </div>
          </div>
          <div>
            <div class="font-semibold">Social</div>
            <ul class="text-gray-700 mt-5">
              <li class="mt-4"><a href="/blog">Blog</a></li>
              <li class="mt-4">
                <a href="https://forum.frappebooks.com">Forum</a>
              </li>
            </ul>
          </div>
          <div>
            <div class="font-semibold">Company</div>
            <ul class="text-gray-700 mt-5">
              <li class="mt-4"><a href="https://erpnext.com">ERPNext</a></li>
              <li class="mt-4"><a href="/team">Team</a></li>
              <li class="mt-4"><a href="/careers">Careers</a></li>
              <li class="mt-4"><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div class="text-sm text-gray-700">Find us on:</div>
            <ul class="flex mt-4">
              <li class="">
                <a href="https://www.facebook.com/ERPNext/">
                  <img class="h-5" src="../assets/facebook.svg" />
                </a>
              </li>
              <li class="ml-6">
                <a href="https://twitter.com/erpnext">
                  <img class="h-5" src="../assets/twitter.svg" />
                </a>
              </li>
              <li class="ml-6">
                <a href="https://medium.com/frapp%C3%A9-thoughts">
                  <img class="h-5" src="../assets/medium.svg" />
                </a>
              </li>
              <li class="ml-6">
                <a href="https://github.com/frappe">
                  <img class="h-5" src="../assets/github.svg" />
                </a>
              </li>
            </ul>
            <div class="mt-5 text-gray-700 text-sm">
              <p>
                © Frappe Technologies Pvt. Ltd.<br />
                Content licensed under CC-BY-SA 3.0.
              </p>
              <p>Read the terms of use.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
