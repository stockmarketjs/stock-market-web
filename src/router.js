import Router from 'vue-router'
import Home from './views/Home.vue'
import MyMoney from './views/my/my_money.vue'
import MyStocks from './views/my/my_stocks.vue'
import Stocks from './views/stocks/stocks.vue'
import Stock from './views/stocks/stock.vue'
import Login from './views/auth/login.vue'
import MyStockOrders from './views/my/my_stock_orders.vue'
import axios from 'axios'
import store from './store'
import Vue from 'vue'
import About from './views/About.vue'
import Feature from './views/features.vue'
import Announcement from './views/announcements.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/features',
      name: 'feature',
      component: Feature
    },
    {
      path: '/my_money',
      name: 'MyMoney',
      component: MyMoney,
      meta: {
        login: true,
      }
    },
    {
      path: '/my_stocks',
      name: 'MyStocks',
      component: MyStocks,
      meta: {
        login: true,
      }
    },
    {
      path: '/my_stock_orders',
      name: 'MyStockOrders',
      component: MyStockOrders,
      meta: {
        login: true,
      }
    },
    {
      path: '/stocks',
      name: 'Stocks',
      component: Stocks
    },
    {
      path: '/stock/:stockId',
      name: 'Stock',
      component: Stock
    },
    {
      path: '/announcements',
      name: 'announcement',
      component: Announcement
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    if (store.state.token && !store.state.userId) {
      axios.get('api/auth/user', {
        headers: {
          Authorization: store.state.token
        }
      }).then(res => {
        if (!res.data.id) {
          store.commit('setToken', null)
          alert('未登录，请先登录')
          next({
            path: '/auth/login',
            query: { redirect_url: to.fullPath }
          })
        } else {
          store.commit('setUserId', res.data.id)
          next();
        }
      }).catch(() => {
        store.commit('setToken', null)
        alert('未登录，请先登录')
        next({
          path: '/auth/login',
          query: { redirect_url: to.fullPath }
        })
      })
    } else if (store.state.token && store.state.userId) {
      next();
    } else {
      alert('未登录，请先登录')
      next({
        path: '/auth/login',
        query: { redirect_url: to.fullPath }
      })
    }
  }
  else {
    next();
  }
})

export default router