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
    <div class="topCover cart-bg bg-img d-flex">
      <h3 class="coverTitle">Cart</h3>
    </div>
    <div class="container-fluid">
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
      <button
        type="button"
        class="btn btn-danger mb-3"
        @click.prevent="delAllProducts()"
      >刪除全部購物車商品</button>
      <div class="row d-flex justify-content-center">
        <div class="col-md-5">
          <table class="table mb-5">
            <thead class="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">產品名稱</th>
                <th scope="col">價格</th>
                <th scope="col">數量</th>
                <th scope="col" @click.prevent="delProduct()">刪除</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in carts" :key="item.product.id + 1">
                <th scope="row">
                  <router-link :to="`/product/${ item.product.id }`">
                    <img :src="item.product.imageUrl[0]" class="cartImg"/>
                  </router-link>
                </th>
                <td>{{item.product.title}}</td>
                <td>{{item.product.price | money }}</td>
                <td>{{item.quantity}}</td>
                <td>
                  <button
                    class="btn btn-outline-danger"
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
          <div class="d-flex text-danger font-weight-bold">
            <p>商品總額：</p>
            <p>{{ cartTotal | money}}</p>
          </div>
        </div>
      </div>
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
      this.$http
        .get(url)
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
    },
    delAllProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`
      this.$http
        .delete(url)
        .then(() => {
          this.isLoading = false
          this.getCart()
          Alert.fire({
            title: '購物車商品已全部刪除',
            icon: 'success'
          })
        })
        .catch(() => {
          this.isLoading = false
          Alert.fire({
            title: '購物車商品刪除失敗',
            icon: 'warning'
          })
        })
    },
    delProduct (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http
        .delete(url)
        .then(() => {
          this.isLoading = false
          this.getCart()
          Alert.fire({
            title: '購物車商品已全部刪除',
            icon: 'success'
          })
        })
        .catch(() => {
          this.isLoading = false
          Alert.fire({
            title: '購物車商品刪除失敗',
            icon: 'warning'
          })
        })
    }
  }
}
</script>

<style lang="scss">
.cart-bg {
  background-image: url('https://i.imgur.com/MiRu5rc.jpg');
}
.cartImg {
  width: 100px;
}
</style>
