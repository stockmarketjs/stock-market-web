<template>
  <ve-candle :data="chartData" :settings="chartSettings"/>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      chartSettings: {
        showMA: true,
        showVol: true
      },
      chartData: {
        columns: [
          'date',
          'startPrice',
          'endPrice',
          'lowestPrice',
          'highestPrice'
        ],
        rows: []
      }
    }
  },
  created() {
    this.getStockCandles()
    this.timer = setInterval(() => {
      this.getStockCandles()
    }, 5000)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    async getStockCandles() {
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
