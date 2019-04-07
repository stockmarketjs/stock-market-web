<template>
  <div>
    <ve-line :data="chartData" :settings="chartSettings" :extend="chartExtend"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      chartExtend: {
        series(v) {
          v.forEach(i => {
            i.smooth = true
            i.showSymbol = false
          })
          return v
        }
      },
      stockTrends: [],
      chartData: {
        columns: ['minute', 'amount', 'price'],
        rows: []
      },
      chartSettings: {
        scale: [true, true],
        // area: true,
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
  },
  destroyed() {
    clearTimeout(this.timer)
  },
  methods: {
    getStockTrends() {
      this.axios
        .get(`api/stocks/${this.$route.params.stockId}/orders`)
        .then(res => {
          this.stockTrends = res.data
          this.chartData.rows = this.stockTrends
          this.timer = setTimeout(() => {
            this.getStockTrends()
          }, 5000)
        })
    }
  }
}
</script>

<style scoped>
</style>
