<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>实名信息认证</span>
      </div>
    </template>
    <div class="content">
      <div class="tip">
        <el-icon><InfoFilled /></el-icon>
        <p>完成实名认证后才能添加就诊人，正常进行挂号</p>
      </div>
      <div class="unfinished" v-if="userInfo?.authStatus === 0">
        <el-form
          style="width: 60%; margin: 20px auto"
          label-width="80px"
          :model="params"
          :rules="rules"
          ref="form"
        >
          <el-form-item label="用户姓名" prop="name">
            <el-input placeholder="请输入用户姓名" v-model="params.name"></el-input>
          </el-form-item>
          <el-form-item style="width: 100%" label="证件类型" prop="certificatesType">
            <el-select placeholder="请选择证件类型" v-model="params.certificatesType">
              <el-option
                :label="item.name"
                :value="item.value"
                v-for="(item, index) in typeInfo"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件号码" prop="certificatesNo">
            <el-input placeholder="请输入证件号码" v-model="params.certificatesNo"></el-input>
          </el-form-item>
          <el-form-item label="上传证件" prop="certificatesUrl">
            <el-upload
              ref="upload"
              list-type="picture-card"
              :limit="1"
              :on-exceed="handleExceed"
              :on-success="handleSuccess"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              action="/api/oss/file/fileUpload?fileHost=userAuah"
            >
              <img
                style="width: 100%; height: 100%"
                src="@/assets/images/imageUpload.jpg"
                alt="img"
              />
            </el-upload>
            <el-dialog v-model="dialogVisible">
              <img
                style="width: 100%; height: 100%"
                :src="params.certificatesUrl"
                w-full
                alt="Preview Image"
              />
            </el-dialog>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleSubmit" type="primary" size="default">提交</el-button>
            <el-button @click="handleReset">重写</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="success" v-else>
        <el-descriptions class="margin-top" :column="1" border>
          <el-descriptions-item label-align="center" width="10px">
            <template #label>
              <div class="cell-item">用户姓名</div>
            </template>
            {{ userInfo?.name }}
          </el-descriptions-item>
          <el-descriptions-item label-align="center" width="10px">
            <template #label>
              <div class="cell-item">证件类型</div>
            </template>
            {{ userInfo?.certificatesType === '10' ? '身份证' : '户口本' }}
          </el-descriptions-item>
          <el-descriptions-item label-align="center" width="10px">
            <template #label>
              <div class="cell-item">证件号码</div>
            </template>
            {{ userInfo?.certificatesNo }}
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { reqAuthentication, reqCertationType, reqUserInfo } from '@/api/user'
import type { Authentication, CertationTypeResponse, UserInfoResponse } from '@/api/user/type'
import { InfoFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { onBeforeMount, ref, reactive } from 'vue'

onBeforeMount(() => {
  getUserInfo()
  getType()
})
//获取用户信息
const userInfo = ref()
const getUserInfo = async () => {
  const res: UserInfoResponse = await reqUserInfo()
  if (res.code === 200) {
    userInfo.value = res.data
  }
}
//获取证件类型
const typeInfo = ref()
const getType = async () => {
  const res: CertationTypeResponse = await reqCertationType()
  if (res.code === 200) {
    typeInfo.value = res.data
  }
}
//收集表单数据
const params = reactive<Authentication>({
  certificatesNo: '',
  certificatesType: '',
  certificatesUrl: '',
  name: ''
})
const handleExceed = () => {
  ElMessage({
    type: 'error',
    message: '图片只能上传一张'
  })
}
//图片上传
const handleSuccess = (response: any, uploadFile: any) => {
  params.certificatesUrl = uploadFile.url
  form.value.clearValidate('certificatesUrl')
}
//预览
const dialogVisible = ref(false)
const handlePreview = () => {
  dialogVisible.value = true
}
//删除
const handleRemove = () => {
  params.certificatesUrl = ''
}
//重写
const upload = ref()
const handleReset = () => {
  //清除上传文件
  upload.value.clearFiles()
  Object.assign(params, {
    certificatesNo: '',
    certificatesType: '',
    certificatesUrl: '',
    name: ''
  })
}
//提交
const form = ref()
const handleSubmit = async () => {
  await form.value.validate()
  try {
    await reqAuthentication(params)
    //成功后再次获取用户信息
    getUserInfo()
  } catch (err) {
    ElMessage({
      type: 'error',
      message: '认证失败'
    })
  }
}
//表单校验
const validatorName = (rule: any, value: any, callback: any) => {
  const res = /^([\u4e00-\u9fa5]+){1,2}([ \u4e00-\u9fa5]+)$/.test(value)
  if (res) {
    callback()
  } else {
    callback(new Error('请输入正确的姓名'))
  }
}
const validatorType = (rule: any, value: any, callback: any) => {
  if (value === '10' || value === '20') {
    callback()
  } else {
    callback(new Error('请输入证件类型'))
  }
}
const validatorNo = (rule: any, value: any, callback: any) => {
  const sfz =
    /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[Xx\d]$/.test(value)
  const hkb = /^[\d]{9}[0-9a-zA-Z]{2}$/.test(value)
  if (sfz || hkb) {
    callback()
  } else {
    callback(new Error('请输入正确的证件号码'))
  }
}
const validatorUrl = (rule: any, value: any, callback: any) => {
  if (value.length) {
    callback()
  } else {
    callback(new Error('请上传正确的证件照'))
  }
}
const rules = {
  name: [
    {
      required: true,
      validator: validatorName
    }
  ],
  certificatesType: [
    {
      required: true,
      validator: validatorType
    }
  ],
  certificatesNo: [
    {
      required: true,
      validator: validatorNo
    }
  ],
  certificatesUrl: [
    {
      required: true,
      validator: validatorUrl
    }
  ]
}
</script>
<style lang="scss" scoped>
.content {
  padding: 0 20px;
}
.tip {
  display: flex;
  justify-content: center;
  i {
    color: #ccc;
  }
}
.unfinished,
.success {
  margin: 20px auto;
}
</style>
