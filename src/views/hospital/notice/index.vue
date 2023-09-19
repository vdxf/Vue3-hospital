<template>
  <div class="notice">
    <h1>{{ detailStore.hospitalData.hospital?.hosname }}预约挂号须知</h1>
    <span>为了方便您早日康复，请您认真阅读预约挂号须知：</span>
    <div class="content">
      <div class="first">
        <span>一、 预约实名制：</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi sapiente architecto
          ratione sequi vel fugiat aut, illo vero deleniti numquam neque quos hic, totam fuga
          molestias, repellat blanditiis sint odit reprehenderit. Voluptas molestiae dolores
          eligendi maxime ratione sunt at vel unde praesentium nulla id fugiat labore, nobis
          pariatur. Debitis, aut.
        </p>
      </div>
      <div class="first">
        <span>二、 预约挂号：</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eaque ad impedit eos dolor
          recusandae nostrum? Cum nesciunt iure nemo. Placeat iusto sunt harum esse illo quis
          voluptatem assumenda ratione, eos vitae dolore asperiores dignissimos aliquam quas
          facilis! Nostrum, atque provident. Quo ipsa distinctio ullam animi doloribus porro
          deleniti mollitia.
        </p>
      </div>
      <div class="first">
        <span>三、 取消预约：</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate sunt modi
          exercitationem similique voluptates, ipsa nesciunt nostrum accusantium magnam autem omnis
          nisi illum deserunt harum consectetur incidunt, voluptas alias minima cumque repellat
          commodi? Odio accusantium corporis, voluptate neque sunt necessitatibus eos fugiat.
          Doloribus quae sapiente repellendus illum quod hic assumenda.
        </p>
      </div>
      <div class="first">
        <span>四、 爽约处理：</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero delectus blanditiis
          beatae quam in sit ipsum est ipsa atque inventore eum obcaecati saepe aliquid explicabo,
          nostrum non quod minus eius tempora quia recusandae magni reprehenderit. Ad, quibusdam?
          Quod modi fuga voluptatem ipsam blanditiis soluta placeat nisi ex quae laudantium.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useDetailStore from '@/stores/modules/hospitalDetail'
const detailStore = useDetailStore()
</script>
<style lang="scss" scoped>
.notice {
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    font-size: 20px;
  }
  span {
    margin: 10px 0;
    color: #666;
  }
}
.content {
  margin-top: 10px;
  .first {
    span {
      color: #000;
      font-weight: 600;
    }
    p {
      color: #666;
      margin: 20px 0;
      line-height: 30px;
    }
  }
}
</style>
