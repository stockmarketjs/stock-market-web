<template>
  <ve-candle :data="chartData"/>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      chartData: {
        columns: [
          'date',
          'startPrice',
          'endPrice',
          'lowestPrice',
          'highestPrice'
        ],
        rows: []
      },
    }
  },
  async created() {
    this.timer = setInterval(async () => {
      await this.getStockCandles()
    }, 5000)
  },
  async updated() {
    clearInterval(this.timer)
  },
  async mounted() {
    await this.getStockCandles()
  },
  methods: {
    async getStockCandles() {
      if (!this.$route.params.stockId) {
        clearInterval(this.timer)
        return
      }
      const { data } = await this.axios.get(
        `api/stocks/${this.$route.params.stockId}/histories`
      )
      this.chartData.rows = data
    }
  }
}
</script>

<style scoped>
</style>
