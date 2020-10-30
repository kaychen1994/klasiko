<template>
  <div>
    <div class="topCover about-bg bg-img d-flex">
      <h3 class="coverTitle">ABOUT US</h3>
    </div>
    <div class="container">
      <div class="breadcrumb">
        <ul class="list-unstyled d-flex align-items-center">
          <li>
            <router-link class="nav-link text-main" to="/">首頁</router-link>
          </li>
          <li class="mr-1">></li>
          <li>關於我們</li>
        </ul>
      </div>
      <h2 class="h2Title">關於我們</h2>
      <div class="row d-flex align-items-center justify-content-around mb-6">
        <img
          src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/lEwF6vdz3f1gVRxIrurVzyNzDE30LXwu17CH0s2LRJ6o8NNUkHQ5jHqcsiXyyROWVj2DgTS70hYeGUxyIQVcqMiuBDY0uiaydFEBLftIMv2X6M6e9vrCr1GfSjWwXZRY.jpg"
          alt="KLÁSIKO"
          class="col-md-5"
        />
        <div class="aboutInfo col-md-5 fz-20 text-left aboutBorder">
          KLÁSIKO 源自於西班牙文的 clásico (經典) ，致力於打造最經典的腕錶。 KLÁSIKO 於 2020 年誕生，品牌理念是提供品質最好、設計最突出的腕錶，讓顧客在掌握時間之餘也能讓錶成為時尚配件。
          雖然 KLÁSIKO 是年輕的新品牌，但是我們的錶款機芯都是原裝進口，在 KLÁSIKO 買錶絕對是全新正品，請顧客安心選購。
          未來我們也會持續推出更驚豔的錶款，手錶愛好者不能錯過。
        </div>
      </div>
      <div class="row d-flex align-items-center justify-content-around  mb-6">
        <div class="aboutInfo col-md-5 fz-20 text-left aboutBorder">KLÁSIKO 要求完美，堅持採用最好的材質精心打造每一隻腕錶，讓 KLÁSIKO 的經典可以永流傳。</div>
        <img
          src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/2u6IK0qJhd5O9nhsnpQq5YWlLvITmmBmJtJzoVhJOO1sqxVrnhtPkw5XNT3O9wLv3YnoJk0XFfsSIMe2uGa7wGa6JuflnBGdYWEKJ8bPGHyfLjoTFDKBiZmOF225mez6.jpg"
          alt="KLÁSIKO"
          class="col-md-5"
        />
      </div>
      <div class="row d-flex align-items-center justify-content-around mb-6">
        <img
          src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/diurhKZhsPDKQ7h9689cSu5Xvxcv6XiRWKAtzTBuYp9dHKBc53kLvnQgHRZJVtDhO9gzcTkRaXuBqIB0YHDo0fbHouIzEVesqbPwB4dyLgfobnZ2DueHycHqyPVVlIAI.jpg"
          alt="KLÁSIKO"
          class="col-md-5"
        />
        <div class="aboutInfo col-md-5 fz-20 text-left aboutBorder">KLÁSIKO 追求創新也同時保留經典，讓您手中的腕錶不被時代淘汰掉，您值得擁有最完美的腕錶。</div>
      </div>
    </div>
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
.about-bg {
  background-image: url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/tiZ4VNQ9hccrquZGIPwO1rZw3uKnvd8Z09eSSdVaP8sMMI4B3aPPzQUXMS2xpzBLYEnJZiU7Tj6hHoQqnnSMrtctNLHMeCaVNPw4PSvhtKaFKVwY6b0yEvu6O3vd3u0t.jpg');
}
.aboutBorder {
  border: 2px solid #cbac67;
  padding: 16px 16px;
}
@media (max-width: 768px) {
  .aboutInfo {
    margin: 20px 10px;
  }
}
</style>
