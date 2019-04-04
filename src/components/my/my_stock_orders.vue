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
    <el-table-column prop="updatedAt" sortable label="更新时间"/>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="danger" @click="cancel(scope.row)">撤单</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export const ORDER_STATE = {
  // 待撮合
  0: '待撮合',
  // 撮合中
  1: '撮合中',
  // 交易成功
  2: '已成交',
  // 撮合失败
  3: '撮合失败',
  // 撤回
  4: '已撤单'
}
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
    async cancel(userStockOrder) {
      try {
        await this.axios.post(
          `api/users/${this.$store.state.userId}/stock_orders/${
            userStockOrder.id
          }/cancel`
        )
        alert('撤单成功')
      } catch (e) {
        alert('撤单失败')
      }
      await this.getUserStockOrders()
    },
    async getUserStockOrders() {
      const { data } = await this.axios.get(
        `api/users/${this.$store.state.userId}/stock_orders`
      )
      this.userStockOrders = data.map(item => {
        item.type = item.type === 0 ? '买' : '卖'
        item.mode = item.mode === 0 ? '限价' : '市价'
        item.state = this._.get(ORDER_STATE, item.state)
        item.updatedAt = this.moment(item.updatedAt).format(
          'YYYY年MM月DD日 HH:mm:ss'
        )
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
