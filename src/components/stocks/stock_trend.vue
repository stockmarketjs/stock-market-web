<template>
  <div>
    <ve-line :data="chartData" :settings="chartSettings"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      stockTrends: [],
      chartData: {
        columns: ['minute', 'amount', 'price'],
        rows: []
      },
      chartSettings: {
        metrics: ['price'],
        dimension: ['minute'],
        labelMap: {
          minute: '时间',
          amount: '量',
          price: '价格'
        }
      }
    }
  },
  created() {
    this.getStockTrends()
    this.timer = setInterval(() => {
      this.getStockTrends()
    }, 5000)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    async getStockTrends() {
      const { data } = await this.axios.get(
        `api/stocks/${this.$route.params.stockId}/orders`
      )
      this.stockTrends = data
      this.chartData.rows = this.stockTrends
    }
  }
}
</script>

<style scoped>
</style>
