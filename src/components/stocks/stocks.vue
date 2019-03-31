<template>
  <el-table :data="stocks.stocks"
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
import STOCKS from '../../graphql/stocks.gql'

export default {
  async mounted() {
    await this.getStocks()
  },
  methods: {
    showStock(stock) {
      this.$router.push(`/stock/${stock.id}`)
    },
    async getStocks() {
      const { data } = await this.$apollo.query({
        query: STOCKS,
        fetchPolicy: 'no-cache',
      })
      this.stocks = data.stocks
    }
  },
  data() {
    return {
      stocks: {
        stocks: []
      }
    }
  }
}
</script>

<style scoped>
</style>
