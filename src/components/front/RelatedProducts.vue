<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide class="item mb-5" v-for="item in related" :key="item.id">
        <div class="card">
          <img class="card-img-top relatedImg" :src="item.imageUrl[0]" @click.prevent="getDetail(item.id)" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">{{ item.title }}</h5>
            <p class="card-text">{{ item.price | money }} 元</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  data () {
    return {
      products: [],
      swiperOption: {
        speed: 900,
        allowTouchMove: true,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        breakpoints: {
          // 768: {
          //   slidesPerView: 4,
          //   spaceBetween: 10
          // },
          960: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          375: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  props: {
    product: {
      type: Object
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.data
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    getDetail (id) {
      const path = `/product/${id}`
      this.$router.push(path)
      this.$emit('update')
    }
  },
  computed: {
    related () {
      return this.products.filter(
        (item) =>
          item.id !== this.product.id && item.category === this.product.category
      )
    }
  }
}
</script>

<style lang="scss">
.relatedImg {
  min-height: 180px;
}
</style>
