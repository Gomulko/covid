<template>
  <section>
    <h1>Content</h1>
  </section>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'IndexPage',
  computed: {
    ...mapState([
      'covidData',
    ])
  },
}
</script>
