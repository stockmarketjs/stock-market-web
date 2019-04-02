<template>
  <el-table :data="stocks"
            stripe
            @row-click="showStock"
            style="width: 100%">
    <el-table-column prop="id"
                     label="股票ID"
                     width="180" />
    <el-table-column prop="name"
                     label="股票名称"
                     width="180" />
    <el-table-column prop="market"
                     label="市场" />
  </el-table>
</template>

<script>
export default {
  async mounted() {
    await this.getStocks()
  },
  methods: {
    showStock(stock) {
      this.$router.push(`/stock/${stock.id}`)
    },
    async getStocks() {
      const { data } = await this.axios.get('api/stocks')
      this.stocks = data
    }
  },
  data() {
    return {
      stocks: []
    }
  }
}
</script>

<style scoped>
</style>
