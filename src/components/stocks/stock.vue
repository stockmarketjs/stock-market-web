<template>
  <div>
    <p>{{stock.name}}</p>
    <el-tag>市场 {{stock.market==='sh'?'沪市':'深市'}}</el-tag>
    <el-tag>当前价 {{stock.stockPrice.currentPrice}}</el-tag>
    <el-tag>换手 {{stock.stockPrice.change}}</el-tag>
    <el-tag>总手 {{stock.stockPrice.totalHand}}</el-tag>
    <el-tag>开盘价 {{stock.stockPrice.startPrice}}</el-tag>
    <el-tag>收盘价 {{stock.stockPrice.endPrice}}</el-tag>
    <el-tag>最高价 {{stock.stockPrice.highestPrice}}</el-tag>
    <el-tag>最低价 {{stock.stockPrice.lowestPrice}}</el-tag>
    <el-tag>总股本 {{stock.stockCapital.generalCapital}}</el-tag>
  </div>
</template>

<script>
import STOCK from '../../graphql/stock.gql'

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
  async created() {
    this.timer = setInterval(async () => {
      await this.getStock()
    }, 5000)
  },
  async updated() {
    clearInterval(this.timer)
  },
  async mounted() {
    await this.getStock()
  },
  methods: {
    async getStock() {
      const { data } = await this.$apollo.query({
        query: STOCK,
        fetchPolicy: 'no-cache',
        variables: {
          data: {
            id: this.$route.params.stockId
          }
        }
      })
      this.stock = data.stock
    }
  }
}
</script>

<style scoped>
</style>
