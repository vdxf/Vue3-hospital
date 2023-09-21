<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>挂号订单</span>
      </div>
    </template>
    <el-form :inline="true">
      <el-form-item label="就诊人">
        <el-select placeholder="请选择就诊人" v-model="patientId" @change="handleChangeVisitor">
          <el-option label="请选择全部的就诊人"></el-option>
          <el-option
            :label="item.name"
            v-for="item in allVisitor"
            :key="item.id"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单状态">
        <el-select placeholder="请选择订单状态">
          <el-option label="全部订单状态"></el-option>
          <el-option :label="item.comment" v-for="item in allOrder" :key="item.status"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-table border style="margin: 20px 0">
      <el-table-column label="就诊时间" prop="reserveDate"></el-table-column>
      <el-table-column label="医院" prop="hosname"></el-table-column>
      <el-table-column label="科室" prop="depname"></el-table-column>
      <el-table-column label="医生" prop="title"></el-table-column>
      <el-table-column label="服务费" prop="amount"></el-table-column>
      <el-table-column label="就诊人" prop="patientName"></el-table-column>
      <el-table-column label="订单状态" prop="param.orderStatusString"></el-table-column>
      <el-table-column label="操作">
        <template #="{ row }">
          <el-button type="text" size="default" @click="handleGoDetail(row)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="pageNow"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      :background="true"
      layout="prev, pager, next, jumper, -> ,sizes, total"
      :total="total"
      @current-change="handlePageChange"
      @size-change="handleSizeChange"
    />
  </el-card>
</template>
<script lang="ts" setup>
import { reqAllVisitor, reqOrderList, reqOrderState } from '@/api/user'
import type {
  AllOrderStatusResponse,
  AllVisitorResponse,
  OrderListResponse,
  AllOrderStatus,
  AllVisitorArr
} from '@/api/user/type'
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const pageNow = ref<number>(1)
const pageSize = ref<number>(10)
const patientId = ref<string>()
const orderStatus = ref<string>()
const total = ref<number>(0)
onBeforeMount(() => {
  getOrderList()
  getAllData()
})
//获取订单列表数据
const orderList = ref()
const getOrderList = async () => {
  const res: OrderListResponse = await reqOrderList(
    pageNow.value,
    pageSize.value,
    patientId.value,
    orderStatus.value
  )
  if (res.code === 200) {
    orderList.value = res.data.records
    total.value = res.data.total
  }
}
//页码发生变化时触发
const handlePageChange = () => {
  getOrderList()
}
//下拉菜单发生变化时触发
const handleSizeChange = () => {
  pageNow.value = 1
  getOrderList()
}
//跳转详情
const handleGoDetail = (row: any) => {
  router.push({
    path: '/user/order',
    query: {
      orderId: row.id
    }
  })
}
//获取全部就诊人与全部订单状态
const allVisitor = ref<AllVisitorArr>()
const allOrder = ref<AllOrderStatus>()
const getAllData = async () => {
  const res: AllVisitorResponse = await reqAllVisitor()
  const res1: AllOrderStatusResponse = await reqOrderState()
  allVisitor.value = res.data
  allOrder.value = res1.data
}
//选择就诊人
const handleChangeVisitor = () => {
  getOrderList()
}
//订单状态
</script>
<style lang="scss" scoped></style>
