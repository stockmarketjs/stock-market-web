<template>
  <div>
    <el-button type="primary" @click="createCapital">创建资金账户</el-button>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>人民币账户</span>
        <el-button style="float: right; padding: 3px 0" type="text">...</el-button>
      </div>
      <div>余额: {{ cny }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cny: '暂未开通'
    }
  },
  async mounted() {
    await this.getCash()
  },
  methods: {
    async createCapital() {
      await this.axios.post(
        `api/users/${this.$store.state.userId}/capitals`
      )
      await this.getCash()
      alert('创建资金账户成功')
    },
    async getCash() {
      const { data } = await this.axios.get(
        `api/users/${this.$store.state.userId}/capitals`
      )
      const cny = data[0]
      this.cny = cny.cash
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
