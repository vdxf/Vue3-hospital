<template>
  <div class="top">
    <div class="content">
      <div class="left">
        <img src="@/assets/images/desktop_1.jpg" alt="logo" />
        <p>尚医通 预约挂号统一平台</p>
      </div>
      <div class="right">
        <div class="help">帮助中心</div>
        <div class="login">登录 / 注册</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
.top {
  position: fixed;
  z-index: 2023;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
}
.content {
  width: 1200px;
  height: 70px;
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
</style>
