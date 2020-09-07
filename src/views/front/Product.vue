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
        <img src="https://i.imgur.com/WjRJxGS.jpg" alt class="col-md-6 mr-6" />
        <div class="col-md-5 px-1">
          <h2 class="text-left mb-4">{{ product.title }}</h2>
          <p
            class="text-left mb-4"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid unde cum, eius aperiam optio tenetur, qui corrupti praesentium exercitationem quae libero quia odit dolorem necessitatibus similique iusto error ad. Tenetur?</p>
          <p class="text-left mb-4">money</p>
          <button type="button" class="btn btn-danger d-flex justify-content-start">加入購物車</button>
        </div>
      </div>
      <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
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
            class="nav-link"
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
          id="contact" role="tabpanel"
          aria-labelledby="contact-tab"
          >
          <p class="mb-3">在網路上購買 KLÁSIKO 全系列錶款，可於收到後七日內退回商品，退換貨運費由 KLÁSIKO 負責。</p>
          <p>若有疑慮也可以直接電洽服務專線 0800-000-000</p>
          </div>
      </div>
      <h3 class="text-main text-left font-weight-bold mb-6">你可能會喜歡的商品</h3>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

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
  created () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.isLoading = true
      this.$http.get(url)
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
</style>
