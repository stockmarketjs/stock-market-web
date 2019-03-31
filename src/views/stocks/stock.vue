<template>
  <div>
    <CStock />
    <el-button type="text"
               @click="buyDialogVisible = true">买</el-button>
    <el-button type="text"
               @click="soldDialogVisible = true">卖</el-button>
    <CStockTrend />
    尚未支持K线图
    <CStockCandle />
    <el-dialog title="操作"
               :visible.sync="buyDialogVisible"
               width="30%">
      <CBuyStock />
    </el-dialog>
    <el-dialog title="操作"
               :visible.sync="soldDialogVisible"
               width="30%">
      <CSoldStock />
    </el-dialog>
  </div>
</template>

<script>
import CStockCandle from '@/components/stocks/stock_candle.vue'
import CStockTrend from '@/components/stocks/stock_trend.vue'
import CBuyStock from '@/components/stocks/buy_stock.vue'
import CSoldStock from '@/components/stocks/sold_stock.vue'
import CStock from '@/components/stocks/stock.vue'

export default {
  name: 'Stock',
  components: {
    CStockTrend,
    CStockCandle,
    CBuyStock,
    CSoldStock,
    CStock
  },
  data() {
    return {
      activeName: 'trend',
      buyDialogVisible: false,
      soldDialogVisible: false
    }
  }
}
</script>
