<template>
  <div class="visitor">
    <div class="top">
      <div class="left">
        <span class="free">{{ visitor.isInsure === 1 ? '医保' : '自费' }}</span>
        <span>{{ visitor.name }}</span>
      </div>
      <div class="right">
        <el-button circle type="primary" size="default" :icon="Edit"></el-button>
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li>证件类型：{{ visitor.param.certificatesTypeString }}</li>
        <li>证件号码：{{ visitor.certificatesNo }}</li>
        <li>用户性别：{{ visitor.sex === 0 ? '女' : '男' }}</li>
        <li>出生日期：{{ visitor.birthdate }}</li>
        <li>手机号码：{{ visitor.phone }}</li>
        <li>婚姻状况：{{ visitor.isMarry }}</li>
        <li>当前住址：{{ visitor.param.cityString }}</li>
        <li>详细地址：{{ visitor.param.fullAddress }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Edit } from '@element-plus/icons-vue'
defineProps(['visitor'])
</script>
<style lang="scss" scoped>
.visitor {
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 12px #ccc;
}
.top {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  height: 60px;
  background-color: #f1f1f1;
}
.left {
  font-size: 16px;
  color: #666;
  .free {
    border-radius: 4px;
    background-color: #fff;
    padding: 3px;
    margin-right: 10px;
    font-size: 12px;
  }
}
.right {
  button {
    width: 30px;
    height: 30px;
  }
}
.bottom {
  display: flex;
  flex-direction: column;
  ul {
    padding: 10px 0 20px 20px;
    li {
      margin: 10px 0;
      height: 20px;
      line-height: 20px;
    }
  }
}
</style>
