<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="账户">
      <el-input v-model="form.account"/>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password" type="password"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
      <el-button type="primary" @click="register">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    register() {
      alert('尚未开放注册, 联系管理员获取测试帐号')
    },
    async login() {
      const { data } = await this.axios.post('api/auth/login', {
        account: this.form.account,
        password: this.form.password
      })
      this.$store.commit('setToken', data.token)
      await this.getAuther()
      this.goBack()
    },
    async getAuther() {
      const { data } = await this.axios.get('api/auth/user')
      this.$store.commit('setUserId', data.id)
    },
    goBack() {
      const redirect = decodeURIComponent(this.$route.query.redirect_url || '/')
      this.$router.push(redirect)
    }
  }
}
</script>

<style scoped>
</style>
