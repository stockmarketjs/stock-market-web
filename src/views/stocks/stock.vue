<template>
  <div>
    <CStock/>
    <el-button type="primary" icon="el-icon-download" @click="buyDialogVisible = true">买进</el-button>
    <el-button type="primary" icon="el-icon-upload2" @click="soldDialogVisible = true">卖出</el-button>
    <el-row>
      <el-col :span="18">
        <CStockTrend/>
        <CStockCandle/>
      </el-col>
      <el-col :span="6">
        <CStockShift/>
      </el-col>
    </el-row>
    <el-dialog title="操作" :visible.sync="buyDialogVisible" width="30%">
      <CBuyStock/>
    </el-dialog>
    <el-dialog title="操作" :visible.sync="soldDialogVisible" width="30%">
      <CSoldStock/>
    </el-dialog>
  </div>
</template>

<script>
import CStockCandle from '@/components/stocks/stock_candle.vue'
import CStockTrend from '@/components/stocks/stock_trend.vue'
import CBuyStock from '@/components/stocks/buy_stock.vue'
import CSoldStock from '@/components/stocks/sold_stock.vue'
import CStock from '@/components/stocks/stock.vue'
import CStockShift from '@/components/stocks/stock_shift.vue'

export default {
  name: 'Stock',
  components: {
    CStockTrend,
    CStockCandle,
    CBuyStock,
    CSoldStock,
    CStock,
    CStockShift
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
