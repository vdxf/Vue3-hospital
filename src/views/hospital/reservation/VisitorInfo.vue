<template>
  <div class="visitor">
    <h1>确认挂号信息</h1>
    <div class="user-card">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>请选择就诊人</span>
            <el-button type="primary" size="default">
              <i class="iconfont">&#xe655;</i>
              添加就诊人
            </el-button>
          </div>
        </template>
        <div class="user-info">
          <VISITOR
            class="user-item"
            v-for="visitor in visitorList"
            :key="visitor.id"
            :visitor="visitor"
          ></VISITOR>
        </div>
      </el-card>
    </div>
    <div class="doctor-card">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>挂号信息</span>
          </div>
        </template>
        <el-descriptions class="margin-top" :column="2" border>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊日期：</div>
            </template>
            {{ doctorInfo.workDate }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊医院：</div>
            </template>
            {{ doctorInfo.param?.hosname }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">就诊科室：</div>
            </template>
            {{ doctorInfo.param?.depname }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">医生姓名：</div>
            </template>
            {{ doctorInfo.docname }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">医生职称：</div>
            </template>
            {{ doctorInfo.title }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">医生专长：</div>
            </template>
            {{ doctorInfo.skill }}
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">医生服务费：</div>
            </template>
            {{ doctorInfo.amount }}
          </el-descriptions-item>
        </el-descriptions>
      </el-card>
    </div>
    <div class="footer-button">
      <button>确认挂号</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import VISITOR from '@/components/visitor/index.vue'
import { reqVisitorData, reqDoctorData } from '@/api/hospital'
import type { VisitorResponse, RegisterDoctor } from '@/api/hospital/type'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
onMounted(() => {
  reqVisitorList()
  reqDoctorInfo()
})
//获取就诊人信息
const visitorList = ref<any>({})
const reqVisitorList = async () => {
  const res: VisitorResponse = await reqVisitorData()
  visitorList.value = res.data
}
//获取医生信息
const doctorInfo = ref<any>({})
const reqDoctorInfo = async () => {
  const res: RegisterDoctor = await reqDoctorData(route.query.doctorId as string)
  doctorInfo.value = res.data
}
</script>
<style lang="scss" scoped>
.visitor {
  margin: 20px 0 100px;
  h1 {
    font-weight: 600;
    color: #666;
    font-size: 20px;
  }
}
.user-card {
  margin: 20px 0;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 16px;
  }
}
.iconfont {
  margin-right: 5px;
}
.user-info {
  display: flex;
  flex-wrap: wrap;
  .user-item {
    width: 30%;
    margin: 0 20px 20px 0;
  }
}
.footer-button {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    border-radius: 10px;
    width: 100px;
    height: 40px;
    color: #fff;
    background-color: rgb(114, 197, 241);
    &:hover {
      background-color: rgb(37, 148, 208);
    }
  }
}
</style>
