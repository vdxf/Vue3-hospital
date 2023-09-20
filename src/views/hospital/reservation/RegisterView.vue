<template>
  <div class="register">
    <div class="top">
      <div class="hosname" @click="$router.push('/hospital')">
        {{ registerList.baseMap?.hosname }}
      </div>
      <span> | </span>
      <div class="deparment">{{ registerList.baseMap?.bigname }}</div>
      <span> · </span>
      <div class="title">{{ registerList.baseMap?.depname }}</div>
    </div>
    <div class="center">
      <h1>{{ registerList.baseMap?.workDateString }}</h1>
      <div class="group">
        <div
          class="item"
          :class="{
            active: item.status == -1 || item.availableNumber === -1,
            cur: item.workDate === workTime.workDate
          }"
          v-for="(item, index) in registerList.bookingScheduleList"
          :key="index"
          @click="handleSchedulingData(item)"
        >
          <div class="time">{{ item.workDate }} - {{ item.dayOfWeek }}</div>
          <div class="content">
            <div v-if="item.status === -1">停止挂号</div>

            <div v-if="item.status === 0">
              {{ item.availableNumber === -1 ? '约满了' : `有号 (${item.availableNumber})` }}
            </div>
            <div v-if="item.status === 1">即将放号</div>
          </div>
        </div>
      </div>
      <div class="page">
        <el-pagination
          layout="prev, pager, next"
          v-model:current-page="page"
          @current-change="reqRegisterData"
          :total="registerList.total"
        />
      </div>
    </div>
    <div class="bottom">
      <div class="null" v-if="workTime?.status === 1">{{ workTime.workDate }} 放号</div>
      <div class="detail" v-else>
        <div class="morning">
          <div class="inner">
            <i class="iconfont">&#xe701;</i>
            上午号源
          </div>
          <div class="doctor">
            <div class="doctor-item" v-for="doctor in morningArr" :key="doctor.id">
              <span>{{ doctor.title }} | {{ doctor.docname }}</span>
              <div class="item-content">
                <p>{{ doctor.skill }}</p>
                <span>￥{{ doctor.amount }}</span>
                <button @click="handleVisitor(doctor)">剩余{{ doctor.availableNumber }}</button>
              </div>
            </div>
          </div>
        </div>
        <div class="aftenoon">
          <div class="inner">
            <i class="iconfont">&#xe692;</i>
            下午号源
          </div>
          <div class="doctor">
            <div class="doctor-item" v-for="doctor in afterArr" :key="doctor.id">
              <span>{{ doctor.title }} | {{ doctor.docname }}</span>
              <div class="item-content">
                <p>{{ doctor.skill }}</p>
                <span>￥{{ doctor.amount }}</span>
                <button @click="handleVisitor(doctor)">剩余{{ doctor.availableNumber }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import { reqRegisterList, reqScheduling } from '@/api/hospital'
import { useRoute, useRouter } from 'vue-router'
import type { Doctor, DoctorArr, DoctorResponse, RegisterResponse } from '@/api/hospital/type'
const route = useRoute()
const router = useRouter()
const page = ref<number>(1)
const limit = ref<number>(6)
const registerList = ref<any>({})
const schedulingData = ref<DoctorArr>()
const workTime = ref<any>()

onMounted(() => {
  reqRegisterData()
})
//获取挂号信息
const reqRegisterData = async () => {
  const res: RegisterResponse = await reqRegisterList(
    page.value,
    limit.value,
    route.query.hoscode as string,
    route.query.depcode as string
  )
  if (res.code === 200) {
    registerList.value = res.data
    workTime.value = registerList.value.bookingScheduleList[0]
    handleSchedulingData(workTime.value)
  }
}
const handleSchedulingData = async (item: any) => {
  workTime.value = item
  const res: DoctorResponse = await reqScheduling(
    route.query.hoscode as string,
    route.query.depcode as string,
    workTime.value.workDate
  )
  if (res.code === 200) {
    schedulingData.value = res.data
  }
}
const morningArr = computed(() => {
  return schedulingData.value?.filter((doctor: Doctor) => {
    return doctor.workTime === 0
  })
})
const afterArr = computed(() => {
  return schedulingData.value?.filter((doctor: Doctor) => {
    return doctor.workTime === 1
  })
})
//跳转就诊人信息
const handleVisitor = (doctor: Doctor) => {
  router.push({
    path: '/hospital/visitor',
    query: {
      doctorId: doctor.id
    }
  })
}
</script>
<style lang="scss" scoped>
.top {
  margin: 20px 0;
  display: flex;
  align-items: center;
  color: #666;
  span {
    margin: 0 10px;
  }
}
.hosname:hover {
  cursor: pointer;
  color: #30cbea;
}
.center {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 600;
    margin: 10px 0;
  }
}
.group {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.item {
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  flex: 1;
  border: 1px solid #30cbea;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  &.cur {
    transform: scale(1.1);
    box-shadow: 2px 2px 2px #ccc;
    color: #307aea;
    border: 3px solid #307aea;
  }
  &.active {
    border: 2px solid #ccc;
    color: #666;
    .time {
      background-color: #ccc;
    }
  }
}
.time {
  width: 100%;
  background-color: #30cbea;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.content {
  height: 60px;
  line-height: 60px;
}
.page {
  margin: 20px 0;
}
.bottom {
  margin-top: 20px;
  .null {
    text-align: center;
    color: #30cbea;
    font-size: 20px;
    font-weight: 600;
  }
}
.morning,
.aftenoon {
  .inner {
    margin: 50px 0;
    font-size: 20px;
  }
  i {
    font-size: 16px;
    color: #30cbea;
  }
}
.doctor-item {
  border-bottom: 1px solid #ccc;
  margin: 20px 0;

  span {
    color: #30cbea;
    font-size: 16px;
  }
}
.item-content {
  display: flex;
  align-items: center;
  p {
    flex: 1;
    margin: 10px 0;
    color: #888;
  }
  span {
    margin: 0 50px;
    font-size: 12px;
    color: #666;
  }
  button {
    cursor: pointer;
    background-color: #30cbea;
    border-radius: 6px;
    color: #fff;
    width: 100px;
    height: 40px;
    margin-bottom: 10px;
    &:hover {
      background-color: #5ee4ff;
    }
  }
}
</style>
