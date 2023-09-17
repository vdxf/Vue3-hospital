<template>
  <div class="region">
    <div class="content">
      <div class="left">地区：</div>
      <ul>
        <li>全部</li>
        <li v-for="item in 30" :key="item">昌平区</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.region {
  color: #666;
  margin-top: 10px;
}
.content {
  display: flex;
  .left {
    margin-right: 10px;
    white-space: nowrap;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: 10px;
      margin-bottom: 10px;
      &:first-child {
        color: rgb(63, 167, 223);
      }
    }
    li:hover {
      color: rgb(63, 167, 223);
      cursor: pointer;
    }
  }
}
</style>
