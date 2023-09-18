<template>
  <div class="search">
    <el-autocomplete
      v-model="hosname"
      :fetch-suggestions="handleData"
      :trigger-on-focus="false"
      @select="handleSearch"
      clearable
      placeholder="请输入医院名称"
      class="search-form"
    />
    <el-button type="primary" size="default" :icon="Search"></el-button>
  </div>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import type { HospitalSearchInfo, Content } from '@/api/home/type'
import { reqSearch } from '@/api/home'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const hosname = ref<string>('')
const handleData = async (keyword: string, callback: any) => {
  const res: HospitalSearchInfo = await reqSearch(keyword)
  const showData = res.data.map((item) => {
    return {
      value: item.hosname,
      hoscode: item.hoscode
    }
  })
  callback(showData)
}
const handleSearch = async (item: any) => {
  router.push({
    path: '/hospital/reservation',
    query: {
      hoscode: item.hoscode
    }
  })
}
</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  :deep(.el-input__wrapper) {
    width: 600px;
  }
}
</style>
