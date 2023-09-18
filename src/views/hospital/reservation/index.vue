<template>
  <div class="reservation">
    <div class="header">
      <div class="title">{{ detailStore.hospitalData.hospital?.hosname }}</div>
      <i class="iconfont">&#xe62a;</i>
      <span>{{ detailStore.hospitalData.hospital?.param.hostypeString }}</span>
    </div>
    <div class="content">
      <div class="left">
        <img
          :src="`data:image/jpeg;base64,` + detailStore.hospitalData.hospital?.logoData"
          alt="img"
        />
      </div>
      <div class="right">
        <p>挂号规则</p>
        <div class="time">
          <span>预约周期：10天</span>
          <span>放号时间：{{ detailStore.hospitalData.bookingRule?.releaseTime }}</span>
          <span>停挂时间：{{ detailStore.hospitalData.bookingRule?.stopTime }}</span>
        </div>
        <div class="address">
          <span>具体地址：{{ detailStore.hospitalData.hospital?.param.fullAddress }}</span>
        </div>
        <div class="route">
          <span>具体路线：{{ detailStore.hospitalData.hospital?.route }}</span>
        </div>
        <div class="remove">
          <span
            >退号时间：就诊前一工作日
            {{ detailStore.hospitalData.bookingRule?.quitTime }} 前取消</span
          >
        </div>
        <div class="rule">
          <p>医院预约规则</p>
          <div
            class="ruleInfo"
            v-for="(item, index) in detailStore.hospitalData.bookingRule?.rule"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useDetailStore from '@/stores/modules/hospitalDetail'
const detailStore = useDetailStore()
</script>
<style lang="scss" scoped>
.reservation {
  span {
    color: #666;
  }
}
.header {
  display: flex;
  align-items: center;
  margin: 20px 0;
  .title {
    font-size: 20px;
    font-weight: 600;
  }
  i {
    margin: 0 5px 0 10px;
  }
}
.content {
  margin-top: 20px;
  display: flex;
  .left {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    margin-right: 30px;
  }
  .right {
    flex: 1;
    p {
      margin-bottom: 10px;
      color: #000;
      font-weight: 600;
    }
  }
}
.time {
  span {
    margin-right: 20px;
  }
}
.time,
.address,
.route,
.remove {
  margin-bottom: 10px;
}
</style>
