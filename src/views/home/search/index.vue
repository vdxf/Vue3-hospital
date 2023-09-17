<template>
  <div class="search">
    <el-autocomplete clearable placeholder="请输入医院名称" class="search-form" />
    <el-button type="primary" size="default" :icon="Search"></el-button>
  </div>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  :deep(.el-input__wrapper) {
    width: 600px;
  }
}
</style>
