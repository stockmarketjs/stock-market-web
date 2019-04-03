<template>
  <el-table
    :data="userStockOrders"
    stripe
    :default-sort="{prop: 'updatedAt', order: 'ascending'}"
    style="width: 100%"
  >
    <el-table-column prop="stock.name" sortable label="股票名称"/>
    <el-table-column prop="type" sortable label="操作"/>
    <el-table-column prop="state" sortable label="状态"/>
    <el-table-column prop="price" sortable label="价格"/>
    <el-table-column prop="hand" sortable label="手数"/>
    <el-table-column prop="mode" sortable label="模式"/>
    <el-table-column prop="createdAt" sortable label="创建时间"/>
    <el-table-column prop="updatedAt" sortable label="更新时间"/>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      userStockOrders: []
    }
  },
  async mounted() {
    await this.getUserStockOrders()
  },
  methods: {
    async getUserStockOrders() {
      const { data } = await this.axios.get(
        `api/users/${this.$store.state.userId}/stock_orders`
      )
      this.userStockOrders = data.map(item => {
        item.type = item.type === 0 ? '买' : '卖'
        item.mode = item.mode === 0 ? '限价' : '市价'
        return item
      })
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
