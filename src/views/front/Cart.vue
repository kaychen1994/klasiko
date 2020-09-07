<template>
  <div>
    <div class="topCover cart-bg bg-img d-flex">
      <h3 class="coverTitle">Cart</h3>
    </div>
    <div class="container-fluid px-6">
      <!-- breadcrumb -->
      <div class="breadcrumb">
        <ul class="list-unstyled d-flex align-items-center">
          <li>
            <router-link class="nav-link text-main" to="/">首頁</router-link>
          </li>
          <li class="mr-1">></li>
          <li>購物車</li>
        </ul>
      </div>
      <!-- process -->
      <!-- cart list -->
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">產品名稱</th>
            <th scope="col">價格</th>
            <th scope="col">刪除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carts" :key="item.product.id + 1">
            <th scope="row">已加入購物車</th>
            <td>{{item.product.title}}</td>
            <td>{{item.product.price}}</td>
            <td>
              <button
                class="btn btn-danger"
                @click.prevent="delProduct(item.product.id)"
                :disabled="status.loadingItem === item.id"
              >
                刪除
                <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Alert from '@/alert.js'
export default {
  data () {
    return {
      carts: {},
      cartTotal: 0,
      form: {
        name: '',
        email: '',
        phone: '',
        payment: '貨到付款',
        package: '超商取貨',
        message: ''
      },
      isLoading: false,
      status: {
        loadingItem: '' // 先給預設值才不會出錯
      }
    }
  },
  created () {
    this.getCart()
  },
  methods: {
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data
          this.isLoading = false
          this.inCart()
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err.response.data)
          Alert.fire({
            title: `${err.response.data.errors}`,
            icon: 'warning'
          })
        })
    },
    inCart () {
      let total = 0
      this.carts.forEach((item) => {
        total += item.product.price * item.quantity
      })
      this.cartTotal = total // 購物車總價格
    }
  }
}
</script>

<style lang="scss">
.cart-bg {
  background-image: url('https://i.imgur.com/MiRu5rc.jpg');
}
</style>
