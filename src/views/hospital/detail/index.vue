<template>
  <div class="detail">
    <div class="header">
      <div class="title">{{ detailStore.hospitalData.hospital?.hosname }}</div>
      <i class="iconfont">&#xe62a;</i>
      <span>{{ detailStore.hospitalData.hospital?.param.hostypeString }}</span>
    </div>
    <div class="content">
      <div class="left">
        <img
          :src="`data:image/jpeg;base64,` + detailStore.hospitalData.hospital?.logoData"
          alt="img"
        />
      </div>
      <div class="right">
        <div class="address">
          <span>具体地址：{{ detailStore.hospitalData.hospital?.param.fullAddress }}</span>
        </div>
        <div class="route">
          <span>具体路线：{{ detailStore.hospitalData.hospital?.route }}</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <h2>医院介绍</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet cupiditate, enim quod
        dolor soluta adipisci inventore suscipit vitae. Eveniet tenetur saepe asperiores sequi!
        Excepturi nobis nisi, non quae dolor distinctio in commodi ad corporis ratione harum
        quibusdam accusantium architecto rem adipisci placeat quod quaerat? Repellendus pariatur
        mollitia ipsa, dolorum natus cum ad corrupti nesciunt error, repellat ipsam facere eaque
        voluptas voluptatum. Fugit tempora adipisci quod nulla odio porro, doloremque est tenetur
        accusamus commodi aut id suscipit deserunt quidem ipsum beatae fuga. Quo voluptates
        praesentium, possimus est nisi asperiores inventore necessitatibus totam officiis. Accusamus
        facilis fuga sint itaque odit id maxime laudantium quis a expedita placeat, sed neque
        repellendus suscipit quidem dolorum rerum inventore optio earum modi assumenda illum.
        Expedita enim nemo quidem quos, quisquam fugiat nihil, sequi accusantium quo eius in. Quasi
        nihil dolorum eveniet eius omnis fugit rem vel vero possimus velit quis molestias porro
        officiis tempore, iusto ipsam harum labore placeat maxime. Distinctio ducimus laboriosam
        quisquam earum, rerum similique optio officia, doloremque possimus dignissimos, pariatur
        mollitia? Expedita cumque possimus quo vero repellat laborum quaerat consectetur odio.
        Architecto labore magnam itaque minima vero, eligendi vel eos. Ad perspiciatis quasi impedit
        laboriosam maiores dolore. Nemo numquam, corrupti quam earum minus modi sequi beatae
        voluptates quod laudantium animi commodi fugit nisi fugiat saepe impedit, porro suscipit ut
        dolor. Assumenda iusto laudantium praesentium beatae nihil deleniti quod, illum ex debitis
        consequuntur libero dolore temporibus sit veniam blanditiis obcaecati odit? Voluptatem rerum
        officiis, autem illum quidem in amet, veniam aliquid quibusdam id cumque. Magni enim eum,
        animi nam, optio eveniet quidem neque autem, velit voluptatum quia. Maiores facilis nesciunt
        commodi mollitia repellendus debitis autem sit libero nobis maxime fugiat aspernatur dolore
        neque eos ipsum vel soluta accusantium ex, veniam nihil culpa dicta. Neque officiis saepe,
        corrupti hic ducimus facilis ipsa odio sed nam quidem facere unde magni eius recusandae
        placeat ullam cum vel vero, illum eaque fugiat? Earum eius, alias corrupti mollitia placeat
        voluptate doloribus molestiae minus aliquid hic ducimus error eum consectetur modi
        reprehenderit inventore omnis debitis esse odit qui ratione expedita dolore fugiat sint.
        Magnam soluta omnis alias ullam asperiores eum perferendis similique saepe laborum
        distinctio aspernatur cupiditate ad adipisci voluptates veritatis tempore ipsam laudantium
        ex, eaque vero. Deleniti debitis beatae, ipsum nostrum possimus rem laudantium alias
        sapiente placeat repudiandae doloribus atque odio assumenda commodi minima blanditiis ut
        fuga obcaecati eveniet sint dolores velit? Earum rem autem labore sed cum ullam debitis
        doloribus nam laborum commodi ab incidunt possimus, repellat quam dolore similique rerum et
        illum porro nesciunt, eveniet recusandae neque. Impedit facilis quam amet tempora officia
        maiores consequuntur ea reprehenderit beatae nam. Quaerat illum veritatis laborum
        voluptatibus! Doloribus iste accusantium dicta optio? Eligendi sed sint voluptatum labore
        repellendus! Odio recusandae quidem minus sit fugit nesciunt corrupti, incidunt aut ipsa
        provident esse repellendus ad iure blanditiis accusantium dicta molestias laboriosam ipsum
        dolore? Quod explicabo nam dolor molestiae ut doloremque odit, optio iusto culpa, soluta
        asperiores incidunt. Et, voluptates! Est esse ad minima nobis amet suscipit perferendis
        consequatur aliquid corrupti inventore obcaecati distinctio qui, dolores, ipsum voluptas
        maiores sapiente corporis id exercitationem atque. Quod saepe architecto, at deleniti ex
        dolorem unde nulla laboriosam aut quae non nobis illum dolore? Perspiciatis mollitia eveniet
        aperiam maiores nobis fugit quibusdam adipisci necessitatibus! Corporis, obcaecati. Commodi
        eligendi magnam quaerat ab? Neque possimus deserunt esse suscipit odit error sequi
        doloribus, nemo est, dignissimos tempora, dolore veniam necessitatibus officiis atque dolor
        aspernatur nostrum. Dolores, distinctio iusto? Doloremque numquam, ipsa obcaecati aperiam
        nostrum animi. Officia iure autem inventore itaque voluptatum accusamus earum quae laborum
        doloribus commodi? Quas fugiat aspernatur nesciunt nostrum eum explicabo modi atque neque
        eveniet eaque minima magni at ipsam pariatur, vitae quisquam! Ullam vero vitae unde,
        excepturi eligendi incidunt autem natus cum labore et pariatur, animi placeat laudantium?
        Autem fugit, id inventore quidem doloremque maiores earum tempore minima recusandae harum,
        veritatis soluta cupiditate fugiat corporis dolor quasi non sapiente officiis fuga illo
        deserunt magni, rem voluptate mollitia. Earum perferendis incidunt, explicabo maxime
        adipisci ducimus non. Repudiandae eveniet rerum ratione doloremque et, aut ex architecto
        veritatis laborum praesentium sint tempore nulla sit soluta error, quae eos quibusdam qui
        vel autem? Veritatis sunt beatae, quam reprehenderit porro dolorum obcaecati corporis
        dolorem nulla vero autem unde at aliquam nisi, tempora odit eligendi quia quo consequatur.
        Earum ducimus modi praesentium aut, temporibus architecto? Obcaecati veritatis nesciunt
        molestias quae voluptate delectus libero, nam perspiciatis quas nemo aperiam accusamus ullam
        provident magnam, iure minus labore corporis qui itaque, at facilis! Exercitationem dolorum,
        praesentium officiis animi ipsam temporibus ea perspiciatis similique tempora earum
        voluptates delectus? Asperiores, earum debitis dicta dolor iusto veritatis est accusantium
        minus facere optio modi doloremque amet eum a non inventore assumenda numquam enim eos
        quidem perferendis! Fugiat quidem a minima, perferendis necessitatibus ducimus dolores sed?
        Asperiores voluptatem itaque inventore ipsum natus corporis numquam quia odio, reiciendis
        aperiam dolore consequuntur cupiditate necessitatibus magni nemo culpa facilis blanditiis
        fugit deserunt veritatis unde nam? Odit doloribus quae repellat harum officiis modi ab. Nam
        eligendi soluta libero rerum fugit, voluptate dolores? Maxime reprehenderit maiores
        officiis, error ullam eum commodi ipsam odio dolore vel fugiat vero a reiciendis rerum totam
        nesciunt optio magnam quasi eligendi voluptatum perferendis? Deleniti qui, dolorem doloribus
        molestias earum ut, corrupti sit rerum odio deserunt quas. Eos autem aliquid laudantium
        iste? Soluta provident est veniam, ducimus porro ullam vel suscipit. Totam accusantium atque
        quae, minima qui eaque asperiores quam accusamus debitis consequuntur delectus, rem tempora
        amet quia assumenda veniam! Perspiciatis, velit laboriosam commodi aut possimus sit alias
        culpa. Rem enim dolor mollitia quibusdam accusamus inventore, reiciendis at dolorum
        explicabo eum reprehenderit quisquam? Quia odit, magni nostrum atque quidem iusto vitae sit
        ea dignissimos culpa amet saepe explicabo deleniti accusantium aspernatur cum. Quisquam
        eligendi perspiciatis commodi fuga hic amet laudantium ducimus eveniet reprehenderit ipsum,
        magni soluta porro iusto ipsa veritatis totam corporis molestias. Iste perferendis sed omnis
        error, assumenda sit ratione commodi sequi, voluptatibus necessitatibus explicabo repellat,
        distinctio eos culpa ullam quos recusandae sapiente aliquid numquam minima voluptatum!
        Consequatur assumenda aut dicta, explicabo temporibus earum quibusdam reiciendis nulla
        necessitatibus, at quae!
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import useDetailStore from '@/stores/modules/hospitalDetail'
const detailStore = useDetailStore()
</script>
<style lang="scss" scoped>
.detail {
  span {
    color: #666;
  }
}
.header {
  display: flex;
  align-items: center;
  margin: 20px 0;
  .title {
    font-size: 20px;
    font-weight: 600;
  }
  i {
    margin: 0 5px 0 10px;
  }
}
.content {
  margin-top: 20px;
  display: flex;
  .left {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    margin-right: 30px;
  }
  .right {
    flex: 1;
  }
}
.address,
.route {
  margin-bottom: 10px;
}
.footer {
  margin-top: 10px;
  h2 {
    font-size: 16px;
    font-weight: 600;
    margin: 10px 0;
  }
  p {
    color: #666;
    line-height: 30px;
  }
}
</style>
