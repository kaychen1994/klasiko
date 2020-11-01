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
    <div class="topCover cart-bg bg-img d-flex">
      <h3 class="coverTitle">Cart</h3>
    </div>
    <div class="container">
      <div class="breadcrumb">
        <ul class="list-unstyled d-flex align-items-center">
          <li>
            <router-link class="nav-link text-main" to="/">首頁</router-link>
          </li>
          <li class="mr-1">></li>
          <li>購物車</li>
        </ul>
      </div>
      <div class="row d-flex justify-content-center" v-if="carts.length > 0">
        <div class="col-md-7">
          <ul class="step d-flex justify-content-around mb-md-7 mb-sm-0">
            <li class="process processActive">
              <span class="material-icons mb-1">
                shopping_cart
              </span>
              <span>1.確認購物車</span>
            </li>
            <li class="process">
              <span class="material-icons mb-1">
                wysiwyg
              </span>
              <span>2.確認訂單</span>
            </li>
            <li class="process">
              <span class="material-icons mb-1">
                local_atm
              </span>
              <span>3.結帳</span>
            </li>
          </ul>
          <table class="table table-hover mb-5">
            <thead class="thead-light">
              <tr>
                <th scope="col" width="1%" @click.prevent="delProduct()">刪除</th>
                <th scope="col" width="25%">產品名稱</th>
                <th scope="col" width="20%">數量</th>
                <th scope="col" width="20%" class="text-right">價格</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in carts" :key="item.product.id + 1">
                <td>
                  <button
                    class="btn"
                    @click.prevent="delProduct(item.product.id)"
                    :disabled="status.loadingItem === item.id"
                  >
                    <span class="material-icons text-danger">
                      clear
                    </span>
                    <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i>
                  </button>
                </td>
                <td>{{ item.product.title }}</td>
                <td>{{ item.quantity }}</td>
                <td class="text-right">{{item.product.price | money }}</td>
              </tr>
            </tbody>
          </table>
          <hr class="cartHr mb-2">
          <div class="text-danger font-weight-bold mb-3">
            <p class="amount">商品總額： {{ cartTotal | money }}</p>
          </div>
          <div class="d-flex justify-content-between flex-sm-wrap mb-6 row">
            <router-link to="/products" class="text-dark text-decoration-none col-md-5 col-lg-3 mb-3">
              <button type="button" class="btn btn-outline-secondary px-3">
                繼續購物
              </button>
            </router-link>
            <router-link to="/Order" class="text-light text-decoration-none col-md-5 col-lg-3">
              <button type="button" class="btn btn-main px-3">
                前往下一步
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <div>
          <h3 class="mb-6">您尚未加入商品至購物車</h3>
          <button type="button" class="btn btn-main mb-6 goProducts">
            <router-link class="text-decoration-none" to="/products">繼續逛逛</router-link>
          </button>
        </div>
        <h2 class="h2Title">本月熱銷 TOP 10</h2>
        <Hot />
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
        loadingItem: ''
      }
    }
  },
  components: {
    Hot
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
          this.inCart()
          this.isLoading = false
        })
        .catch((err) => {
          Alert.fire({
            title: `${err.response.data.errors}`,
            icon: 'warning'
          })
          this.isLoading = false
        })
    },
    inCart () {
      let total = 0
      this.carts.forEach((item) => {
        total += item.product.price * item.quantity
      })
      this.cartTotal = total
    },
    delAllProducts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/all/product`
      this.$http
        .delete(url)
        .then(() => {
          this.$bus.$emit('in-cart')
          this.getCart()
          Alert.fire({
            title: '購物車商品已全部刪除',
            icon: 'success'
          })
          this.isLoading = false
        })
        .catch(() => {
          Alert.fire({
            title: '購物車商品刪除失敗',
            icon: 'warning'
          })
          this.isLoading = false
        })
    },
    delProduct (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http.delete(url)
        .then(() => {
          this.$bus.$emit('in-cart')
          this.getCart()
          Alert.fire({
            title: '此商品已刪除',
            icon: 'success'
          })
          this.isLoading = false
        })
        .catch(() => {
          Alert.fire({
            title: '此商品刪除失敗',
            icon: 'warning'
          })
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss">
.cart-bg {
  background-image: url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/urx6c5SBpF9XbZ38ecfOzeJRoBd7Q6s4PSaUqFxfybpD9AqJ6s5f17EOlKA9O8dRzhgEeE8yMLgT2tmAMzMASIFKsYdlYsFkWjLlb0oEZTuT9DQH3TqSvlNZkeaK5dMi.jpg');
}
.cartHr {
  border: 2px solid #cbac67;
}
.amount {
  font-size: 32px;
  text-align: right;
  margin-bottom: 42px;
}
.goProducts {
  a {
    color: white;
  }
}
.goProducts:hover {
  border: 1px solid #cbac67;
  background: white;
  a {
    color:#cbac67;
    font-weight: bold;
  }
}
@media (max-width: 768px) {
  .amount {
    font-size: 20px;
    text-align: center;
  }
}
</style>
