<template>
  <div class="font-body antialiased">
    <header class="py-7 border-b sticky bg-white top-0 z-10">
      <div class="container flex items-baseline justify-between ">
        <g-link class="text-xl text-gray-900 font-bold" to="/">
          {{ $static.metadata.siteName }}
        </g-link>
        <nav class="text-gray-800 text-sm">
          <g-link to="/docs">Documentation</g-link>
          <g-link class="ml-12" to="https://github.com/frappe/books">
            GitHub
          </g-link>
          <g-link class="ml-12" to="/about">About</g-link>
        </nav>
      </div>
    </header>
    <div class="container flex">
      <aside class="w-64 pr-4 pl-1 py-4 border-r">
        <g-link
          exact
          class="block leading-relaxed py-1 text-sm hover:text-brand"
          to="/docs"
        >
          Home
        </g-link>
        <template v-if="links" v-for="(group, i1) in links">
          <h3
            class="font-bold mt-6 mb-4 uppercase text-sm tracking-wider"
            :key="`title-${i1}`"
          >
            {{ group.title }}
          </h3>
          <template v-for="(item, i2) in group.items">
            <g-link
              :exact="item.link == '/docs/'"
              class="block leading-relaxed py-1 text-sm hover:text-brand"
              :to="item.link"
              :key="`link-${i1}-${i2}`"
            >
              {{ item.title }}
            </g-link>
          </template>
        </template>
      </aside>
      <main class="markdown-content py-8 px-16 flex-1">
        <slot />
        <div class="mt-16 mb-5">
          <a :href="editLink" target="_blank" class="text-sm">
            <span>Edit this page on GitHub</span>
          </a>
        </div>
        <nav class="flex justify-between border-t pt-5">
          <div class="text-sm">
            <g-link
              v-if="previousPage"
              exact
              class="px-4 py-2 border rounded-lg inline-block"
              :to="previousPage.link"
            >
              &larr; {{ previousPage.title }}
            </g-link>
          </div>
          <div class="text-sm">
            <g-link
              v-if="nextPage"
              exact
              class="px-4 py-2 border rounded-lg inline-block"
              :to="nextPage.link"
            >
              {{ nextPage.title }} &rarr;
            </g-link>
          </div>
        </nav>
      </main>
    </div>
    <Footer class="border-t" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import links from '@/../docs/doc-links.yaml';

export default {
  name: 'DocsLayout',
  data: () => ({ links }),
  computed: {
    currentPath() {
      return this.$route.matched[0].path;
    },
    editLink() {
      let path = this.currentPath;
      if ((path.match(new RegExp('/', 'g')) || []).length == 1) {
        path = path + '/index';
      }
      return `https://github.com/frappe/books-website/blob/master${path}.md`;
    },
    items() {
      return this.links.reduce(
        (acc, group) => (acc.push(...group.items), acc),
        []
      );
    },
    currentIndex() {
      return this.items.findIndex(item => {
        return (
          item.link.replace(/\/$/, '') === this.$route.path.replace(/\/$/, '')
        );
      });
    },
    nextPage() {
      return this.items[this.currentIndex + 1];
    },
    previousPage() {
      return this.items[this.currentIndex - 1];
    }
  }
};
</script>

<style>
.active--exact {
  color: theme('colors.brand');
  font-weight: theme('fontWeight.bold');
}

.markdown-content {
  h1 {
    font-size: theme('fontSize.3xl');
    font-weight: theme('fontWeight.extrabold');
    margin-bottom: theme('spacing.7');
  }

  h2 {
    font-size: theme('fontSize.xl');
    font-weight: theme('fontWeight.extrabold');
    margin-top: theme('spacing.10');
    margin-bottom: theme('spacing.5');
  }

  h3 {
    font-size: theme('fontSize.lg');
    font-weight: theme('fontWeight.extrabold');
    margin-top: theme('spacing.10');
    margin-bottom: theme('spacing.5');
  }

  p {
    margin-bottom: theme('spacing.4');
  }

  ol {
    margin-left: theme('spacing.6');
    list-style-type: decimal;
  }

  ul {
    margin-left: theme('spacing.6');
    list-style-type: disc;
  }

  li {
    margin-bottom: theme('spacing.4');
  }

  a {
    color: theme('colors.brand');
    font-weight: theme('fontWeight.medium');
  }
}
</style>
