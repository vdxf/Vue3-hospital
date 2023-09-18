<template>
  <el-card class="box-card" shadow="hover" @click="handleGoDetail">
    <div class="content">
      <div class="left">
        <div class="name">{{ hospitalInfo.hosname }}</div>
        <div class="tip">
          <div class="level">
            <i class="iconfont">&#xe62a;</i>
            <span>{{ hospitalInfo.param?.hostypeString }}</span>
          </div>
          <div class="time">
            <i class="iconfont">&#xe627;</i>
            <span>每天 {{ hospitalInfo.bookingRule?.releaseTime }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <img :src="`data:image/jpeg;base64, ${hospitalInfo.logoData}`" alt="img" />
      </div>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps(['hospitalInfo'])

const handleGoDetail = () => {
  router.push({
    path: '/hospital/reservation',
    query: {
      hoscode: props.hospitalInfo.hoscode
    }
  })
}
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
}
.left {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.tip {
  color: #666;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  i {
    font-size: 12px;
    margin-right: 10px;
  }
}
.right {
  img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
</style>
