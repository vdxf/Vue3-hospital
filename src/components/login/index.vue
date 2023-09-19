<template>
  <div class="container">
    <el-dialog v-model="UserStore.LoginShow" title="用户登录" ref="dialog" @close="handleClose">
      <div class="content">
        <el-row>
          <el-col :span="12">
            <div class="login-box">
              <div class="tel-login" v-if="wechat">
                <el-form :model="loginForm" :rules="rules" ref="form">
                  <el-form-item prop="phone">
                    <el-input
                      placeholder="请输入手机号码"
                      :prefix-icon="User"
                      v-model="loginForm.phone"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="code">
                    <el-input
                      placeholder="请输入手机验证码"
                      :prefix-icon="Lock"
                      v-model="loginForm.code"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button :disabled="!isPhone || flag" @click="handleGetcode">
                      <CountDown v-if="flag" :flag="flag" @getFlag="getFlag"></CountDown>
                      <span v-else>获取验证码</span>
                    </el-button>
                  </el-form-item>
                  <el-button
                    :disabled="!isPhone || loginForm.code.length !== 6"
                    style="width: 100%"
                    type="primary"
                    size="default"
                    @click="handleLogin"
                  >
                    <span>用户登录</span>
                  </el-button>
                </el-form>
                <div class="button" @click="wechat = !wechat">
                  <span>微信扫码登录</span>
                  <i class="iconfont">&#xe601;</i>
                </div>
              </div>
              <div class="wx-login" v-else>
                <p>微信登录</p>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="img-box">
              <div class="top">
                <div class="left-img">
                  <img src="@/assets/images/wechat.jpg" alt="img" />
                  <i class="iconfont">&#xe601;</i>
                  <span>微信扫一扫关注</span>
                  <span>"快速预约挂号"</span>
                </div>
                <div class="right-img">
                  <img src="@/assets/images/loadingApp.jpg" alt="img" />
                  <i class="iconfont">&#xe671;</i>
                  <span>扫一扫下载</span>
                  <span>"预约挂号"APP</span>
                </div>
              </div>
              <div class="buttom">
                <span>官方指定平台</span>
                <span>快速挂号 安全放心</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import CountDown from '@/components/countdown/index.vue'
import useUserStore from '@/stores/modules/user'
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { ref, reactive, computed } from 'vue'
const form = ref<any>()
const UserStore = useUserStore()
const wechat = ref<boolean>(true)
const loginForm = reactive({
  phone: '',
  code: ''
})
const flag = ref<boolean>(false)
const isPhone = computed(() => {
  return /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/.test(
    loginForm.phone
  )
})
const handleGetcode = async () => {
  flag.value = true
  try {
    await UserStore.getcode(loginForm.phone)
    loginForm.code = UserStore.code
  } catch (err) {
    ElMessage({
      type: 'error',
      message: (err as Error).message
    })
  }
}
const getFlag = (val: boolean) => {
  flag.value = val
}
const handleLogin = async () => {
  await form.value.validate()
  try {
    await UserStore.getLogin(loginForm)
    UserStore.LoginShow = false
  } catch (err) {
    ElMessage({
      type: 'error',
      message: (err as Error).message
    })
  }
}
//清空表单
const handleClose = () => {
  loginForm.phone = ''
  loginForm.code = ''
  form.value.resetFields()
}
//表单校验规则
const validatorPhone = (rule: any, value: any, callBack: any) => {
  const isPhone =
    /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/.test(
      loginForm.phone
    )
  if (isPhone) {
    callBack()
  } else {
    callBack(new Error('请输入正确的手机号码'))
  }
}
const validatorCode = (rule: any, value: any, callBack: any) => {
  const isCode = /^\d{6}$/.test(loginForm.code)
  if (isCode) {
    callBack()
  } else {
    callBack(new Error('请输入正确验证码'))
  }
}
const rules = {
  phone: [{ trigger: 'blur', validator: validatorPhone }],
  code: [{ trigger: 'blur', validator: validatorCode }]
}
</script>
<style lang="scss" scoped>
.container {
  z-index: 9999;
  :deep(.el-dialog__body) {
    border-top: 1px solid red;
  }
}
.login-box {
  border: 1px solid #ccc;
  padding: 20px;
}
.button {
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin: 10px 0;
  }
  i {
    font-size: 40px;
    color: rgb(10, 183, 14);
  }
}
.img-box {
  padding: 0 30px;
  display: flex;
  flex-direction: column;
}
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  img {
    width: 120px;
    height: 120px;
  }
  .left-img,
  .right-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    i,
    span {
      margin: 5px 0;
    }
  }
}
.buttom {
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin: 10px 0;
    font-size: 20px;
    color: #ccc;
  }
}
</style>
