<template>
  <el-card class="box-card">
    <div slot="header"
         class="clearfix">
      <span>人民币账户</span>
      <el-button style="float: right; padding: 3px 0"
                 type="text">...</el-button>
    </div>
    <div>
      余额: {{ cny }}
    </div>
  </el-card>
</template>

<script>
import USER_MONEY_GET from '../../graphql/user_money_get.gql'

export default {
  data() {
    return {
      cny: 0
    }
  },
  async mounted() {
    await this.getCash()
  },
  methods: {
    async getCash() {
      const { data } = await this.$apollo.query({
        query: USER_MONEY_GET,
        fetchPolicy: 'no-cache',
        variables: {
          data: {
            cashType: 'CNY',
            userId: this.$store.state.userId
          }
        }
      })
      const cny = this._.find(data.userMoneys.userMoneys, { cashType: 'CNY' })
      this.cny = cny ? cny.cash : 0
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
