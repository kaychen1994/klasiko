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
      <!-- cart list -->
      <div class="row d-flex justify-content-center" v-if="carts.length > 0">
        <div class="col-md-7">
          <!-- process -->
          <ul class="d-flex justify-content-around mb-7">
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
                <th scope="col" @click.prevent="delProduct()">刪除</th>
                <th scope="col">商品圖</th>
                <th scope="col">產品名稱</th>
                <th scope="col">數量</th>
                <th scope="col">價格</th>
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
                <td>
                  <router-link :to="`/product/${ item.product.id }`">
                    <img :src="item.product.imageUrl[0]" class="cartImg"/>
                  </router-link>
                </td>
                <td>{{item.product.title}}</td>
                <td>{{item.quantity}}</td>
                <td>{{item.product.price | money }}</td>
              </tr>
            </tbody>
          </table>
          <hr class="cartHr mb-2">
          <div class="d-flex justify-content-end text-danger font-weight-bold mb-3">
            <p class="fz-32">商品總額： {{ cartTotal | money}}</p>
          </div>
          <div class="d-flex justify-content-between mb-6">
            <router-link to="/products" class="text-dark text-decoration-none">
              <button type="button" class="btn btn-outline-secondary px-6">
                繼續購物
              </button>
            </router-link>
            <router-link to="/Order" class="text-light text-decoration-none">
              <button type="button" class="btn btn-main px-6">
                前往下一步
              </button>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <div>
          <h3 class="mb-6">您尚未加入商品至購物車</h3>
          <button type="button" class="btn btn-main mb-6">
            <router-link class="text-decoration-none text-light" to="/products">繼續逛逛</router-link>
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
        loadingItem: '' // 先給預設值才不會出錯
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
.cartHr {
  border: 2px solid #cbac67;
}
</style>
