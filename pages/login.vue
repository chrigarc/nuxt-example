<template>
    <div class="columns">
        <div class="column">
            <div class="box">
                <form @submit.prevent="onLogin">
                    <b-field label="Usuario">
                        <b-input v-model="data.email" placeholder="Clave de usuario" required/>
                    </b-field>
                    <b-field>
                        <b-input v-model="data.password" type="password" password-reveal required/>
                    </b-field>
                    <b-field>
                        <button type="submit" class="button is-primary">Iniciar</button>
                    </b-field>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    layout: "auth",
    data() {
        return {
            data: {}
        }
    },
    methods: {
        onLogin() {
            this.$store.dispatch('loading/setLoading', true);
            this.$auth.loginWith('local', {
                data: this.data,
            }).catch(error => {
              console.log(error);
                this.$toast.error('Credenciales invalidas');
            }).finally(()=>{
                this.$store.dispatch('loading/setLoading', false);
            })
        }
    }
}
</script>

<style scoped>

</style>
