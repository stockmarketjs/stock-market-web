<template>
  <el-carousel :interval="2000"
               arrow="always">
    <el-carousel-item v-for="item in features"
                      :key="item.id">
      <h3>{{ item.desc }}</h3>
    </el-carousel-item>
  </el-carousel>
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
          id:'2',
          desc:'AI深度学习, 分析并模拟高盈利股民行为操作'
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
