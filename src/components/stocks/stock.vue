<template>
  <div>
    <i class="el-icon-back" @click="backStocks"></i>
    <p>{{stock.name}}</p>
    <el-tag>市场 {{stock.market==='sh'?'沪市':'深市'}}</el-tag>
    <el-tag>当前价 {{stock.currentPrice}}</el-tag>
    <el-tag>涨幅 {{stock.change}}</el-tag>
    <el-tag>涨幅 {{this._.round(stock.change/stock.currentPrice*100,2)}}%</el-tag>
    <el-tag>总手 {{stock.totalHand}}</el-tag>
    <el-tag>开盘价 {{stock.startPrice}}</el-tag>
    <el-tag>收盘价 {{stock.endPrice}}</el-tag>
    <el-tag>最高价 {{stock.highestPrice}}</el-tag>
    <el-tag>最低价 {{stock.lowestPrice}}</el-tag>
    <el-tag>总股本 {{stock.generalCapital}}</el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      stock: {
        stockPrice: {},
        stockCapital: {}
      }
    }
  },
  created() {
    this.getStock()
    this.timer = setInterval(() => {
      this.getStock()
    }, 5000)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    backStocks() {
      const redirect = decodeURIComponent(this.$route.query.redirect_url || '/')
      this.$router.push(redirect)
    },
    async getStock() {
      const { data } = await this.axios.get(
        `api/stocks/${this.$route.params.stockId}`
      )
      this.stock = data
    }
  }
}
</script>

<style scoped>
</style>
