<template>
  <el-table :data="stocks" stripe @row-click="showStock" style="width: 100%">
    <el-table-column prop="name" label="股票名称" width="180"/>
    <el-table-column prop="currentPrice" label="当前价"/>
    <el-table-column prop="change" label="涨幅"/>
    <el-table-column prop="changePer" label="涨幅"/>
    <el-table-column prop="market" label="市场"/>
  </el-table>
</template>

<script>
export default {
  async mounted() {
    await this.getStocks()
  },
  created() {
    this.getStocks()
    this.timer = setInterval(() => {
      this.getStocks()
    }, 5000)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    showStock(stock) {
      this.$router.push(`/stock/${stock.id}`)
    },
    async getStocks() {
      const { data } = await this.axios.get('api/stocks')
      this.stocks = data.map(v => {
        v.market = v.market === 'sh' ? '沪市' : '深市'
        v.changePer = this._.round((v.change / v.currentPrice) * 100, 2) + '%'
        return v
      })
    }
  },
  data() {
    return {
      timer: null,
      stocks: []
    }
  }
}
</script>

<style scoped>
</style>
