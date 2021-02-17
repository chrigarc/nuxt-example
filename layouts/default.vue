<template>
  <div>
    <loading :active="isLoading"
             :is-full-page="true"/>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          IMSS - Pruebas
        </a>

        <div class="navbar-burger">
          <span/>
          <span/>
          <span/>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" @click="onLogout">
            Salir
          </a>
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon"/>
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt/>
      </div>
    </section>
  </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  middleware: "auth",
  components: {Loading},
  computed: {
    isLoading () {
      return this.$store.state.loading.isLoading
    }
  },
  data() {
    return {
      items: [
        {
          title: 'Inicio',
          icon: 'home',
          to: {name: 'index'}
        },
        {
          title: 'Inspire',
          icon: 'toolbox',
          to: '/inspire'
        }
      ]
    }
  },
  methods: {
    onLogout() {
      this.$buefy.dialog.confirm({
        message: '¿Seguro de cerrar la sesión?',
        onConfirm: () => {
          this.$auth.logout()
        }
      })
    }
  }
}
</script>
