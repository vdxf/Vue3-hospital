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
          :src="`data:image/jpeg;base64,${detailStore.hospitalData.hospital?.logoData}`"
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
    <div class="deparment-box">
      <div class="left-nav">
        <ul>
          <li
            v-for="(item, index) in detailStore.departmentArr"
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="handleChangeIndex(index)"
          >
            {{ item.depname }}
          </li>
        </ul>
      </div>
      <div class="deparment-content">
        <div
          class="deparment-title"
          v-for="(deparment, index) in detailStore.departmentArr"
          :key="index"
        >
          <h2 class="cur">{{ deparment.depname }}</h2>
          <ul>
            <li v-for="item in deparment.children" :key="item.depcode" @click="handleLogin">
              {{ item.depname }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useDetailStore from '@/stores/modules/hospitalDetail'
import useUserStore from '@/stores/modules/user'
import { ref } from 'vue'

const currentIndex = ref<number>(0)
const handleChangeIndex = (index: number) => {
  currentIndex.value = index
  const arr = document.querySelectorAll('.cur')
  arr[index].scrollIntoView({
    behavior: 'smooth'
  })
}

const UserStore = useUserStore()
const detailStore = useDetailStore()
const handleLogin = () => {
  UserStore.LoginShow = true
}
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
.deparment-box {
  margin-top: 20px;
  width: 100%;
  height: 500px;
  display: flex;
}
.left-nav {
  width: 80px;
  height: 100%;
  ul {
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
    display: flex;
    flex-direction: column;
    li {
      flex: 1;
      color: #666;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      &.active {
        border-left: 1px solid red;
        background-color: #fff;
        color: red;
      }
    }
  }
}
.deparment-content {
  flex: 1;
  margin-left: 30px;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .deparment-title {
    h2 {
      background-color: #f1f1f1;
      color: #666;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 33%;
        color: #666;
        line-height: 30px;
        cursor: pointer;
        &:hover {
          color: #4fadeb;
        }
      }
    }
  }
}
</style>
