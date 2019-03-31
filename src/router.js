import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyMoney from './views/my/my_money.vue'
import MyStocks from './views/my/my_stocks.vue'
import Stocks from './views/stocks/stocks.vue'
import Stock from './views/stocks/stock.vue'
import Login from './views/auth/login.vue'
import MyStockOrders from './views/my/my_stock_orders.vue'

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
      component: () => import('./views/About.vue')
    },
    {
      path: '/features',
      name: 'feature',
      component: () => import('./views/features.vue')
    },
    {
      path: '/my_money',
      name: 'MyMoney',
      component: MyMoney
    },
    {
      path: '/my_stocks',
      name: 'MyStocks',
      component: MyStocks
    },
    {
      path: '/my_stock_orders',
      name: 'MyStockOrders',
      component: MyStockOrders
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
      component: () => import('./views/announcements.vue')
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: Login
    }
  ]
})
export default router
