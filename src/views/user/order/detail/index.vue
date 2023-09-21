<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>挂号详情</span>
      </div>
    </template>
    <div class="top">
      <el-tag class="ml-2" type="success">
        <i>✔</i>
        <span>{{ orderInfo.param?.orderStatusString }}</span>
      </el-tag>
      <div class="right">
        <img src="@/assets/images/wechat.jpg" alt="img" />
        <div class="text">
          <span>微信关注 xxx</span>
          <span>"快速预约挂号"</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="form">
        <el-descriptions class="margin-top" :column="1" border>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊人信息</div>
            </template>
            {{ orderInfo.patientName }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊日期</div>
            </template>
            {{ orderInfo.reserveDate }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊医院</div>
            </template>
            {{ orderInfo.hosname }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊科室</div>
            </template>
            {{ orderInfo.depname }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">医生职称</div>
            </template>
            {{ orderInfo.title }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">医师服务费</div>
            </template>
            {{ orderInfo.amount }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">挂号订单</div>
            </template>
            {{ orderInfo.outTradeNo }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">挂号时间</div>
            </template>
            {{ orderInfo.createTime }}
          </el-descriptions-item>
        </el-descriptions>
        <div class="button-group" v-if="orderInfo.orderStatus !== -1">
          <el-popconfirm title=" 确定取消预约吗？" @confirm="handleCancle">
            <template #reference>
              <el-button>取消预约</el-button>
            </template>
          </el-popconfirm>
          <el-button
            type="primary"
            size="default"
            v-if="orderInfo.orderStatus === 0"
            @click="handlePay"
            >支付</el-button
          >
        </div>
      </div>
      <div class="notice">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>注意事项</span>
            </div>
          </template>
          <ul>
            <li>1.请确认xxxxxxxxxxxxxxxxxxx</li>
            <li>
              2.【取号】就诊当天需在{{
                orderInfo.fetchTime
              }}前在医院取号，未取号视为爽约，该号不退不换
            </li>
            <li>3.【退号】在{{ orderInfo.quitTime }}前可在线退号，逾期将不可办理退号退费服务</li>
            <li>4.请确认xxxxxxxxxxxxxxxxxxx</li>
            <li>5.请确认xxxxxxxxxxxxxxxxxxx</li>
            <li>6.请确认xxxxxxxxxxxxxxxxxxx</li>
          </ul>
        </el-card>
      </div>
    </div>
  </el-card>
  <el-dialog v-model="dialogVisible" title="微信支付" @close="handleClose">
    <div class="wx-pay">
      <img :src="imgUrl" alt="img" v-if="imgUrl" />
      <img src="@/assets/images/loadingApp.jpg" alt="img" v-else />
      <p>请使用微信扫一扫</p>
      <p>扫描二维码支付</p>
    </div>
    <template #footer>
      <el-button @click="handleClose">关闭窗口</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
//@ts-ignore
import QRCode from 'qrcode'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { OrderDetail, OrderResponse, QrCodeResponse, PayResult } from '@/api/user/type'
import { reqOrderDetail, reqDeleteOrder, reqQrCode, reqPayResult } from '@/api/user'
import { ElMessage } from 'element-plus'
const route = useRoute()
const orderInfo = ref<OrderDetail>()
const dialogVisible = ref<boolean>(false)
//orderStatus有三种状态： -1：取消预约， 0：预约但是没有支付， 1：预约且支付成功
onBeforeMount(() => {
  getOrderDetail()
})
//获取订单详情
const getOrderDetail = async () => {
  const res: OrderResponse = await reqOrderDetail(route.query.orderId as string)
  if (res.code === 200) {
    orderInfo.value = res.data
  }
}
//取消预约
const handleCancle = async () => {
  try {
    await reqDeleteOrder(route.query.orderId as string)
    //重新获取订单详情
    getOrderDetail()
  } catch (err) {
    ElMessage({
      type: 'error',
      message: (err as Error).message
    })
  }
}
//关闭窗口
const handleClose = () => {
  dialogVisible.value = false
  //关闭定时器
  clearTimeout(timer.value)
}
//支付
const timer = ref<any>()
const imgUrl = ref<string>()
const handlePay = async () => {
  dialogVisible.value = true
  const res: QrCodeResponse = await reqQrCode(route.query.orderId as string)
  imgUrl.value = await QRCode.toDataURL(res.data.codeUrl)
  //长轮询查询支付结果
  timer.value = setTimeout(async () => {
    const res: PayResult = await reqPayResult(route.query.orderId as string)
    if (res.data) {
      dialogVisible.value = false
      ElMessage({
        type: 'success',
        message: '支付成功'
      })
      //关闭定时器
      clearTimeout(timer.value)
      //再次获取订单详情
      getOrderDetail()
    }
  }, 1000)
}
</script>
<style lang="scss" scoped>
.card-header {
  color: #666;
  font-weight: 600;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
  img {
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }
}
.right {
  display: flex;
  align-items: center;
}
.text {
  display: flex;
  flex-direction: column;
  span {
    height: 20px;
    line-height: 20px;
  }
}
.content {
  margin-top: 20px;
  display: flex;
  .form {
    width: 40%;
    margin-right: 20px;
  }
}
.notice {
  flex: 1;
  ul {
    li {
      height: 20px;
      line-height: 20px;
      &:nth-child(2) {
        color: red;
      }
    }
  }
}
.button-group {
  margin-top: 20px;
}
.wx-pay {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
  }
  p {
    height: 20px;
    line-height: 20px;
  }
}
:deep(.el-dialog__body) {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>
