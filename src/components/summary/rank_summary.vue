<template>
  <div>
    <el-card class="box-card">
      <div v-for="o of summary" :key="o.name" class="text item">
        用户ID: {{o.name }}
        资金: {{o.value }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      summary: []
    }
  },
  async mounted() {
    await this.getMarketSummary()
  },
  methods: {
    async getMarketSummary() {
      const { data } = await this.axios.get(`api/stock_summaries/rank`)
      this.summary = data
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
