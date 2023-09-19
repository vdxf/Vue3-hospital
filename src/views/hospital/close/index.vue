<template>
  <div class="content">
    <h1>{{ detailStore.hospitalData.hospital?.hosname }}停诊信息</h1>
    <el-empty description="暂无信息" />
  </div>
</template>
<script lang="ts" setup>
import useDetailStore from '@/stores/modules/hospitalDetail'
const detailStore = useDetailStore()
</script>
<style lang="scss" scoped>
.content {
  h1 {
    text-align: center;
    font-size: 20px;
  }
}
</style>
