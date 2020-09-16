<template>
  <div>
    <div class="swiper-container hotSwiper mb-6">
      <div class="swiper-wrapper">
        <!-- 1 -->
        <div class="swiper-slide">
          <router-link to="product/tL1Wn3uffKZYrztaDGMXFqWZp4X0wFK5z2Ao77qLGRHIiwSwJDVCHeaQDzmaVm9W">
            <img src="https://i.imgur.com/ZAQBX2k.jpg" alt />
          </router-link>
        </div>
        <!-- 2 -->
        <div class="swiper-slide">
          <router-link to="product/BBGNyAQwjBHmrQOqNPgwcEGTvrYM9Rq8Ly5h0F4HZsFW6becKmiNXWGszLMjLcYF">
            <img src="https://i.imgur.com/ix1seqy.jpg" alt />
          </router-link>
        </div>
        <!-- 3 -->
        <div class="swiper-slide">
          <router-link to="product/eEg4xitxlwJh4c3ZbKCWz5J9GRJXuTiC23V6u1SCiXVnxapIMqGXfobwSRgEKAjk">
            <img src="https://i.imgur.com/uGU7UlH.jpg" alt />
          </router-link>
        </div>
        <!-- 4 -->
        <div class="swiper-slide">
          <router-link to="/product/1kVl1N41vcCh0o9MJCcFxG2XXuPSBsSuJHfn4unwgH90NjCp9YNrFqnQt1kx8Cb1">
            <img src="https://i.imgur.com/kQ8treU.jpg" alt />
          </router-link>
        </div>
        <!-- 5 -->
        <div class="swiper-slide">
          <router-link to="/product/ies3g03UzDcETGoiD05i5fHcMZLTBGjqPFim03kMeY5tOHCs4FFQxidy4zSn7NYh">
            <img src="https://i.imgur.com/2SBaccB.jpg" alt />
          </router-link>
        </div>
        <!-- 6 -->
        <div class="swiper-slide">
          <router-link to="/product/wQPj3QZWU49kXm0U3BlhU7bXK7YOoKui3N148vcW3zm1u04pGiYeOCkwx6HKjygO">
            <img src="https://i.imgur.com/DK1aByR.jpg" alt />
          </router-link>
        </div>
        <!-- 7 -->
        <div class="swiper-slide">
          <router-link to="/product/KYTyojNuD3mxHKVYQlmGH531UkfgR5Y0RgdC4Tt94HVz8xdRriZVbUMXjcv6w5pQ">
            <img src="https://i.imgur.com/GWXnpEx.jpg" alt />
          </router-link>
        </div>
        <!-- 8 -->
        <div class="swiper-slide">
          <router-link to="/product/ROJIlXaV4pCLfFCgrZGtkSEbWiOnl82Y5dMT6UHWsDePgPsoVz0qV7GGHb2s9IVZ">
            <img src="https://i.imgur.com/WjRJxGS.jpg" alt />
          </router-link>
        </div>
        <!-- 9 -->
        <div class="swiper-slide">
          <router-link to="/product/IQDrUBTQa9Jv5KOD8W2MiVIp9eW2RjTVBkugIyeYpPHWFMlnLyxIbX2DROlFLP9W">
            <img src="https://i.imgur.com/7NojIA6.jpg" alt />
          </router-link>
        </div>
        <!-- 10 -->
        <div class="swiper-slide">
          <router-link to="/product/r7ZxIKDlTbwD0gXknmEsONgX2prYKOAphi1chJ1KzZWDNpr2UmQU7Qcqw4pqnY4p">
            <img src="https://i.imgur.com/SXpqJt7.jpg" alt />
          </router-link>
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
