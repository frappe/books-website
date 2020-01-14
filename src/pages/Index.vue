<template>
  <Layout>
    <section class="relative">
      <div class="mt-8 sm:mt-16 mb-32 md:mb-64 container">
        <div>
          <h1 class="font-extrabold text-3xl sm:text-5xl leading-tight">
            Free Desktop<br />
            Accounting Software<br />
            for Small Businesses
          </h1>
          <p class="mt-5 w-full md:w-2/5 text-gray-700 leading-relaxed">
            Frappe Books simplifies invoicing, billing, and accounting for
            freelancers and small business owners. Spend more time doing your
            business and less time keeping books.
          </p>
          <DownloadButton class="mt-8" />
        </div>
      </div>
      <div
        class="hidden md:block hero absolute top-0 w-full pointer-events-none max-w-3xl -mt-8"
      >
        <BooksHero />
      </div>
    </section>
    <WhySection />
    <CardSection />
    <FeaturesSection />
    <CTASection />
  </Layout>
</template>

<script>
import WhySection from '../components/WhySection.vue';
import CardSection from '../components/CardSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import CTASection from '../components/CTASection.vue';
import DownloadButton from '../components/DownloadButton.vue';
import BooksHero from '@/assets/books-hero-preview.svg?inline';

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    WhySection,
    CardSection,
    FeaturesSection,
    CTASection,
    DownloadButton,
    BooksHero
  }
};
</script>

<style scoped>
@screen md {
  .hero {
    left: 60%;
  }
}

@screen lg {
  .hero {
    left: 50%;
  }
}
</style>
