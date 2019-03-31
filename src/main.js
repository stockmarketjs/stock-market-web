import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VeLine from 'v-charts/lib/line.common'
import VeCandle from 'v-charts/lib/candle.common'
import _ from 'lodash'
import moment from 'moment'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component(VeLine.name, VeLine)
Vue.component(VeCandle.name, VeCandle)

Object.defineProperty(Vue.prototype, '_', { value: _ });
Object.defineProperty(Vue.prototype, 'moment', { value: moment });
Object.defineProperty(Vue.prototype, 'axios', { value: axios });

axios.interceptors.request.use(
  config => {
    // 这里写死一个token，你需要在这里取到你设置好的token的值
    const token = store.state.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config
  },
  error => {
    return Promise.reject(error)
  });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')