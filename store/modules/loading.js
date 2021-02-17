export default {
    namespaced: true,
    state: {
        isLoading: false,
    },
    mutations: {
        setLoading(state, value = false){
            state.isLoading = value;
        }
    },
    actions: {
        setLoading (context, value = false) {
            context.commit('setLoading', value)
        }
    }
}
