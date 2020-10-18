<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <div class="loadingio-spinner-eclipse-r1twaurvtum">
          <div class="ldio-qkw9u78zjtk">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </template>
    </loading>
    <div class="topCover product-bg bg-img d-flex">
      <h3 class="coverTitle productTitle">{{ product.title }}</h3>
    </div>
    <div class="container">
      <!-- breadcrumb -->
      <div class="breadcrumb">
        <ul class="list-unstyled d-flex align-items-center">
          <li>
            <router-link class="nav-link text-main" to="/">首頁</router-link>
          </li>
          <li class="mr-1">></li>
          <li>
            <router-link class="nav-link text-main" to="/products">全系列錶款</router-link>
          </li>
          <li class="mr-1">></li>
          <li>{{ product.title }}</li>
        </ul>
      </div>
      <div class="d-flex align-items-center row mb-6">
        <img class="col-md-5 col-sm-12 prodcutImg" :src="product.imageUrl[0]" />
        <div class="col-md-5 col-sm-12 px-lg-1 px-sm-3">
          <h2 class="text-left mb-4 text-main font-weight-bold">{{ product.title }}</h2>
          <p class="text-left mb-4">{{ product.content }}</p>
          <div class="d-flex justify-content-between">
            <p class="mr-6 lineThrough text-secondary">{{product.origin_price | money}} 元</p>
            <p class="font-weight-bold text-danger">{{product.price | money}} 元</p>
          </div>
          <div class="d-flex justify-content-between">
            <select name="unit" v-model="product.num" class="px-6 py-1 mr-3">
              <option :value="num" v-for="num in 5" :key="num">{{ num }} 隻</option>
            </select>
            <button
              type="button"
              class="btn btn-main d-flex justify-content-start"
              @click.prevent="goToCart(product.id, product.num)"
            >加入購物車</button>
          </div>
        </div>
      </div>
      <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active tab-active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >購物須知</a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link tab-active"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >退換貨說明</a>
        </li>
      </ul>
      <div class="tab-content mb-6" id="myTabContent">
        <div
          class="text-left tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <p class="mb-3">下單後我們會立即確認訂單，並且安排出貨，預計 3~5 天內收到您訂購的商品。</p>
          <p>凡是購買 KLÁSIKO 全系列錶款，在 2 年保固期間都可以拿到我們服務據點免費維修，超過保固期間也能享有維修折扣。</p>
        </div>
        <div
          class="text-left tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <p class="mb-3">在網路上購買 KLÁSIKO 全系列錶款，可於收到後七日內退回商品，退換貨運費由 KLÁSIKO 負責。</p>
          <p>若有疑慮也可以直接電洽服務專線 0800-000-000</p>
        </div>
      </div>
      <h3 class="text-main text-left font-weight-bold mb-6">你可能會喜歡的商品</h3>
      <RelatedProducts :product="product" @update="getProduct" />
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Alert from '@/alert.js'
import RelatedProducts from '@/components/front/RelatedProducts.vue'

export default {
  data () {
    return {
      isLoading: false,
      product: {
        num: 1,
        imageUrl: []
      }
    }
  },
  components: {
    RelatedProducts
  },
  created () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.product = {
            ...res.data.data,
            num: 1
          }
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err.response)
          this.isLoading = false
        })
    },
    goToCart (id, quantity = 1) {
      // 數量預設值 1
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        // api required
        product: id, // id 透過參數傳入
        quantity: quantity
      }
      this.$http
        .post(url, cart)
        .then((res) => {
          this.$bus.$emit('in-cart') // bus 傳送 emit 接收 on
          this.isLoading = false
          Alert.fire({
            title: '成功將商品加入購物車',
            icon: 'success'
          })
        })
        .catch((err) => {
          this.isLoading = false
          Alert.fire({
            title: `${err.response.data.errors}`,
            icon: 'warning'
          })
        })
    }
  },
  mounted () {
    $('#myTab a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  }
}
</script>

<style lang="scss">
.product-bg {
  background-image: url('https://i.imgur.com/GAeJjml.jpg');
}
.productTitle {
  font-family: 'Noto Sans TC', sans-serif;
}
.prodcutImg {
  margin-right: 48px;
  margin-bottom: 16px;
}
.tab-active {
  color: #cbac67;
  &:hover {
    color: red;
  }
}
@media (max-width: 375px) {
  .prodcutImg {
    margin-right: 0px;
    margin-bottom: 32px;
  }
}
</style>
