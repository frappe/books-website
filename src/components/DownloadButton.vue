<template>
  <div>
    <Button
      v-if="$isServer"
      class="bg-brand text-white font-semibold"
      :href="fallbackDownloadLink"
    >
      Download
    </Button>
    <Button
      v-else
      class="bg-brand text-white font-semibold inline-flex items-center"
      :href="getDownloadLink(platform)"
    >
      Download for {{ platform }}
      <DownloadIcon class="ml-6 w-5 h-5" />
    </Button>
    <div
      class="mt-2 text-xs"
      v-if="!$isServer"
      :class="{ 'text-gray-700': !darkBackground }"
    >
      Also available for
      <a class="hover:underline" :href="getDownloadLink(otherPlatforms[0])">
        {{ otherPlatforms[0] }}
      </a>
      and
      <a class="hover:underline" :href="getDownloadLink(otherPlatforms[1])">
        {{ otherPlatforms[1] }}
      </a>
    </div>
  </div>
</template>

<script>
import { guessPlatform } from '../utils';
import { DownloadIcon } from 'vue-feather-icons';

export default {
  name: 'DownloadButton',
  props: {
    darkBackground: {
      type: Boolean
    }
  },
  components: {
    DownloadIcon
  },
  data() {
    return {
      platforms: ['macOS', 'Windows', 'Linux'],
      platformDownloadLinks: null,
      fallbackDownloadLink: 'https://github.com/frappe/books/releases/latest'
    };
  },
  computed: {
    platform() {
      if (this.$isServer) {
        return 'Windows';
      }
      let platform = guessPlatform();
      if (['iOS', 'Android'].includes(platform)) {
        // on mobile show windows download link
        platform = 'Windows';
      }
      return platform;
    },
    otherPlatforms() {
      return this.platforms.filter(p => p !== this.platform);
    }
  },
  mounted() {
    this.fetchDownloadURL();
  },
  methods: {
    getDownloadLink(platform) {
      if (this.platformDownloadLinks) {
        return (
          this.platformDownloadLinks[platform] || this.fallbackDownloadLink
        );
      }
      return this.fallbackDownloadLink;
    },
    async fetchDownloadURL() {
      let platformDownloadLinks = {};
      let response = await fetch(
        `https://api.github.com/repos/frappe/books/releases/latest`
      );
      const assets = (await response.json()).assets;

      assets.forEach(asset => {
        let browserDownloadURL = asset.browser_download_url;
        let extension = browserDownloadURL.split('.').slice(-1)[0];
        if (extension === 'dmg') {
          platformDownloadLinks['macOS'] = browserDownloadURL;
        } else if (extension === 'exe') {
          platformDownloadLinks['Windows'] = browserDownloadURL;
        } else if (extension === 'AppImage') {
          platformDownloadLinks['Linux'] = browserDownloadURL;
        }
      });

      this.platformDownloadLinks = platformDownloadLinks;
    }
  }
};
</script>
