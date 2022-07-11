<template>
  <section>
    <tabs class="tabs-container">
      <tab class="single-tab" @click="switchTab('global')">Global</tab>
      <tab class="single-tab" @click="switchTab('yourCountry')">Your Country</tab>
      <tab class="single-tab" @click="switchTab('search')">Search</tab>
    </tabs>
    <div class="content">
      <div v-if="activeTab === 'global'" class="global-box">
        <DataView class="content-data" :apiCall="covidData"/>
      </div>
      <div v-else-if="activeTab === 'yourCountry'" class="yourCountry-box">
        <DataView class="content-data" apiCall="test2"/>
      </div>
      <div v-else-if="activeTab === 'search'" class="search-box">
        <DataView class="content-data" apiCall="test3"/>
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
