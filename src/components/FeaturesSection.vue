<template>
  <section class="bg-gray-100 py-40">
    <div class="relative">
      <div class="container">
        <h2 class="text-4xl font-extrabold">Features</h2>
        <div class="flex mt-6">
          <div class="w-2/5">
            <div
              class="flex items-center py-4 px-5 rounded-lg cursor-pointer"
              :class="{ 'bg-white shadow-xl': active === feature }"
              v-for="feature in features"
              :key="feature.title"
              @click="active = feature"
            >
              <img class="w-7 h-7 mr-5" :src="feature.icon" />
              <div>
                <h3 class="text-xl font-semibold">{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-1/2 absolute right-0 top-0 mr-16 mt-12 shadow-xl rounded-lg"
      >
        <img v-if="active && active.screenshot" :src="active.screenshot" />
      </div>
    </div>
    <div class="mt-48 container">
      <h2 class="text-3xl font-extrabold">More Features</h2>
      <div class="mt-6 flex flex-wrap -mx-4">
        <div
          class="w-1/4 px-4 mb-8"
          v-for="feature in moreFeatures"
          :key="feature.title"
        >
          <div class="pt-12 pb-8 px-6 bg-white rounded-lg h-full cursor-pointer hover:shadow-xl">
            <img class="h-8" :src="feature.icon" />
            <h3 class="mt-5 text-xl font-semibold">{{ feature.title }}</h3>
            <p class="mt-3 text-sm text-gray-700">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import dashboardIcon from '../assets/dashboard.svg';
import doubleEntryAccountingIcon from '../assets/double-entry-accounting.svg';
import invoicingIcon from '../assets/invoicing.svg';
import billingIcon from '../assets/billing.svg';
import paymentsIcon from '../assets/payments.svg';
import invoicingScreenshot from '../assets/invoicing-screenshot.png';
import journalEntriesIcon from '../assets/journal-entries.svg';
import invoiceTemplatesIcon from '../assets/invoice-templates.svg';
import worksOfflineIcon from '../assets/works-offline.svg';
import privacyIcon from '../assets/privacy.svg';
import portableIcon from '../assets/portable.svg';
import financialReportsIcon from '../assets/financial-reports.svg';
import multiCurrencyIcon from '../assets/multi-currency.svg';
import openSourceIcon from '../assets/open-source.svg';

export default {
  name: 'FeaturesSection',
  data() {
    return {
      active: null,
      features: [
        {
          title: 'Dashboard',
          description:
            'Analyze your cash flow, net profit or loss all from a single screen',
          icon: dashboardIcon
        },
        {
          title: 'Double-entry accounting',
          description:
            'Frappe Books uses the double-entry accounting system to record your…',
          icon: doubleEntryAccountingIcon
        },
        {
          title: 'Invoicing',
          description:
            'Create professional invoices, generate beautiful PDFs and send them to...',
          icon: invoicingIcon,
          screenshot: invoicingScreenshot
        },
        {
          title: 'Billing',
          description:
            'Keep track of your expenses, generate bills and send them to your...',
          icon: billingIcon
        },
        {
          title: 'Payments',
          description:
            'Record payments against open invoices or bills and keep...',
          icon: paymentsIcon
        }
      ],
      moreFeatures: [
        {
          title: 'Journal Entries',
          icon: journalEntriesIcon,
          description:
            'Record accounting entries other than sales or purchase transactions. Use them for...'
        },
        {
          title: 'Invoice Templates',
          icon: invoiceTemplatesIcon,
          description:
            'Pick from three beautiful Invoice templates that you can further customize with the...'
        },
        {
          title: 'Works Offline',
          icon: worksOfflineIcon,
          description:
            'Frappe Books works like any other desktop software. When you open it, it loads a database...'
        },
        {
          title: 'Privacy by default',
          icon: privacyIcon,
          description:
            'Since FA uses local files as it’s database there is no need to worry about Privacy. You get it for free.'
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
            'Frappe Books comes with standard financial reports like Profit and Loss Statement...'
        },
        {
          title: 'Multi-currency',
          icon: multiCurrencyIcon,
          description:
            'Record your invoices in your customer’s currency and Frappe Books will convert...'
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
