<template>
  <section class="bg-gray-100 pb-20">
    <div class="container">
      <div class="w-full bg-gray-900 rounded-lg text-center py-20 px-8">
        <h1
          class="font-extrabold text-3xl sm:text-5xl leading-tight text-white"
        >
          Free Desktop Accounting <br />Software for Small Businesses
        </h1>
        <p class="mt-5 w-full lg:w-1/2 mx-auto text-white leading-relaxed">
          Frappe Books simplifies invoicing, billing, and accounting for
          freelancers and small business owners. Spend more time doing your
          business and less time keeping books.
        </p>
        <DownloadButton class="mt-8 text-white" dark-background />
      </div>
    </div>
  </section>
</template>

<script>
import DownloadButton from '@/components/DownloadButton';

export default {
  components: {
    DownloadButton
  }
};
</script>

<style></style>
