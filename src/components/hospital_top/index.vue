<template>
  <div class="top">
    <div class="content">
      <div class="left" @click="$router.push('/home')">
        <img src="@/assets/images/desktop_1.jpg" alt="logo" />
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <div class="help">帮助中心</div>
        <div class="login" @click="handleLogin" v-if="!UserStore.userInfo.token">登录 / 注册</div>
        <div class="userInfo" v-else>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ UserStore.userInfo.name }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>实名认证</el-dropdown-item>
                <el-dropdown-item>挂号订单</el-dropdown-item>
                <el-dropdown-item>就诊人管理</el-dropdown-item>
                <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import useUserStore from '@/stores/modules/user'
const UserStore = useUserStore()
import router from '@/router'

//登录
const handleLogin = () => {
  UserStore.LoginShow = true
}
//退出登录
const handleLogout = () => {
  UserStore.logout()
  router.replace('/home')
}
</script>
<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.content {
  width: 1200px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.left {
  display: flex;
  align-items: center;
  img {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 10px;
  }
  p {
    font-size: 20px;
    color: rgb(92, 185, 231);
  }
}
.right {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #aaa;
  .help {
    margin-right: 10px;
  }
}
.login,
.userInfo {
  cursor: pointer;
  &:hover {
    color: #4fadeb;
  }
}
</style>
