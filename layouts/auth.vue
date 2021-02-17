<template>
    <div class="hero is-fullheight">
        <loading :active="isLoading"
                 :is-full-page="true"/>
        <div class="hero-body">
            <div class="container">
                <nuxt></nuxt>
            </div>
        </div>
    </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    name: "auth",
    components: {Loading},
    computed: {
        isLoading () {
            return this.$store.state.loading.isLoading
        }
    },
}
</script>

<style scoped>

</style>
