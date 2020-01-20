<template>
  <Layout>
    <div class="container">
      <div class="py-20">
        <h1 class="font-semibold text-2xl">Download Counts</h1>

        <div class="mt-6 w-1/2" v-for="release in releases">
          <div>
            <div class="flex justify-between items-center py-2">
              <h2 class="font-bold">
                {{ release.name }}
              </h2>
              <span class="font-bold">
                {{ getTotalCount(release) }}
              </span>
            </div>
            <div class="flex justify-between items-center py-2">
              <div>
                macOS
              </div>
              <span>
                {{ getDownloadCount(release.assets, 'macOS') }}
              </span>
            </div>
            <div class="flex justify-between items-center py-2">
              <div>
                Linux
              </div>
              <span>
                {{ getDownloadCount(release.assets, 'Linux') }}
              </span>
            </div>
            <div class="flex justify-between items-center py-2">
              <div>
                Windows
              </div>
              <span>
                {{ getDownloadCount(release.assets, 'Windows') }}
              </span>
            </div>
          </div>
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
      return platformAssets.reduce((sum, asset) => {
        return sum + asset.download_count;
      }, 0);
    },
    getTotalCount(release) {
      return (
        this.getDownloadCount(release.assets, 'macOS') +
        this.getDownloadCount(release.assets, 'Linux') +
        this.getDownloadCount(release.assets, 'Windows')
      );
    }
  }
};
</script>
