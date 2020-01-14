<template>
  <div class="font-body antialiased">
    <Header class="border-b" />
    <div class="container flex flex-col md:flex-row">
      <aside class="w-full md:w-64 pr-4 pl-1 py-8 md:border-r order-1 md:order-none">
        <h2 class="md:hidden font-bold text-xl">Table of Contents</h2>
        <g-link
          exact
          class="leading-relaxed py-1 text-sm hover:text-brand hidden md:block"
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
      <main class="markdown-content py-8 px-0 md:px-16 flex-1">
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

<style scoped>
.active--exact {
  color: theme('colors.brand');
  font-weight: theme('fontWeight.bold');
}
</style>
