// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/style.css');

import DefaultLayout from '~/layouts/Default.vue';
import DocsLayout from '~/layouts/DocsLayout.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Button from './components/Button.vue';
import CheckCircle from './components/CheckCircle.vue';
import GirlUsingLaptop from './components/GirlUsingLaptop.vue';
import BoyBesideLaptop from './components/BoyBesideLaptop.vue';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('DocsLayout', DocsLayout);
  Vue.component('Header', Header);
  Vue.component('Footer', Footer);
  Vue.component('Button', Button);
  Vue.component('CheckCircle', CheckCircle);
  Vue.component('GirlUsingLaptop', GirlUsingLaptop);
  Vue.component('BoyBesideLaptop', BoyBesideLaptop);
}
