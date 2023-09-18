<template>
  <!-- 首页轮播图 -->
  <Carousel></Carousel>
  <!-- 首页搜索 -->
  <Search></Search>
  <el-row :gutter="20">
    <el-col :span="20">
      <!-- 等级组件 -->
      <Level @getLevel="getLevel"></Level>
      <!-- 地区组件 -->
      <Region @getRegion="getRegion"></Region>
      <!-- 展示医院 -->
      <div class="hospital" v-if="hospitalArr.length > 0">
        <Card
          class="item"
          v-for="(item, index) in hospitalArr"
          :key="index"
          :hospitalInfo="item"
        ></Card>
      </div>
      <el-empty description="暂无数据" v-else />
      <!-- 分页 -->
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
    </el-col>
    <el-col :span="4">
      <Tips></Tips>
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'
import Card from './card/index.vue'
import Tips from './tips/index.vue'
import { reqHospital } from '@/api/home'
import { ref, onMounted } from 'vue'
import type { Content, HospitalResponseData } from '@/api/home/type'

const pageNow = ref<number>(1)
const pageSize = ref<number>(10)
const hospitalArr = ref<Content>([])
const total = ref<number>(0)
const hostype = ref<string>('')
const districtCode = ref<string>('')
onMounted(() => {
  getHospitalData()
})
const getHospitalData = async () => {
  const res: HospitalResponseData = await reqHospital(
    pageNow.value,
    pageSize.value,
    hostype.value,
    districtCode.value
  )
  if (res.code === 200) {
    hospitalArr.value = res.data.content
    total.value = res.data.totalElements
  }
}
//页码发生变化时触发
const handlePageChange = () => {
  getHospitalData()
}
//下拉菜单发生变化时触发
const handleSizeChange = () => {
  pageNow.value = 1
  getHospitalData()
}
const getLevel = (level: string) => {
  hostype.value = level
  getHospitalData()
}
const getRegion = (region: string) => {
  districtCode.value = region
  getHospitalData()
}
</script>
<style lang="scss" scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  .item {
    width: 49%;
    margin-bottom: 10px;
  }
}
</style>
