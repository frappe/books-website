<template>
  <div>
    <section class="bg-gray-100 py-32 md:py-48">
      <div class="container flex items-center">
        <div class="w-full md:w-1/2">
          <h2 class="font-extrabold text-3xl sm:text-5xl leading-tight">
            Why Frappe Books?
          </h2>
          <p class="mt-5 text-gray-700 leading-relaxed">
            Offline Desktop software is a rare breed these days. Offline
            Accounting software even more so. Existing solutions like Tally and
            GNUCash are either paid or lack in terms of UX. This is why we need
            Frappe Books.
          </p>
          <ul class="bullet-list text-gray-700 mt-6">
            <li class="mb-4">
              Local app, local database
            </li>
            <li class="mb-4">
              Simple and clean user interface
            </li>
            <li class="mb-4">
              Insightful Financial Reports
            </li>
            <li class="mb-4">
              Free and Open Source
            </li>
          </ul>
        </div>
        <div class="hidden md:block w-1/2">
          <GirlUsingLaptop class="w-4/5 ml-auto" />
        </div>
      </div>
    </section>
    <section class="py-32 md:py-48">
      <div class="container flex items-center">
        <div class="hidden md:block w-1/2">
          <BoyBesideLaptop class="w-4/5" />
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="font-extrabold text-3xl sm:text-5xl leading-tight">
            Why Desktop?
          </h2>
          <p class="mt-5 text-gray-700 leading-relaxed">
            Cloud apps compromise the ownership of your data. All your data must
            go through a server and you are bound by limitations set by the
            server. Pricing could change anytime, and you don’t have the choice
            to use an older version. With traditional desktop apps, you have
            much more control over your data and you can keep using a version
            that works for you.
          </p>
          <ul class="bullet-list text-gray-700 mt-6">
            <li class="mb-4">No hidden costs</li>
            <li class="mb-4">No cloud, no hosting</li>
            <li class="mb-4">Own your data</li>
            <li class="mb-4">Privacy by default</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.bullet-list li {
  display: flex;
  align-items: center;
}

.bullet-list li::before {
  content: url('../assets/check-circle.svg');
  display: inline-block;
  width: theme('spacing.5');
  height: theme('spacing.5');
  margin-right: theme('spacing.2');
}
</style>
