<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container homeBanner">
      <div class="swiper-wrapper">
        <div class="swiper-slide banner banner1">
          <div class="bannerText">2020 秋冬新品上市</div>
        </div>
        <div class="swiper-slide banner banner2">
          <div class="bannerText">KLÁSIKO 經典不敗</div>
        </div>
        <div class="swiper-slide banner banner3">
          <div class="bannerText">你的「時」尚由你定義</div>
        </div>
      </div>
    </div>
    <!-- service -->
    <div class="service py-6 mb-6">
      <h2 class="h2Title">KLÁSIKO 的特色</h2>
      <ul class="d-flex justify-content-around list-unstyled">
        <li class="serviceList">
          <img src="images/fix.svg" alt="KLÁSIKO 保固" />
          <span>2 年保固</span>
          <p>提供長達 2 年的免費保固服務，不限會員資格皆享有專業維修服務，超過保固期也享有維修折扣。</p>
        </li>
        <li class="serviceList">
          <img src="images/like.svg" alt="KLÁSIKO 品質" />
          <span>品質保證</span>
          <p>KLÁSIKO 只賣正品，絕對都是從瑞士、日本進口的時尚腕錶，在 KLÁSIKO 不用怕買到假貨。</p>
        </li>
        <li class="serviceList">
          <img src="images/money.svg" alt="KLÁSIKO 價格" />
          <span>價格公道</span>
          <p>全台最優惠的正品進口腕錶，只在 KLÁSIKO ，歡迎比價，網購滿 $8,800 免運費。</p>
        </li>
      </ul>
    </div>
    <!-- all series -->
    <div class="container">
      <h2 class="h2Title">KLÁSIKO 全系列</h2>
      <ul class="series row row-cols-1 row-cols-md-4 mb-5 list-unstyled">
        <li class="col-lg-3 col-md-9 mb-4">
          <div class="card mb-2 productShadow">
            <router-link to="/products">
              <img src="https://i.imgur.com/sfUzvwX.jpg" class="card-img-top cardImg" alt="石英錶" />
            </router-link>
            <div class="card-body">
              <h3 class="card-title text-sec text-center font-weight-bold">石英錶</h3>
            </div>
            <div class="more">
              <router-link class="text-decoration-none text-main font-weight-bold" to="/products">前往購物</router-link>
            </div>
          </div>
        </li>
        <!-- 2 -->
        <li class="col-lg-3 col-md-9 mb-4">
          <div class="card mb-2 productShadow">
            <router-link to="/products">
              <img src="https://i.imgur.com/h0WumFk.jpg" class="card-img-top cardImg" alt="潛水錶" />
            </router-link>
            <div class="card-body">
              <h3 class="card-title text-sec text-center font-weight-bold">潛水錶</h3>
            </div>
            <div class="more">
              <router-link class="text-decoration-none text-main font-weight-bold" to="/products">前往購物</router-link>
            </div>
          </div>
        </li>
        <!-- 3 -->
        <li class="col-lg-3 col-md-9 mb-4">
          <div class="card mb-2 productShadow">
            <router-link to="/products">
              <img src="https://i.imgur.com/l0ef0Np.jpg" class="card-img-top cardImg" alt="機械錶" />
            </router-link>
            <div class="card-body">
              <h3 class="card-title text-sec text-center font-weight-bold">機械錶</h3>
            </div>
            <div class="more">
              <router-link class="text-decoration-none text-main font-weight-bold" to="/products">前往購物</router-link>
            </div>
          </div>
        </li>
        <!-- 4 -->
        <li class="col-lg-3 col-md-9 mb-4">
          <div class="card mb-2 productShadow">
            <router-link to="/products">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/KRGUW6FkEdUZbbHwiGFTYtXUkiul7MYtif6FhBNlL3LRGyoFHUWLJH8uevBu1HbufAvEAcRiPKllc5n0yksIDlpW8M4DNEuHuoCQ8tXHjYGR2Jddolt4YF0SGnuJGhFz.jpg" class="card-img-top cardImg" alt="電子錶" />
            </router-link>
            <div class="card-body">
              <h3 class="card-title text-sec text-center font-weight-bold">電子錶</h3>
            </div>
            <div class="more">
              <router-link class="text-decoration-none text-main font-weight-bold" to="/products">前往購物</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- subscribe -->
    <Subscribe />
    <!-- hot -->
    <h2 class="h2Title mt-md-3 mt-lg-6">本月熱銷 TOP 10</h2>
      <!-- 這邊插入 hot 元件 -->
      <div class="px-3">
        <Hot />
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import Subscribe from '@/components/front/Subscribe.vue'
import Hot from '@/components/front/Hot.vue'

export default {
  data () {
    return {
      bannerSwiper: {}
    }
  },
  components: {
    Subscribe,
    Hot
  },
  methods: {
    setSwiper () {
      this.bannerSwiper = new Swiper('.homeBanner', {
        slidesPerView: 'auto',
        loop: true,
        speed: 800,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      })
    }
  },
  mounted () {
    this.setSwiper()
  }
}
</script>

<style lang="scss">
.banner {
  min-height: 75vh;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  color: white;
  font-size: 64px;
  padding-right: 64px;
  padding-bottom: 64px;
  position: relative;
}
.bannerText {
  position: absolute;
  border-bottom: 5px solid white;
  right: 10%;
  bottom: 10%;
  text-align: center;
  line-height: 1.5;
}
.banner1 {
  background-image: url('https://i.imgur.com/0CmohNK.jpg');
}
.banner2 {
  background-image: url('https://i.imgur.com/0SLklnJ.jpg');
}
.banner3 {
  background-image: url('https://i.imgur.com/YpgqjHn.jpg');
}
.service {
  background: #fafafa;
  .serviceList {
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 80px;
      margin-bottom: 32px;
    }
    span {
      font-size: 36px;
      font-weight: bold;
      color: #cbac67;
      margin-bottom: 20px;
    }
  }
}
.cardImg {
  // min-height: 190px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}
.more {
  background: #cbac67;
  &:hover {
    background: #dc3545;
  }
  a {
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: center;
    text-decoration: none;
    display: block;
    color: white;
  }
}
.productShadow:hover {
  box-shadow: 3px 5px 1px 0px #dedede;
}
@media (max-width: 768px) {
  .banner {
    min-height: 40vh;
    font-size: 30px;
    background-position: center center;
  }
  .service {
    ul {
      flex-direction: column;
      align-items: center;
      li {
        margin-bottom: 24px;
      }
    }
    .serviceList {
      width: 360px;
    }
  }
  .series {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 375px) {
  .serviceList {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
