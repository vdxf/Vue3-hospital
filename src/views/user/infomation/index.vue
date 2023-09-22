<template>
  <div class="visitor">
    <div class="user-card" v-if="!showAdd">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>就诊人管理</span>
            <el-button type="primary" size="default" @click="handleAddVisitor">
              <i class="iconfont">&#xe655;</i>
              添加就诊人
            </el-button>
          </div>
        </template>
        <div class="user-info">
          <VISITOR
            @changeScene="changeScene"
            @remove="remove"
            class="user-item"
            v-for="(visitor, index) in visitorList"
            :key="visitor.id"
            :visitor="visitor"
            :index="index"
          ></VISITOR>
        </div>
      </el-card>
    </div>
    <div class="add" v-else>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>添加就诊人</span>
          </div>
        </template>
        <el-divider content-position="left">就诊人信息</el-divider>
        <el-form :rules="rules" :model="userParams" ref="form" label-width="80">
          <el-form-item label="用户姓名" prop="name">
            <el-input placeholder="请您输入用户姓名" v-model="userParams.name"></el-input>
          </el-form-item>
          <el-form-item label="证件类型" prop="certificatesType">
            <el-select
              placeholder="请您选择证件类型"
              style="width: 100%"
              v-model="userParams.certificatesType"
            >
              <el-option
                :label="item.name"
                :value="item.value"
                v-for="item in typeInfo"
                :key="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件号码" prop="certificatesNo">
            <el-input
              placeholder="请您输入相应证件号码"
              v-model="userParams.certificatesNo"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户性别">
            <el-radio-group v-model="userParams.sex">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="出生日期">
            <el-date-picker
              type="date"
              placeholder="请您选择出生日期"
              value-format="YYYY-MM-DD"
              v-model="userParams.birthdate"
            />
          </el-form-item>
          <el-form-item label="手机号码" prop="phone">
            <el-input placeholder="请您输入手机号码" v-model="userParams.phone"></el-input>
          </el-form-item>
        </el-form>
        <el-divider content-position="left"
          >建档信息（完善后部分医院首次就诊不排队建档）</el-divider
        >
        <el-form label-width="80">
          <el-form-item label="婚姻状况">
            <el-radio-group v-model="userParams.isMarry">
              <el-radio :label="0">未婚</el-radio>
              <el-radio :label="1">已婚</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="自费/医保">
            <el-radio-group v-model="userParams.isInsure">
              <el-radio :label="0">自费</el-radio>
              <el-radio :label="1">医保</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="当前住址">
            <el-cascader :props="props" v-model="userParams.addressSelected" />
          </el-form-item>
          <el-form-item label="详细地址">
            <el-input placeholder="请您填写详细地址" v-model="userParams.address"></el-input>
          </el-form-item>
        </el-form>
        <el-divider content-position="left">联系人信息（选填）</el-divider>
        <el-form label-width="80">
          <el-form-item label="用户姓名">
            <el-input placeholder="请您输入用户姓名" v-model="userParams.contactsName"></el-input>
          </el-form-item>
          <el-form-item label="证件类型">
            <el-select
              placeholder="请您选择证件类型"
              style="width: 100%"
              v-model="userParams.contactCertificatesType"
            >
              <el-option
                :label="item.name"
                :value="item.value"
                v-for="item in typeInfo"
                :key="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="证件号码">
            <el-input
              placeholder="请您输入相应证件号码"
              v-model="userParams.contactCertificatesNo"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input placeholder="请您输入手机号码" v-model="userParams.contactsPhone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="default" @click="handleSubmit">提交</el-button>
            <el-button type="primary" size="default" @click="reset">重写</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import VISITOR from '@/components/visitor/index.vue'
