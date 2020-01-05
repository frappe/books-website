<template>
  <Layout>
    <section class="relative">
      <div class="mt-16 mb-64 container">
        <div>
          <h1 class="font-extrabold text-5xl leading-tight">
            Free Desktop<br />
            Accounting Software<br />
            for Small Businesses
          </h1>
          <p class="mt-5 w-2/5 text-gray-700">
            Frappe Books is a desktop-based accounting application built for
            small businesses. It simplifies invoicing, billing, and accounting
            for freelancers and small business owners. Spend more time doing
            your business and less time keeping books.
          </p>
          <div class="mt-8">
            <Button class="bg-brand text-white">Download</Button>
          </div>
        </div>
      </div>
      <div class="absolute top-0 left-0 w-full pointer-events-none">
        <img
          class="w-1/2 ml-auto -mt-8 mr-8"
          src="../assets/books-hero-preview.svg"
        />
      </div>
    </section>
    <WhySection />
    <CardSection />
    <FeaturesSection />
  </Layout>
</template>

<script>
import WhySection from '../components/WhySection.vue';
import CardSection from '../components/CardSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    WhySection,
    CardSection,
    FeaturesSection
  }
};
</script>
