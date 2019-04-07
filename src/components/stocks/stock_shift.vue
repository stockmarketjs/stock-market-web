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
      timer1: null,
      timer2: null,
      buyShifts: [],
      soldShifts: []
    }
  },
  created() {
    this.findAllBuyShift()
    this.findAllSoldShift()
  },
  destroyed() {
    clearTimeout(this.timer1)
    clearTimeout(this.timer2)
  },
  methods: {
    findAllBuyShift() {
      this.axios
        .get(`api/stocks/${this.$route.params.stockId}/orders/buy_shifts`)
        .then(res => {
          this.buyShifts = res.data
          this.timer1 = setTimeout(() => {
            this.findAllBuyShift()
          }, 5000)
        }).catch(e=>{
           this.timer1 = setTimeout(() => {
            this.findAllBuyShift()
          }, 10000)
        })
    },
    findAllSoldShift() {
      this.axios
        .get(`api/stocks/${this.$route.params.stockId}/orders/sold_shifts`)
        .then(res => {
          this.soldShifts = res.data.reverse()
          this.timer2 = setTimeout(() => {
            this.findAllSoldShift()
          }, 5000)
        }).catch(e=>{
           this.timer2 = setTimeout(() => {
            this.findAllSoldShift()
          }, 10000)
        })
    }
  }
}
</script>

<style scoped>
</style>
