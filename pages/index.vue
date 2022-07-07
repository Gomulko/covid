<template>
  <section>
    <tabs>
      <tab @click="switchTab('poland')">Poland</tab>
      <tab @click="switchTab('yourCountry')">Your Country</tab>
      <tab @click="switchTab('search')">Search</tab>
    </tabs>
    <div class="content">
      <div v-if="activeTab === 'poland'" class="poland-box">
        <h1>Poland box</h1>
      </div>
      <div v-else-if="activeTab === 'yourCountry'" class="yourCountry-box">
        <h1>Your Country</h1>
      </div>
      <div v-else-if="activeTab === 'search'" class="search-box">
        <h1>search box</h1>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'IndexPage',
  data() {
    return {
      activeTab: 'poland'
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
.active {
  font-weight: bold;
}
</style>
