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
    <div class="topCover checkout-bg bg-img d-flex">
      <h3 class="coverTitle">checkout</h3>
    </div>
    <div class="container-fluid">
      <div class="breadcrumb">
        <ul class="list-unstyled d-flex align-items-center">
          <li>
            <router-link class="nav-link text-main" to="/">首頁</router-link>
          </li>
          <li class="mr-1">></li>
          <li>
            <router-link class="nav-link text-main" to="/cart">確認購物車</router-link>
          </li>
          <li class="mr-1">></li>
          <li>
            <router-link class="nav-link text-main" to="/order">確認訂單</router-link>
          </li>
          <li class="mr-1">></li>
          <li>結帳</li>
        </ul>
      </div>
      <div class="row step">
        <div class="col-md-12">
          <ul class="d-flex justify-content-around px-6 mb-7">
            <li class="process">
              <span class="material-icons mb-1">shopping_cart</span>
              <span>1.確認購物車</span>
            </li>
            <li class="process">
              <span class="material-icons mb-1">wysiwyg</span>
              <span>2.確認訂單</span>
            </li>
             <li class="process processActive">
                <span class="material-icons mb-1">local_atm</span>
                <span>3.結帳</span>
              </li>
            </ul>
        </div>
      </div>
      <div class="d-flex justify-content-center mb-6">
        <div class="checkout">
          <h3 class="mb-3 text-left">結帳</h3>
          <p class="text-left">若訂單內容無誤，結帳後即可完成訂單。</p>
          <table class="table table-hover mb-5">
            <thead class="thead-light">
              <tr>
                <th scope="col">產品名稱</th>
                <th scope="col">數量</th>
                <th scope="col">價格</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="( product, i ) in order.products" :key="i">
                <td>{{ product.product.title }}</td>
                <td>{{ product.quantity }}</td>
                <td>{{ product.product.price | money }}</td>
              </tr>
            </tbody>
          </table>
          <hr>
          <h3 class="mb-3 text-left">詳細資料</h3>
          <div class="d-flex justify-content-between">
            <div class="text-left">
              <p>訂購人姓名：{{ order.user.name }}</p>
              <p>訂購人 Email：{{ order.user.email }}</p>
              <p>收貨人地址：{{ order.user.address }}</p>
              <p>收貨人電話：{{ order.user.tel }}</p>
              <p>付款方式：{{ order.payment }}</p>
              <p class="text-danger">付款金額：{{ order.amount | money }}</p>
              <p>
                付款狀態：
                <span v-if="!order.paid" class="text-danger font-weight-bold">尚未付款</span>
                <span v-else class="text-success font-weight-bold">付款完成</span>
              </p>
              <div class="d-flex align-items-end" v-if="order.paid === false">
                <button class="btn btn-danger px-5" @click.prevent="payOrder">確認付款</button>
              </div>
              <div class="" v-if="order.paid === true">
                <p class="text-danger mb-3">※您已付款成功，將於 3~5 個工作日收到訂購商品</p>
                <router-link to="/">
                  <button type="button" class="btn btn-outline-secondary">返回首頁</button>
                </router-link>
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

export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  },
  methods: {
    getOrder () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`
      this.isLoading = true
      this.$http
        .get(url)
        .then((res) => {
          this.order = res.data.data
          this.isLoading = false
        })
        .catch(() => {
          Alert.fire({
            title: '資料取得失敗',
            icon: 'error'
          })
          this.isLoading = false
        })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}/paying`
      this.isLoading = true
      this.$http.post(url)
        .then((res) => {
          this.getOrder()
          this.$bus.$emit('in-cart')
          Alert.fire({
            title: '您已付款成功',
            icon: 'success'
          })
          this.isLoading = false
        })
        .catch(() => {
          Alert.fire({
            title: '資料取得失敗',
            icon: 'error'
          })
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss">
.checkout-bg {
  background-image: url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/ODIeThseN4nbEOJrKZxCrMbSdr6W6E34hJjh94pr1vPJYM4KmL45qvN8RpRisCyPRLEedo146hTapl6kGA1T6DhOBe6gHaUoMw4muZlIbwuh6mIEq1cAyLWnF0FoS4PB.jpg');
}
.checkout {
  width: 960px;
  border: 2px solid #cbac67;
  padding: 48px 16px;
  h3 {
    display: block;
    font-weight: bold;
  }
}
@media (max-width: 375px) {
  .checkout {
    width: 320px;
  }
}
</style>
