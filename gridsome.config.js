const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const postcssNested = require('postcss-nested');

const postcssPlugins = [postcssNested(), tailwind('./tailwind.config.js')];

if (process.env.NODE_ENV === 'production') {
  postcssPlugins.push(purgecss());
}

module.exports = {
  siteName: 'Frappe Books',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Documentation', // Required
        baseDir: './docs', // Where .md files are located
        pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/DocPage.vue'
      }
    },
    {
      use: 'gridsome-plugin-svg',
      options: {
        goesBothWays: true
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-8911157-25'
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }
};
