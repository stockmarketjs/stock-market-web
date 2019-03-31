<template>
  <div>
    {{$route.params.stockId}}
    <ve-line :data="chartData"
             :settings="chartSettings" />
  </div>
</template>

<script>
import STOCK_TRENDS from '../../graphql/stock_trends.gql'

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
      const { data } = await this.$apollo.query({
        query: STOCK_TRENDS,
        fetchPolicy: 'no-cache',
        variables: {
          data: {
            stockId: this.$route.params.stockId,
            date: this.moment().format('YYYY-MM-DD')
          }
        }
      })
      this.stockTrends = data.stockTrends.stockTrends
      this.chartData.rows = this.stockTrends
    }
  }
}
</script>

<style scoped>
</style>
