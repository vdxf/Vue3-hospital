<template>
  <div class="container">
    <!-- 顶部 -->
    <HospitalTop></HospitalTop>
    <div class="content">
      <RouterView></RouterView>
    </div>
    <!-- 底部 -->
    <HospitalBottom></HospitalBottom>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  margin-top: 100px;
  width: 1200px;
  min-height: 700px;
}
</style>