import { reqVisitorData } from '@/api/hospital'
import { reqAddOrUpdateVisitor, reqCertationType, reqCity } from '@/api/user'
import type { CascaderProps } from 'element-plus'
import type { VisitorArr, VisitorResponse } from '@/api/hospital/type'
import type { AddOrUpdate, CertationTypeResponse } from '@/api/user/type'
import { ref, onMounted, reactive, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const showAdd = ref<boolean>(false)
onMounted(() => {
  reqVisitorList()
  getType()
  if (route.query.type === 'add') {
    showAdd.value = true
  } else {
    showAdd.value = false
  }
  if (route.query.type === 'edit') {
    showAdd.value = true
  }
})
//获取证件类型
const typeInfo = ref()
const getType = async () => {
  const res: CertationTypeResponse = await reqCertationType()
  if (res.code === 200) {
    typeInfo.value = res.data
  }
}
//获取城市数据
const props: CascaderProps = {
  lazy: true,
  async lazyLoad(node: any, resolve: any) {
    const res = await reqCity(node.data.id || '86')
    const showData = res.data.map((item: any) => {
      return {
        label: item.name,
        value: item.value,
        leaf: !item.hasChildren,
        id: item.id
      }
    })
    resolve(showData)
  }
}
//获取就诊人列表
const visitorList = ref<VisitorArr>()
const reqVisitorList = async () => {
  const res: VisitorResponse = await reqVisitorData()
  visitorList.value = res.data
}
//跳转添加就诊人
const handleAddVisitor = () => {
  //清空上一次的数据
  reset()
  showAdd.value = true
}
//重写
const reset = () => {
  Object.assign(userParams, {
    id: null,
    name: '',
    certificatesType: '',
    certificatesNo: '',
    sex: 0,
    birthdate: '',
    phone: '',
    isMarry: 0,
    isInsure: 0,
    addressSelected: [],
    address: '',
    contactsName: '',
    contactCertificatesType: '',
    contactCertificatesNo: '',
    contactsPhone: ''
  })
}
//收集新增就诊人信息
const userParams = reactive<AddOrUpdate>({
  name: '',
  certificatesType: '',
  certificatesNo: '',
  sex: 0,
  birthdate: '',
  phone: '',
  isMarry: 0,
  isInsure: 0,
  addressSelected: [],
  address: '',
  contactsName: '',
  contactCertificatesType: '',
  contactCertificatesNo: '',
  contactsPhone: ''
})
//提交
const handleSubmit = async () => {
  await form.value.validate()
  // 新增
  try {
    if (route.query.type) {
      router.go(-1)
    } else {
      await reqAddOrUpdateVisitor(userParams)
      showAdd.value = false
      reqVisitorList()
    }
    ElMessage({
      type: 'success',
      message: userParams.id ? '更新成功' : '新增成功'
    })
  } catch (err) {
    ElMessage({
      type: 'error',
      message: userParams.id ? '更新失败' : '新增失败'
    })
  }
}
const changeScene = (visitor: AddOrUpdate) => {
  showAdd.value = true
  //收集已有就诊人信息
  Object.assign(userParams, visitor)
}
const remove = () => {
  reqVisitorList()
}
watch(
  () => visitorList.value,
  () => {
    if (route.query.type === 'edit') {
      const user = visitorList.value?.find((item: any) => {
        return item.id == route.query.id
      })
      Object.assign(userParams, user)
    }
  }
)

//表单校验
const form = ref()
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
const validatorPhone = (rule: any, value: any, callback: any) => {
  const res = /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/.test(
    value
  )
  if (res) {
    callback()
  } else {
    callback(new Error('请输入正确的手机号'))
  }
}
const validatorLength = (rule: any, value: any, callback: any) => {
  if (value.length) {
    callback()
  } else {
    callback(new Error('内容不能为空'))
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
  phone: [
    {
      required: true,
      validator: validatorPhone
    }
  ],
  value: [
    {
      required: true,
      validator: validatorLength
    }
  ]
}
</script>
<style lang="scss" scoped>
.visitor {
  margin: 20px 0 100px;
  h1 {
    font-weight: 600;
    color: #666;
    font-size: 20px;
  }
}
.user-card {
  margin: 20px 0;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 16px;
  }
}
.iconfont {
  margin-right: 5px;
}
.user-info {
  display: flex;
  flex-wrap: wrap;
  .user-item {
    width: 30%;
    margin: 0 20px 20px 0;
  }
}
:deep(.el-divider) {
  margin: 40px 0;
}
:deep(.el-form) {
  width: 50%;
  margin-left: 130px;
}
</style>
