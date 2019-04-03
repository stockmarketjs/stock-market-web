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
      >买{{buyShift.shift}} {{buyShift.hand}}手 ￥{{buyShift.price}}</el-timeline-item>
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
    async findAllShift() {
      const { data: buyData } = await this.axios.get(
        `api/stocks/${this.$route.params.stockId}/orders/buy_shifts`
      )
      this.buyShifts = buyData
      const { data: soldData } = await this.axios.get(
        `api/stocks/${this.$route.params.stockId}/orders/sold_shifts`
      )
      this.soldShifts = soldData.reverse()
    }
  }
}
</script>

<style scoped>
</style>
