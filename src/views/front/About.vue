<template>
  <div>
    <!-- cover -->
    <div class="topCover about-bg bg-img d-flex">
      <h3 class="coverTitle">ABOUT US</h3>
    </div>
    <!-- about content -->
    <div class="container">
      <!-- breadcrumb -->
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
          src="https://images.unsplash.com/photo-1573148476075-c9935202f573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
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
          src="https://images.unsplash.com/photo-1582043568223-338d62fc01fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="KLÁSIKO"
          class="col-md-5"
        />
      </div>
      <div class="row d-flex align-items-center justify-content-around mb-6">
        <img
          src="https://images.unsplash.com/photo-1482775907821-a56ec43344fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
          alt="KLÁSIKO"
          class="col-md-5"
        />
        <div class="aboutInfo col-md-5 fz-20 text-left aboutBorder">KLÁSIKO 追求創新也同時保留經典，讓您手中的腕錶不被時代淘汰掉，您值得擁有最完美的腕錶。</div>
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
.about-bg {
  background-image: url('https://i.imgur.com/uZrKIMA.jpg');
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
