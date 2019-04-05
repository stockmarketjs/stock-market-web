<template>
  <el-card class="box-card">
    <div v-for="o in features" :key="o.id" class="text item">{{o.desc }}</div>
  </el-card>
</template>

<script>
export default {
  data: function() {
    return {
      features: [
        {
          id: '1',
          desc: '基于微博事件监控与情感分析, 真实模拟消息面对股市的影响'
        },
        {
          id: '2',
          desc: 'AI深度学习, 分析并模拟高盈利股民行为操作'
        },
        {
          id: '3',
          desc: '充值功能'
        },
        {
          id: '4',
          desc: '涨停板限制'
        }
      ]
    }
  }
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
