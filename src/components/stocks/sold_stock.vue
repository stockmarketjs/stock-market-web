<template>
  <div>
    <el-alert title="涨跌幅限制为 10%" type="warning" show-icon></el-alert>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="股票ID">
        <el-input v-model="form.stockId" disabled/>
      </el-form-item>
      <el-form-item label="手数">
        <el-input-number v-model="form.amount" :precision="0" :step="1" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="价格">
        <el-input-number v-model="form.price" :precision="2" :step="0.1" :min="0.00"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="sold">卖</el-button>
      </el-form-item>
    </el-form>
  </div>
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
  methods: {
    async sold() {
      this.axios
        .post(`api/stocks/${this.form.stockId}/sold`, {
          price: this.form.price,
          hand: this.form.amount
        })
        .then(res => {
          alert('卖出成功')
        })
    }
  }
}
</script>

<style scoped>
</style>
