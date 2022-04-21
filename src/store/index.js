import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        formData: {
            firstname: '',
            email: null,
            company: null,
            phone: null,
            from: null,
            accept: null,
        },
    },

    // getters: {
    //     reset() {
    //         return this.state.formData = null
    //     }
    // },
    mutations: {
        setName(state, value) {
            state.formData.firstname = value
        },
        setEmail(state, value) {
            state.formData.email = value
        },
        setCompany(state, value) {
            state.formData.company = value
        },
        setPhone(state, value) {
            state.formData.phone = value
        },
        setFrom(state, value) {
            state.formData.from = value
        },
        setAccept(state, value) {
            state.formData.accept = value
        },
    }
})