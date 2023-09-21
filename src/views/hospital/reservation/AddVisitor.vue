<template>
  <p>添加就诊人</p>
  <el-divider content-position="left">就诊人信息</el-divider>
  <el-form>
    <el-form-item label="用户姓名">
      <el-input placeholder="请您输入用户姓名"></el-input>
    </el-form-item>
    <el-form-item label="证件类型">
      <el-select placeholder="请您选择证件类型" style="width: 100%">
        <el-option label="身份证"></el-option>
        <el-option label="户口本"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="证件号码">
      <el-input placeholder="请您输入相应证件号码"></el-input>
    </el-form-item>
    <el-form-item label="用户性别">
      <el-radio-group>
        <el-radio :label="1">男</el-radio>
        <el-radio :label="0">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="出生日期">
      <el-date-picker type="date" placeholder="请您选择出生日期" />
    </el-form-item>
    <el-form-item label="手机号码">
      <el-input placeholder="请您输入手机号码"></el-input>
    </el-form-item>
  </el-form>
  <el-divider content-position="left">建档信息（完善后部分医院首次就诊不排队建档）</el-divider>
  <el-form>
    <el-form-item label="婚姻状况">
      <el-radio-group>
        <el-radio :label="1">未婚</el-radio>
        <el-radio :label="0">已婚</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="自费/医保">
      <el-radio-group>
        <el-radio :label="1">自费</el-radio>
        <el-radio :label="0">医保</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="当前住址">
      <el-select clearable placeholder="请您选择证件类型">
        <el-option v-for="item in 10" :key="item" :label="item"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="详细地址">
      <el-input placeholder="请您填写详细地址"></el-input>
    </el-form-item>
  </el-form>
  <el-divider content-position="left">联系人信息（选填）</el-divider>
  <el-form>
    <el-form-item label="用户姓名">
      <el-input placeholder="请您输入用户姓名"></el-input>
    </el-form-item>
    <el-form-item label="证件类型">
      <el-select placeholder="请您选择证件类型" style="width: 100%">
        <el-option label="身份证"></el-option>
        <el-option label="户口本"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="证件号码">
      <el-input placeholder="请您输入相应证件号码"></el-input>
    </el-form-item>
    <el-form-item label="手机号码">
      <el-input placeholder="请您输入手机号码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="default">提交</el-button>
      <el-button type="primary" size="default">重写</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
p {
  margin: 20px 0;
}
</style>
