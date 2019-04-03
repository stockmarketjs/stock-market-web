<template>
  <el-table :data="userStocks" stripe style="width: 100%">
    <el-table-column prop="stock.name" label="股票名称" width="180"/>
    <el-table-column prop="costPrice" label="均价"/>
    <el-table-column prop="amount" label="股数"/>
    <el-table-column prop="createdAt" label="日期"/>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      userStocks: []
    }
  },
  async mounted() {
    await this.getUserStocks()
  },
  methods: {
    async getUserStocks() {
      const { data } = await this.axios.get(
        `api/users/${this.$store.state.userId}/stocks`
      )
      this.userStocks = this._.filter(data, item => item.amount !== 0)
    }
  }
}
</script>


<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
