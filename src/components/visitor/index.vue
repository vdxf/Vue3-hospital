<template>
  <div class="visitor">
    <div class="top">
      <div class="left">
        <span class="free">{{ visitor.isInsure === 1 ? '医保' : '自费' }}</span>
        <span>{{ visitor.name }}</span>
      </div>
      <div class="right">
        <el-button
          circle
          type="primary"
          size="default"
          :icon="Edit"
          @click.stop="handleUpdata"
        ></el-button>
        <el-popconfirm
          :title="`你确认要删除${visitor.name}吗？`"
          width="250px"
          @confirm="handleDelete"
        >
          <template #reference>
            <el-button
              circle
              type="danger"
              size="default"
              :icon="Delete"
              v-if="$route.path === '/user/infomation'"
            ></el-button>
          </template>
        </el-popconfirm>
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
      <transition name="checked" v-if="$route.path !== '/user/infomation'">
        <div class="checked" v-if="index === currentIndex">已选择</div>
      </transition>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reqDelete } from '@/api/user'
import { Edit, Delete } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const props = defineProps(['visitor', 'index', 'currentIndex'])
const emit = defineEmits(['changeScene', 'remove'])
//更新就诊人数据
const handleUpdata = () => {
  if (route.path === '/user/infomation') {
    emit('changeScene', props.visitor)
  } else {
    router.push({
      path: '/user/infomation',
      query: {
        type: 'edit',
        id: props.visitor.id
      }
    })
  }
}
//删除
const handleDelete = async () => {
  try {
    await reqDelete(props.visitor.id)
    ElMessage({
      type: 'success',
      message: '删除成功'
    })
    emit('remove')
  } catch (err) {
    ElMessage({
      type: 'error',
      message: '删除失败'
    })
  }
}
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
  position: relative;
  ul {
    padding: 10px 0 20px 20px;
    li {
      margin: 10px 0;
      height: 20px;
      line-height: 20px;
    }
  }
}
.checked {
  position: absolute;
  left: 15%;
  top: 15%;
  width: 200px;
  height: 200px;
  color: red;
  border: 2px dashed red;
  border-radius: 50%;
  opacity: 0.2;
  transform: rotate(40deg);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.checked-enter-from {
  transform: scale(1);
}
.checked-enter-active {
  transition: all 0.5;
}
.checked-enter-to {
  transform: scale(1.2);
}
</style>
