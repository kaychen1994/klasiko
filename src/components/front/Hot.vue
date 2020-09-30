<template>
  <div>
    <div class="swiper-container hotSwiper mb-6">
      <div class="swiper-wrapper">
        <!-- 1 -->
        <div class="swiper-slide">
          <router-link to="product/tL1Wn3uffKZYrztaDGMXFqWZp4X0wFK5z2Ao77qLGRHIiwSwJDVCHeaQDzmaVm9W">
            <img src="https://i.imgur.com/ZAQBX2k.jpg" alt="英倫風雙眼計時錶" />
          </router-link>
          <p class="text-main text-decoration-none mt-3">英倫風雙眼計時錶</p>
        </div>
        <!-- 2 -->
        <div class="swiper-slide">
          <router-link to="product/BBGNyAQwjBHmrQOqNPgwcEGTvrYM9Rq8Ly5h0F4HZsFW6becKmiNXWGszLMjLcYF">
            <img src="https://i.imgur.com/ix1seqy.jpg" class="hotSlide" alt="北歐風皮革三眼錶" />
          </router-link>
          <p class="text-main text-decoration-none mt-3">北歐風皮革三眼錶</p>
        </div>
        <!-- 3 -->
        <div class="swiper-slide">
          <router-link to="product/eEg4xitxlwJh4c3ZbKCWz5J9GRJXuTiC23V6u1SCiXVnxapIMqGXfobwSRgEKAjk">
            <img src="https://i.imgur.com/uGU7UlH.jpg" class="hotSlide" alt="深海藍三眼潛水錶" />
          </router-link>
          <p class="text-main text-decoration-none mt-3">深海藍三眼潛水錶</p>
        </div>
        <!-- 4 -->
        <div class="swiper-slide">
          <router-link to="/product/1kVl1N41vcCh0o9MJCcFxG2XXuPSBsSuJHfn4unwgH90NjCp9YNrFqnQt1kx8Cb1">
            <img src="https://i.imgur.com/kQ8treU.jpg" class="hotSlide" alt="極簡玫瑰金鋼帶錶" />
          </router-link>
          <p class="text-main text-decoration-none mt-3">極簡玫瑰金鋼帶錶</p>
        </div>
        <!-- 5 -->
        <div class="swiper-slide">
          <router-link to="/product/ies3g03UzDcETGoiD05i5fHcMZLTBGjqPFim03kMeY5tOHCs4FFQxidy4zSn7NYh">
            <img src="https://i.imgur.com/2SBaccB.jpg" class="hotSlide" alt="復刻簡約石英錶(黑)" />
          </router-link>
          <p class="text-main text-decoration-none mt-3">復刻簡約石英錶(黑)</p>
        </div>
        <!-- 6 -->
        <div class="swiper-slide">
          <router-link to="/product/wQPj3QZWU49kXm0U3BlhU7bXK7YOoKui3N148vcW3zm1u04pGiYeOCkwx6HKjygO">
            <img src="https://i.imgur.com/DK1aByR.jpg" class="hotSlide" alt="運動風三眼潛水錶" />
          </router-link>
          <p class="text-main text-decoration-none mt-3">運動風三眼潛水錶</p>
        </div>
        <!-- 7 -->
        <div class="swiper-slide">
          <router-link to="/product/KYTyojNuD3mxHKVYQlmGH531UkfgR5Y0RgdC4Tt94HVz8xdRriZVbUMXjcv6w5pQ">
            <img src="https://i.imgur.com/GWXnpEx.jpg" class="hotSlide" alt="型男必備潛水錶(綠)" />
          </router-link>
          <p class="text-main text-decoration-none mt-3">型男必備潛水錶(綠)</p>
        </div>
        <!-- 8 -->
        <div class="swiper-slide">
          <router-link to="/product/ROJIlXaV4pCLfFCgrZGtkSEbWiOnl82Y5dMT6UHWsDePgPsoVz0qV7GGHb2s9IVZ">
            <img src="https://i.imgur.com/WjRJxGS.jpg" class="hotSlide" alt="都會雅痞三眼腕錶(鐵灰)" />
          </router-link>
          <p class="text-main text-decoration-none mt-3">都會雅痞三眼腕錶(鐵灰)</p>
        </div>
        <!-- 9 -->
        <div class="swiper-slide">
          <router-link to="/product/IQDrUBTQa9Jv5KOD8W2MiVIp9eW2RjTVBkugIyeYpPHWFMlnLyxIbX2DROlFLP9W">
            <img src="https://i.imgur.com/7NojIA6.jpg" class="hotSlide" alt="簡約皮革經典錶" />
          </router-link>
          <p class="text-main text-decoration-none mt-3">簡約皮革經典錶</p>
        </div>
        <!-- 10 -->
        <div class="swiper-slide">
          <router-link to="/product/r7ZxIKDlTbwD0gXknmEsONgX2prYKOAphi1chJ1KzZWDNpr2UmQU7Qcqw4pqnY4p">
            <img src="https://i.imgur.com/SXpqJt7.jpg" class="hotSlide" alt="極簡北歐風經典錶" />
          </router-link>
          <p class="text-main text-decoration-none mt-3">極簡北歐風經典錶</p>
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
        },
        breakpoints: {
          960: {
            slidesPerView: 6,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          375: {
            slidesPerView: 1
          }
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
.hotSlide:hover {
  opacity: 0.3;
}
</style>
