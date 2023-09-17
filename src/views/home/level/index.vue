<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级：</div>
      <ul class="hospital">
        <li>全部</li>
        <li>三级甲等</li>
        <li>三级乙等</li>
        <li>二级甲等</li>
        <li>二级乙等</li>
        <li>一级</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.level {
  color: #666;
  h1 {
    font-weight: 900;
    margin-bottom: 10px;
  }
}
.content {
  display: flex;
  .left {
    margin-right: 10px;
  }
  .hospital {
    display: flex;
    li {
      margin-right: 10px;
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
