<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <div class="loadingio-spinner-eclipse">
          <div class="loading-style">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </template>
    </loading>
    <div class="topCover products-bg bg-img d-flex">
      <h3 class="coverTitle">PRODUCTS</h3>
    </div>
    <div class="container-fluid px-lg-6">
      <div class="breadcrumb">
        <ul class="list-unstyled d-flex align-items-center">
          <li>
            <router-link class="nav-link text-main" to="/">首頁</router-link>
          </li>
          <li class="mr-1">></li>
          <li>全系列錶款</li>
        </ul>
      </div>
      <h2 class="h2Title">本月熱銷 TOP 10</h2>
      <Hot />
      <h2 class="h2Title">KLÁSIKO 全系列</h2>
      <div class="row d-flex justify-content-center">
        <div class="col-lg-2 col-md-3 mb-2">
          <div class="list-group sticky-top productFilter mb-6">
            <a
              href="#"
              class="list-group-item list-group-item-action list-group-item-secondary active"
              @click.prevent="filterCategory = ''"
            >全系列錶款</a>
            <a
              href="#"
              class="list-group-item font-weight-bold list-group-item-action list-group-item-light"
              @click.prevent="filterCategory = item"
              v-for="item in categories"
              :key="item"
            >{{ item }}</a>
          </div>
        </div>
        <div class="col-lg-10 col-md-9">
          <div id="prductsCard" class="row">
            <div class="card mb-5 col-lg-4" v-for="item in filterCategories" :key="item.id">
              <div class="card-body">
                <router-link :to="`/product/${ item.id }`">
                  <img class="card-img-top product-img mb-4" :style="{ backgroundImage: `url(${item.imageUrl[0]})` }"/>
                </router-link>
                <h3 class="card-title text-main font-weight-bold mb-4">{{ item.title }}</h3>
                <p class="card-text text-left mb-4">{{ item.content }}</p>
                <div class="card-text d-flex justify-content-center align-items-center">
                  <span class="lineThrough text-secondary">{{ item.origin_price | money }} 元</span>
                  <span class="text-red font-weight-bold ml-4">{{ item.price | money }} 元</span>
                </div>
              </div>
              <div class="card-footer bg-transparent d-flex justify-content-between flex-sm-wrap">
                <button type="button" class="btn btn-dark detail-button px-3 mb-sm-3 d-flex" :disabled="status.loadingItem === item.id">
                  <router-link :to="`/product/${ item.id }`" class="text-light text-decoration-none">查看商品</router-link>
                  <i
                      v-if="status.loadingItem === item.id"
                      class="spinner-grow spinner-grow-sm"
                  ></i>
                </button>
                <button
                  type="button"
                  class="btn btn-main px-3 mb-sm-3 d-flex"
                  :disabled="status.loadingItem === item.id"
                  @click.prevent="goToCart(item.id)"
                >
                  <span class="mr-3">加到購物車</span>
                  <span class="material-icons">
                    add_shopping_cart
                    <i
                      v-if="status.loadingItem === item.id"
                      class="spinner-grow spinner-grow-sm"
                    ></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/alert.js'
import Hot from '@/components/front/Hot.vue'

export default {
  data () {
    return {
      isLoading: false,
      products: [],
      categories: ['石英錶', '潛水錶', '機械錶', '電子錶'],
      filterCategory: '',
      cart: [],
      cartTotal: 0,
      status: {
        loadingItem: ''
      }
    }
  },
  components: {
    Hot
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1, paged = 30) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products?page=${page}&paged=${paged}`
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.data
          const { categoryName } = this.$route.params
          if (categoryName) {
            this.filterCategory = categoryName
          }
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    goToCart (id, quantity = 1) {
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity: quantity
      }
      this.$http.post(url, cart)
        .then((res) => {
          this.$bus.$emit('in-cart')
          this.status.loadingItem = ''
          Alert.fire({
            title: '您已成功將商品加入購物車',
            icon: 'success'
          })
        })
        .catch((err) => {
          this.status.loadingItem = ''
          Alert.fire({
            title: `${err.response.data.errors}`,
            icon: 'warning'
          })
        })
    }
  },
  computed: {
    filterCategories () {
      if (this.filterCategory) {
        return this.products.filter((item) => {
          const data = item.category
            .toLowerCase()
            .includes(this.filterCategory.toLowerCase())
          return data
        })
      }
      return this.products
    }
  }
}
</script>

<style lang="scss">
.products-bg {
  background-image: url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/c4f6aWCgCb64rP78r6H4WcwpVIBCnF3XvIPUx7thXYPYVftNOIXdO7cGEEAhYcc2FmVCHaVNYjAFu47oficMfkIB5Sf6rmVD2ltaXmvGkjw53UhsKuTuKo91OGeN3I9n.jpg');
}
.product-img {
  min-height: 300px;
  background-size: cover;
  background-position: center;
}
.lineThrough {
  text-decoration: line-through;
}
.detail-button:hover {
  background-color: #495057;
  border: 1px solid #000000;
  color: black;
}
.productFilter {
  z-index: 0;
}
</style>
