import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import './plugins/avue'

import router from './router'
import axios from 'axios'

// import EleForm from 'vue-ele-form'
// Vue.use(EleForm)



const http=axios.create({
  baseURL:process.env.VUE_APP_URL
})

Vue.prototype.$http=http
Vue.prototype.$httpajax = http;//avue的axios
// window.axios=http
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
