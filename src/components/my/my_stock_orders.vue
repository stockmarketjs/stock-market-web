<template>
  <el-table :data="userStockOrders"
            stripe
            :default-sort="{prop: 'updatedAt', order: 'ascending'}"
            style="width: 100%">
    <el-table-column prop="stockId"
                     sortable
                     label="股票名称" />
    <el-table-column prop="action"
                     sortable
                     label="操作" />
    <el-table-column prop="state"
                     sortable
                     label="状态" />
    <el-table-column prop="price"
                     sortable
                     label="价格" />
    <el-table-column prop="amount"
                     sortable
                     label="股数" />
    <el-table-column prop="mode"
                     sortable
                     label="模式" />
    <el-table-column prop="createdAt"
                     sortable
                     label="创建时间" />
    <el-table-column prop="updatedAt"
                     sortable
                     label="更新时间" />
  </el-table>
</template>

<script>
import { getUserStockOrders } from '../../graphql/order.gql'

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
      const { data } = await this.$apollo.query({
        query: getUserStockOrders,
        fetchPolicy: 'no-cache',
        variables: {
          data: {
            userId: this.$store.state.userId
          }
        }
      })
      this.userStockOrders = data.userStockOrders.userStockOrders
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
