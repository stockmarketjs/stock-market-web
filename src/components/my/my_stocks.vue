<template>
  <el-table :data="userStocks"
            stripe
            style="width: 100%">
    <el-table-column prop="stock.name"
                     label="股票名称"
                     width="180" />
    <el-table-column prop="userId"
                     label="用户ID"
                     width="180" />
    <el-table-column prop="costPrice"
                     label="均价" />
    <el-table-column prop="amount"
                     label="股数" />
  </el-table>
</template>

<script>
import USER_STOCKS_GET from '../../graphql/user_stocks_get.gql'

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
      const { data } = await this.$apollo.query({
        query: USER_STOCKS_GET,
        fetchPolicy: 'no-cache',
        variables: {
          data: {
            userId: this.$store.state.userId
          }
        }
      })
      this.userStocks = data.userStocks.userStocks
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
