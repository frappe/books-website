<template>
  <Layout>
    <div class="container">
      <div class="py-20">
        <h1 class="font-semibold text-2xl">Download Counts</h1>

        <div class="w-full overflow-auto">
          <table
            class="text-sm text-gray-900 border-l border-r mt-6 table-fixed border-collapse"
            v-if="releases.length"
          >
            <thead>
              <tr class="text-right bg-gray-100">
                <th class="text-left border-t border-b px-4 py-4 w-1/5">
                  Release
                </th>
                <th
                  class="border-t border-b px-4 py-4 w-1/5"
                  v-for="platform in ['macOS', 'Linux', 'Windows']"
                >
                  {{ platform }}
                </th>
                <th class="border-t border-b px-4 py-4 w-1/5">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-right" v-for="release in releases">
                <td
                  class="text-left whitespace-no-wrap border-t border-b px-4 py-4"
                >
                  {{ release.name }}
                </td>
                <td
                  class="border-t border-b px-4 py-4"
                  v-for="platform in ['macOS', 'Linux', 'Windows']"
                >
                  {{ getDownloadCount(release.assets, platform) }}
                </td>
                <th class="border-t border-b px-4 py-4">
                  {{ getTotalCount(release) }}
                </th>
              </tr>
            </tbody>
            <tfoot>
              <tr class="text-right bg-gray-100">
                <th class="border-t border-b px-4 py-4"></th>
                <th
                  class="border-t border-b px-4 py-4"
                  v-for="platform in ['macOS', 'Linux', 'Windows']"
                >
                  {{ getTotalCountByPlatform(platform) }}
                </th>
                <th class="border-t border-b px-4 py-4">
                  {{ getGrandTotal() }}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'Stats',
  data: () => ({ releases: [] }),
  async mounted() {
    if (this.$isServer) {
      return;
    }
    let response = await fetch(
      'https://api.github.com/repos/frappe/books/releases'
    );
    this.releases = await response.json();
    this.releases = this.releases.filter(
      release => !release.name.includes('Frappe Accounting')
    );
  },
  methods: {
    getDownloadCount(assets, platform) {
      let filterFunction = null;
      if (platform === 'macOS') {
        filterFunction = asset =>
          asset.name.endsWith('mac.zip') || asset.name.endsWith('.dmg');
      }
      if (platform === 'Linux') {
        filterFunction = asset => asset.name.endsWith('.AppImage');
      }
      if (platform === 'Windows') {
        filterFunction = asset => asset.name.endsWith('.exe');
      }
      let platformAssets = assets.filter(filterFunction);
      return platformAssets.reduce(
        (sum, asset) => sum + asset.download_count,
        0
      );
    },
    getTotalCountByPlatform(platform) {
      return this.releases.reduce(
        (sum, release) => sum + this.getDownloadCount(release.assets, platform),
        0
      );
    },
    getTotalCount(release) {
      return (
        this.getDownloadCount(release.assets, 'macOS') +
        this.getDownloadCount(release.assets, 'Linux') +
        this.getDownloadCount(release.assets, 'Windows')
      );
    },
    getGrandTotal() {
      return this.releases.reduce(
        (sum, release) => sum + this.getTotalCount(release),
        0
      );
    }
  }
};
</script>
