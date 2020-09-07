<template>
  <div>
    <div class="swiper-container hotSwiper mb-6">
      <div class="swiper-wrapper">
        <!-- 1 -->
        <div class="swiper-slide">
          <img src="https://i.imgur.com/ZAQBX2k.jpg" alt />
        </div>
        <!-- 2 -->
        <div class="swiper-slide">
          <img src="https://i.imgur.com/ix1seqy.jpg" alt />
        </div>
        <!-- 3 -->
        <div class="swiper-slide">
          <img src="https://i.imgur.com/uGU7UlH.jpg" alt />
        </div>
        <!-- 4 -->
        <div class="swiper-slide">
          <img src="https://i.imgur.com/kQ8treU.jpg" alt />
        </div>
        <!-- 5 -->
        <div class="swiper-slide">
          <img src="https://i.imgur.com/2SBaccB.jpg" alt />
        </div>
        <!-- 6 -->
        <div class="swiper-slide">
          <img src="https://i.imgur.com/DK1aByR.jpg" alt />
        </div>
        <!-- 7 -->
        <div class="swiper-slide">
          <img src="https://i.imgur.com/GWXnpEx.jpg" alt />
        </div>
        <!-- 8 -->
        <div class="swiper-slide">
          <img src="https://i.imgur.com/WjRJxGS.jpg" alt />
        </div>
        <!-- 9 -->
        <div class="swiper-slide">
          <img src="https://i.imgur.com/7NojIA6.jpg" alt />
        </div>
        <!-- 10 -->
        <div class="swiper-slide">
          <img src="https://i.imgur.com/SXpqJt7.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export default {
  data () {
    return {
      hotSwiper: {}
    }
  },
  methods: {
    setHotSwiper () {
      this.hotSwiper = new Swiper('.hotSwiper', {
        loop: true,
        speed: 800,
        slidesPerView: 6,
        spaceBetween: 30,
        freeMode: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    }
  },
  mounted () {
    this.setHotSwiper()
  }
}
</script>

<style lang="scss">
.hotSwiper {
  img {
    width: 100%;
  }
}
</style>
