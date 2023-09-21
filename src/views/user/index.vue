<template>
  <div class="user">
    <div class="menu">
      <div class="header">
        <el-icon><House /></el-icon>
        <span> / 会员中心</span>
      </div>
      <el-menu :default-active="activeName" class="el-menu-vertical-demo">
        <el-menu-item index="/user/certification" @click="handleJump('/user/certification')">
          <el-icon><icon-menu /></el-icon>
          <span>实名认证</span>
        </el-menu-item>
        <el-menu-item index="/user/order" @click="handleJump('/user/order')">
          <el-icon><document /></el-icon>
          <span>挂号订单</span>
        </el-menu-item>
        <el-menu-item index="/user/infomation" @click="handleJump('/user/infomation')">
          <el-icon><ChatDotRound /></el-icon>
          <span>就诊人管理</span>
        </el-menu-item>
        <el-menu-item index="/user/account" @click="handleJump('/user/account')">
          <el-icon><InfoFilled /></el-icon>
          <span>账号信息</span>
        </el-menu-item>
        <el-menu-item index="/user/feedback" @click="handleJump('/user/feedback')">
          <el-icon><Search /></el-icon>
          <span>意见反馈</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onBeforeMount, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

import {
  Document,
  Menu as IconMenu,
  ChatDotRound,
  InfoFilled,
  Search,
  House
} from '@element-plus/icons-vue'
const activeName = ref('')
onBeforeMount(() => {
  activeName.value = route.path
})
watch(route, (nv) => {
  activeName.value = nv.path
})
const handleJump = (path: string) => {
  router.push({
    path: path
  })
}
</script>
<style lang="scss" scoped>
.user {
  margin-top: 10px;
  display: flex;
  .menu {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content {
    width: 80%;
  }
}
.header {
  display: flex;
  color: #666;
  span {
    margin-left: 5px;
  }
}
</style>
