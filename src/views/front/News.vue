<template>
  <div>
    <div class="topCover news-bg bg-img d-flex">
      <h3 class="coverTitle">NEWS</h3>
    </div>
    <div class="container">
      <!-- breadcrumb -->
      <div class="breadcrumb">
        <ul class="list-unstyled d-flex align-items-center">
          <li>
            <router-link class="nav-link text-main" to="/">首頁</router-link>
          </li>
          <li class="mr-1">></li>
          <li>最新消息</li>
        </ul>
      </div>
      <h2 class="h2Title">最新消息</h2>
      <!-- lastestNews -->
      <div class="lastestNews mb-6">
        <div class="row">
          <div class="col-md-4">
            <img src="https://i.imgur.com/lCNtBsm.jpg" alt="七月份限時優惠" class="mb-3 newsImg" />
            <h4 class="mb-2 font-weight-bold text-danger">七月份限時優惠</h4>
            <p class="mb-3 text-secondary">2020/07/01</p>
            <p>07/01 ~ 07/31 限時！全館石英錶款 77 折。</p>
            <router-link class="text-decoration-none text-main font-weight-bold" to="/products">前往購物 >></router-link>
          </div>
          <div class="col-md-4">
            <img src="https://i.imgur.com/q7uAW8L.jpg" alt="父親節優惠" class="mb-3 newsImg" />
            <h4 class="mb-2 font-weight-bold text-danger">父親節優惠</h4>
            <p class="mb-3 text-secondary">2020/08/02</p>
            <p>歡慶 88 節，任選一隻男錶立即享有 88 折優惠。</p>
            <router-link class="text-decoration-none text-main font-weight-bold" to="/products">前往購物 >></router-link>
          </div>
          <div class="col-md-4">
            <img src="https://i.imgur.com/pJQEqdo.jpg" alt="對錶限時優惠" class="mb-3 newsImg" />
            <h4 class="mb-2 font-weight-bold text-danger">對錶限時優惠</h4>
            <p class="mb-3 text-secondary">2020/08/23</p>
            <p>8/31 前全館對錶 7 折，送他/她最棒的七夕禮物。</p>
            <router-link class="text-decoration-none text-main font-weight-bold" to="/products">前往購物 >></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="h2Title mb-2">時尚穿搭</h2>
      <p class="font-italic mb-6">KLÁSIKO 好錶不僅能掌握時間，也能兼顧時尚</p>
      <div class="card-columns mb-6">
        <!-- 1 -->
        <div class="card">
          <img src="https://i.imgur.com/nKYcUW9.jpg" class="card-img-top" alt="石英錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">棕色皮革簡約石英錶</h5>
            <p
              class="card-text"
            >棕色皮革搭配白色錶面，簡約錶款配輕鬆穿搭，輕鬆創造休閒感。</p>
          </div>
        </div>
        <!-- 2 -->
        <div class="card">
          <img src="https://i.imgur.com/OjKhf1D.jpg" class="card-img-top" alt="計時錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">素色復古計時錶</h5>
            <p
              class="card-text"
            >大錶面看起來落落大方，以最簡約的造型襯托時尚，是都會型男必備錶款，任何穿搭都合適。</p>
          </div>
        </div>
        <!-- 3 -->
        <div class="card">
          <img src="https://i.imgur.com/7NojIA6.jpg" class="card-img-top" alt="經典錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">黑色皮革經典錶</h5>
            <p
              class="card-text"
            >這款錶是由玫瑰金錶圈、白色錶面以及黑色皮革組成，最簡單也最經典，不管過了多久都不會退流行。</p>
          </div>
        </div>
        <!-- 4 -->
        <div class="card">
          <img src="https://i.imgur.com/ZE5cm9F.jpg" class="card-img-top" alt="石英錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">限量木色石英錶</h5>
            <p
              class="card-text"
            >錶帶由木頭打造，很適合熱愛大自然的愛錶人士收藏，小巧的錶面看起來更加內斂，很適合搭配休閒穿著。</p>
          </div>
        </div>
        <!-- 5 -->
        <div class="card">
          <img src="https://i.imgur.com/GWXnpEx.jpg" class="card-img-top" alt="潛水錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">型男必備潛水錶</h5>
            <p
              class="card-text"
            >陶瓷錶圈搭配黑色錶面，讓潛水錶看起來有型也有質感，因此就算穿西裝也不會感到突兀。</p>
          </div>
        </div>
        <!-- 6 -->
        <div class="card">
          <img src="https://i.imgur.com/DR28vRm.jpg" class="card-img-top" alt="休閒錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">玫瑰金休閒錶</h5>
            <p
              class="card-text"
            >以玫瑰金的錶圈、米蘭錶帶、指針來襯托白色錶面，非常適合年輕女性配戴，看起來時尚又不失特色。</p>
          </div>
        </div>
        <!-- 7 -->
        <div class="card">
          <img src="https://i.imgur.com/7iRD6GM.jpg" class="card-img-top" alt="計時錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">金色錶帶計時錶</h5>
            <p
              class="card-text"
            >黃金色的錶帶、錶框加上鐵灰色的錶面，看起來高雅又時尚，搭配素色襯衫非常適合。</p>
          </div>
        </div>
        <!-- 8 -->
        <div class="card">
          <img src="https://i.imgur.com/C3vaLWB.jpg" class="card-img-top" alt="經典錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">淑女必備經典錶</h5>
            <p
              class="card-text"
            >以小巧錶面以及纖細錶帶，讓腕錶看起來更秀氣，黃金配色也更顯得突出。</p>
          </div>
        </div>
        <!-- 9 -->
        <div class="card">
          <img src="https://i.imgur.com/hVXuLaN.jpg" class="card-img-top" alt="機械錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">精緻工藝機械錶</h5>
            <p
              class="card-text"
            >純手工製造的機械錶，低調奢華的造型讓手錶不只是看時間的工具，更是生活的一部份。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- subscribe -->
    <Subscribe />
  </div>
</template>

<script>
import Subscribe from '@/components/front/Subscribe.vue'
export default {
  data () {
    return {}
  },
  components: {
    Subscribe
  }
}
</script>

<style lang="scss">
.news-bg {
  background-image: url('https://i.imgur.com/0pxYDPe.jpg');
}
.newsImg {
  width: 100%;
}
</style>
