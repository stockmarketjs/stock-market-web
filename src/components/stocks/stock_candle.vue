<template>
  <ve-candle :data="chartData" :settings="chartSettings"/>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      chartSettings: {
        scale: [true, true],
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
  },
  destroyed() {
    clearTimeout(this.timer)
  },
  methods: {
    getStockCandles() {
      this.axios
        .get(`api/stocks/${this.$route.params.stockId}/histories`)
        .then(res => {
          this.chartData.rows = res.data
          this.timer = setTimeout(() => {
            this.getStockCandles()
          }, 5000)
        }).catch(e=>{
           this.timer = setTimeout(() => {
            this.getStockCandles()
          }, 10000)
        })
    }
  }
}
</script>

<style scoped>
</style>
