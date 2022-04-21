import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'
import store from './store/index'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')