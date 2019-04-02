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
  async created() {
    this.timer = setInterval(async () => {
      await this.getStockTrends()
    }, 5000)
  },
  async updated() {
    clearInterval(this.timer)
  },
  async mounted() {
    await this.getStockTrends()
  },
  methods: {
    async getStockTrends() {
      if (!this.$route.params.stockId) {
        clearInterval(this.timer)
        return
      }
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
