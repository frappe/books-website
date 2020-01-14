<template>
  <DocsLayout>
    <h1>{{ $page.documentation.title }}</h1>
    <p class="text-lg leading-relaxed">{{ $page.documentation.intro }}</p>
    <VueRemarkContent />
  </DocsLayout>
</template>

<page-query>
query Documentation ($id: ID!) {
  documentation(id: $id) {
    title
    intro
  }
}
</page-query>
