<template>
  <section>
    <div class="tabs-container">
      <span class="single-tab" @click="switchTab('global')">Global</span>
      <span class="single-tab" @click="switchTab('yourCountry'), getUserLocation()">Your Country</span>
      <span class="single-tab" @click="switchTab('search')">Search</span>
    </div>
    <div class="content">
      <div v-if="activeTab === 'global'" class="global-box">
        <DataView class="content-data" :apiCall="covidData.Global" />
      </div>
      <div v-else-if="activeTab === 'yourCountry'" class="yourCountry-box">
        <DataView class="content-data" :apiCall="{}" />
      </div>
      <div v-else-if="activeTab === 'search'" class="search-box">
        <DataView class="content-data" :apiCall="{}" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import DataView from '~/components/DataView.vue';
export default {
  name: 'IndexPage',
  components: { DataView },
  data() {
    return {
      activeTab: 'global',
    }
  },
  computed: {
    ...mapState([
      'covidData',
    ])
  },
  methods: {
    switchTab(item) {
      this.activeTab = item
    },
    success(position) {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude

      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      fetch(geoApiUrl)
        .then(response => response.json())
        .then(data => console.log(data.countryName));
    },
    error() {
      return console.log('error find country')
    },
    getUserLocation() {
      window.navigator.geolocation
        .getCurrentPosition(this.success, this.error);
    }
  }
}
</script>

<style lang="scss" scoped>
.content-data {
  margin-bottom: 50px;
}

.tabs-container {
  border-bottom: 1px solid black;
  padding-bottom: 10px;

  .single-tab {
    cursor: pointer;
    font-size: 30px;
    font-weight: bold;
    padding: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }
}

.active {
  font-weight: bold;
}
</style>
