<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="股票ID">
      <el-input v-model="form.stockId"/>
    </el-form-item>
    <el-form-item label="股数">
      <el-input-number v-model="form.amount" :precision="0" :step="1" :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="价格">
      <el-input-number v-model="form.price" :precision="2" :step="0.1" :min="0.00"></el-input-number>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="buy">买</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  created() {
    this.form.stockId = this.$route.params.stockId
  },
  data() {
    return {
      form: {
        stockId: '',
        price: 0,
        amount: 0
      }
    }
  },
  mounted() {
    this.checkAuth()
  },
  methods: {
    async checkAuth() {
      if (!this.$store.state.userId) {
        alert('未登录，请先登录')
        this.$router.push(`/auth/login`)
      }
    },
    async buy() {
      const { data } = await this.axios.post(
        `api/stocks/${this.form.stockId}/buy`,
        {
          price: this.form.price,
          hand: this.form.amount,
          // userId: this.$store.state.userId,
          // mode: 'LIMIT'
        }
      )
      alert('购买成功')
      this.stock = data.stock
    }
  }
}
</script>

<style scoped>
</style>
