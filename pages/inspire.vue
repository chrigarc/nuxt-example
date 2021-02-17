<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      "Just start  <b-icon
        icon="rocket"
        size="is-large"
      />"
    </h2>
    <h3 class="subtitle is-6 has-text-grey">
      Author: <a href="https://github.com/anteriovieira">
        Antério Vieira
      </a>
    </h3>
    <div class="columns">
      <div class="column">
        m1: {{message1}}
      </div>
      <div class="column">
        m2: {{message2}}
      </div>
      <div class="column">
        <b-button @click="prepareData">Ir por mas</b-button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "inspire",
  layout: "auth",
  data() {
    return {
      message1: '',
      message2: ''
    }
  },
  mounted () {
    this.prepareData();
  },
  methods: {
    prepareData(){
      this.$store.dispatch('loading/setLoading', true);
      this.$axios.get('test1').then(({data}) => {
        this.message1 = data.message;
      }).catch(error => {
        this.$toast.error(error);
      }).finally(() => {
        this.$store.dispatch('loading/setLoading', false);
      });
      this.$axios.get('test2').then( ({data}) => {
        this.message2 = data.message;
      }).catch(error => {
        this.$toast.error(error);
      }).finally(() => {
        this.$store.dispatch('loading/setLoading', false);
      });
    }
  }
}
</script>

<style scoped>

</style>
