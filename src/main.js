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
import axios from './commons/axios'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component(VeLine.name, VeLine)
Vue.component(VeCandle.name, VeCandle)

Object.defineProperty(Vue.prototype, '_', { value: _ });
Object.defineProperty(Vue.prototype, 'moment', { value: moment });
Object.defineProperty(Vue.prototype, 'axios', { value: axios });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')