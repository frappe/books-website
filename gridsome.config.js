const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

const postcssPlugins = [tailwind('./tailwind.config.js')];

if (process.env.NODE_ENV === 'production') {
  postcssPlugins.push(purgecss());
}

module.exports = {
  siteName: 'Frappe Books',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
