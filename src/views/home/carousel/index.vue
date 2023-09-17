<template>
  <el-carousel height="350px">
    <el-carousel-item v-for="item in 4" :key="item">
      <img src="@/assets/images/desktop_1.jpg" alt="img" />
    </el-carousel-item>
  </el-carousel>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
img {
  width: 100%;
  height: 350px;
}
</style>
