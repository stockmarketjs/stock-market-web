<template>
  <div>
    <el-timeline>
      <el-timeline-item
        v-for="(soldShift, index) in soldShifts"
        :key="index"
      >卖{{soldShift.shift}} {{soldShift.hand}}手 ￥{{soldShift.price}}</el-timeline-item>
    </el-timeline>
    <el-timeline>
      <el-timeline-item
        v-for="(buyShift, index) in buyShifts"
        :key="index"
      >买{{buyShift.shift}} {{buyShift.shift}}手 ￥{{buyShift.price}}</el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      buyShifts: [],
      soldShifts: []
    }
  },
  mounted() {
    this.checkAuth()
  },
  created() {
    this.findAllShift()
    this.timer = setInterval(() => {
      this.findAllShift()
    }, 5000)
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    async checkAuth() {
      if (!this.$store.state.userId) {
        alert('未登录，请先登录')
        this.$router.push(`/auth/login`)
      }
    },
    async findAllShift() {
      const { data: buyData } = await this.axios.get(
        `api/stocks/${this.$route.params.stockId}/orders/buy_shifts`
      )
      this.buyShifts = buyData
      const { data: soldData } = await this.axios.get(
        `api/stocks/${this.$route.params.stockId}/orders/sold_shifts`
      )
      this.soldShifts = soldData
    }
  }
}
</script>

<style scoped>
</style>
