<template>
  <div class="hospital">
    <div class="menu">
      <div class="header">
        <el-icon><House /></el-icon>
        <span> / 医院信息</span>
      </div>
      <el-menu :default-active="activeName" class="el-menu-vertical-demo">
        <el-menu-item index="/hospital/reservation" @click="$router.push('/hospital/reservation')">
          <el-icon><icon-menu /></el-icon>
          <span>预约挂号</span>
        </el-menu-item>
        <el-menu-item index="/hospital/detail" @click="$router.push('/hospital/detail')">
          <el-icon><document /></el-icon>
          <span>医院详情</span>
        </el-menu-item>
        <el-menu-item index="/hospital/notice" @click="$router.push('/hospital/notice')">
          <el-icon><ChatDotRound /></el-icon>
          <span>预约通知</span>
        </el-menu-item>
        <el-menu-item index="/hospital/close" @click="$router.push('/hospital/close')">
          <el-icon><InfoFilled /></el-icon>
          <span>停诊信息</span>
        </el-menu-item>
        <el-menu-item index="/hospital/search" @click="$router.push('/hospital/search')">
          <el-icon><Search /></el-icon>
          <span>查询/取消</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useDetailStore from '@/stores/modules/hospitalDetail'
import { onBeforeMount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const detailStore = useDetailStore()
import {
  Document,
  Menu as IconMenu,
  ChatDotRound,
  InfoFilled,
  Search,
  House
} from '@element-plus/icons-vue'
const activeName = ref('')
onBeforeMount(() => {
  activeName.value = route.path
  detailStore.getHospital(route.query.hoscode)
})
watch(route, (nv) => {
  activeName.value = nv.path
})
</script>
<style lang="scss" scoped>
.hospital {
  margin-top: 10px;
  display: flex;
  .menu {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content {
    width: 80%;
  }
}
.header {
  display: flex;
  color: #666;
  span {
    margin-left: 5px;
  }
}
</style>
