<template>
  <section class="bg-gray-100 py-32 lg:py-40">
    <div class="relative">
      <div class="container">
        <h2 class="text-3xl lg:text-4xl font-extrabold">Features</h2>
        <div class="lg:hidden">
          <div class="mt-3 flex items-center relative">
            <select
              class="block appearance-none w-full px-4 py-3 bg-white border rounded-lg focus:outline-none focus:shadow-outline shadow"
              @change="e => setActive(features[e.target.value])"
            >
              <option
                v-for="(feature, i) in features"
                :value="i"
                :key="feature.title"
                :selected="active === feature"
              >
                {{ feature.title }}
              </option>
            </select>
            <ChevronDownIcon class="w-5 text-gray-500 absolute right-0 mr-4" />
          </div>
          <p v-if="active" class="mt-4 text-gray-700">
            {{ active.description }}
          </p>
        </div>
        <div class="mt-6 hidden lg:flex">
          <div class="w-2/5">
            <div
              class="flex py-5 px-5 rounded-lg cursor-pointer"
              :class="{ 'bg-white shadow': active === feature }"
              v-for="feature in features"
              :key="feature.title"
              @click="setActive(feature)"
            >
              <component
                class="w-7 h-7 mr-5 mt-1 flex-shrink-0"
                :is="feature.icon"
                :style="{
                  '--color-light': active === feature ? '#AFD3F2' : '#B7BFC6',
                  '--color-dark': active === feature ? '#2490EF' : '#415668'
                }"
              />
              <div>
                <h3 class="text-xl font-semibold">{{ feature.title }}</h3>
                <p
                  class="text-gray-700 text-sm mt-2"
                  v-show="active === feature"
                >
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div
          class="feature-preview max-w-3xl lg:absolute mt-8 shadow-lg rounded-lg"
        >
          <g-image
            v-if="active && active.screenshot"
            :src="active.screenshot"
          />
        </div>
      </div>
    </div>
    <div class="mt-48 container">
      <h2 class="text-3xl font-extrabold">More Features</h2>
      <div class="mt-6 flex flex-wrap -mx-4">
        <div
          class="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8"
          v-for="feature in moreFeatures"
          :key="feature.title"
        >
          <g-link
            class="block pt-12 pb-8 px-6 bg-white rounded-lg h-full cursor-pointer hover:shadow-xl"
            :to="feature.link"
          >
            <img class="h-8" :src="feature.icon" />
            <h3 class="mt-5 text-xl font-semibold">{{ feature.title }}</h3>
            <p class="mt-3 text-sm text-gray-700">{{ feature.description }}</p>
          </g-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dashboardIcon from '../assets/dashboard.svg?inline';
import doubleEntryAccountingIcon from '../assets/double-entry-accounting.svg?inline';
import invoicingIcon from '../assets/invoicing.svg?inline';
import billingIcon from '../assets/billing.svg?inline';
import paymentsIcon from '../assets/payments.svg?inline';

import journalEntriesIcon from '../assets/journal-entries.svg';
import invoiceTemplatesIcon from '../assets/invoice-templates.svg';
import worksOfflineIcon from '../assets/works-offline.svg';
import privacyIcon from '../assets/privacy.svg';
import portableIcon from '../assets/portable.svg';
import financialReportsIcon from '../assets/financial-reports.svg';
import multiCurrencyIcon from '../assets/multi-currency.svg';
import openSourceIcon from '../assets/open-source.svg';

import { ChevronDownIcon } from 'vue-feather-icons';

import featureDashboard from '../assets/feature-dashboard.png';
import featureInvoicing from '../assets/feature-invoicing.png';
import featureDoubleEntry from '../assets/feature-double-entry.webp';
import featureBilling from '../assets/feature-billing.webp';
import featurePayments from '../assets/feature-payments.webp';

export default {
  name: 'FeaturesSection',
  components: {
    ChevronDownIcon
  },
  mounted() {
    this.setActive(this.features[1]);
  },
  methods: {
    setActive(feature) {
      this.active = feature;
    }
  },
  data() {
    return {
      active: null,
      features: [
        {
          title: 'Dashboard',
          description:
            'Analyze your cash flow, net profit or loss, unpaid amount against your invoices all from a single screen.',
          icon: dashboardIcon,
          screenshot: featureDashboard
        },
        {
          title: 'Invoicing',
          description:
            'Create professional invoices, generate beautiful PDFs and send them to your customers.',
          icon: invoicingIcon,
          screenshot: featureInvoicing
        },
        {
          title: 'Billing',
          description:
            'Keep track of your expenses, generate bills and send them to your suppliers.',
          icon: billingIcon,
          screenshot: featureBilling
        },
        {
          title: 'Payments',
          description:
            'Record payments against open invoices to keep track of your receivables and payables.',
          icon: paymentsIcon,
          screenshot: featurePayments
        },
        {
          title: 'Double-entry accounting',
          description:
            'We use the recommended double-entry accounting system to record your income and expenses.',
          icon: doubleEntryAccountingIcon,
          screenshot: featureDoubleEntry
        }
      ],
      moreFeatures: [
        {
          title: 'Journal Entries',
          icon: journalEntriesIcon,
          description:
            'Record ad-hoc accounting entries for entering expenses, opening entries, and bank payments.'
        },
        {
          title: 'Invoice Templates',
          icon: invoiceTemplatesIcon,
          description:
            'Beautiful Invoice templates that you can further customize with the color and logo of your brand.'
        },
        {
          title: 'Works Offline',
          icon: worksOfflineIcon,
          description:
            'Frappe Books uses a local file from your computer and when you create invoices, it saves them on your local machine.'
        },
        {
          title: 'Privacy by default',
          icon: privacyIcon,
          description:
            'Frappe Books is a local app, which means you get data ownership and privacy for free.'
        },
        {
          title: 'Portable',
          icon: portableIcon,
          description:
            'Frappe Books uses the lightweight SQLite database which uses simple files to store their data.'
        },
        {
          title: 'Financial Reports',
          icon: financialReportsIcon,
          description:
            'Frappe Books comes with standard financial reports like Profit and Loss Statement, Trial Balance and Balance Sheet.'
        },
        {
          title: 'Multi-currency',
          icon: multiCurrencyIcon,
          description:
            'Record your invoices in your customer’s currency and Frappe Books will convert them in your currency.'
        },
        {
          title: 'Open Source',
          icon: openSourceIcon,
          description:
            'Frappe Books is free and open-source software. Help us improve it by reporting issues or fixing them on GitHub.'
        }
      ]
    };
  }
};
</script>

<style scoped>
@screen lg {
  .feature-preview {
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
