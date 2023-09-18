<template>
  <div class="tips">
    <div class="deparment">
      <div class="header">
        <div class="left">
          <i class="iconfont">&#xe688;</i>
          <span>常见科室</span>
        </div>
        <div class="right">
          <span>全部</span>
          <i class="iconfont">&#xe605;</i>
        </div>
      </div>
      <div class="content">
        <ul>
          <li>神经内科</li>
          <li>消化内科</li>
          <li>呼吸内科</li>
          <li>内科</li>
          <li>神经外科</li>
          <li>妇科</li>
          <li>产科</li>
          <li>儿科</li>
        </ul>
      </div>
    </div>
    <div class="notice">
      <div class="header">
        <div class="left">
          <i class="iconfont">&#xe666;</i>
          <span>平台公告</span>
        </div>
        <div class="right">
          <span>全部</span>
          <i class="iconfont">&#xe605;</i>
        </div>
      </div>
      <div class="content">
        <ul>
          <li>去撒打卡机不可见阿德凯撒阿里卡你留着颤抖的手没</li>
          <li>啊迪卢克取暖费两三年深么了马路两列洒水</li>
          <li>阿是开上门费税率看啊啊发放试试大快发</li>
        </ul>
      </div>
    </div>
    <div class="notice">
      <div class="header">
        <div class="left">
          <i class="iconfont">&#xff59;</i>
          <span>停诊公告</span>
        </div>
        <div class="right">
          <span>全部</span>
          <i class="iconfont">&#xe605;</i>
        </div>
      </div>
      <div class="content">
        <ul>
          <li>去撒打卡机不可见阿德凯撒阿里卡你留着颤抖的手没</li>
          <li>啊迪卢克取暖费两三年深么了马路两列洒水</li>
          <li>阿是开上门费税率看啊啊发放试试大快发</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.tips {
  color: #666;
}
.header {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    margin: 0 5px;
    font-size: 12px;
    color: #ccc;
  }
}
.deparment {
  .content {
    padding: 5px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        margin-bottom: 10px;
      }
    }
  }
}
.notice {
  .content {
    padding: 5px;
    ul {
      li {
        margin-bottom: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
