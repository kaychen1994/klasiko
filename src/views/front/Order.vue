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
    <div class="topCover order-bg bg-img d-flex">
      <h3 class="coverTitle">Order</h3>
    </div>
    <div class="container-fluid">
      <!-- breadcrumb -->
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
          <li>確認訂單</li>
        </ul>
      </div>
      <!-- process -->
      <ul class="d-flex justify-content-center mb-7">
        <li class="process mr-8">
          <span class="material-icons mb-1">shopping_cart</span>
          <span>1.確認購物車</span>
        </li>
        <li class="process processActive mr-8">
          <span class="material-icons mb-1">wysiwyg</span>
          <span>2.確認訂單</span>
        </li>
        <li class="process">
          <span class="material-icons mb-1">local_atm</span>
          <span>3.結帳</span>
        </li>
      </ul>
      <!-- cart list -->
      <div class="row d-flex justify-content-around mb-6">
        <div class="col-md-5">
          <table class="table table-hover mb-5">
            <thead class="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">商品圖</th>
                <th scope="col">產品名稱</th>
                <th scope="col">數量</th>
                <th scope="col">價格</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in carts" :key="item.product.id + 1">
                <td>
                  <span class="material-icons text-success">done_outline</span>
                </td>
                <td>
                  <router-link :to="`/product/${ item.product.id }`">
                    <img :src="item.product.imageUrl[0]" class="cartImg" />
                  </router-link>
                </td>
                <td>{{item.product.title}}</td>
                <td>{{item.quantity}}</td>
                <td>{{item.product.price | money }}</td>
              </tr>
            </tbody>
          </table>
          <hr class="cartHr mb-2" />
          <div class="d-flex justify-content-end text-danger font-weight-bold mb-3">
            <p class="fz-32">商品總額： {{ cartTotal | money}}</p>
          </div>
          <div class="d-flex justify-content-between mb-6">
            <router-link to="/cart" class="text-dark text-decoration-none">
              <button type="button" class="btn btn-outline-secondary px-6">返回購物車</button>
            </router-link>
          </div>
        </div>
        <div class="col-md-5" id="ValidationProvider">
          <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="addOrder">
              <div class="form-group">
                <validation-provider v-slot="{ errors, classes }" rules="required|email">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="信箱"
                    v-model="form.email"
                    class="form-control"
                    id="email"
                    placeholder="Email"
                    :class="classes"
                  />
                  <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider v-slot="{ errors, classes }" rules="required">
                  <label for="name">收件人姓名</label>
                  <input
                    type="text"
                    name="收件人姓名"
                    v-model="form.name"
                    class="form-control"
                    id="name"
                    placeholder="收件人姓名"
                    :class="classes"
                  />
                  <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider v-slot="{ errors, classes }" rules="required|min:10">
                  <label for="phone">收件人電話</label>
                  <input
                    type="text"
                    name="收件人電話"
                    v-model="form.tel"
                    class="form-control"
                    id="phone"
                    placeholder="收件人電話"
                    :class="classes"
                  />
                  <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider v-slot="{ errors, classes }" rules="required|min:10">
                  <label for="address">收件人地址</label>
                  <input
                    type="text"
                    name="收件人地址"
                    v-model="form.address"
                    class="form-control"
                    id="address"
                    placeholder="收件人地址"
                    :class="classes"
                  />
                  <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <label for="payment">付款方式</label>
                <select class="form-control" id="payment" v-model="form.payment" required>
                  <option>WebATM</option>
                  <option>ATM</option>
                  <option>CVS</option>
                  <option>Barcode</option>
                  <option>Credit</option>
                  <option>ApplePay</option>
                  <option>GooglePay</option>
                </select>
              </div>
              <div class="form-group">
                <label for="msg">備註</label>
                <textarea class="form-control" id="msg" v-model="form.msg" rows="3"></textarea>
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="輸入優惠碼" v-model="coupon_code">
                <div class="input-group-append">
                  <button  type="button" class="btn btn-outline-secondary" @click.prevent="addCouponCode">套用</button>
                </div>
              </div>
              <button type="submit" class="btn btn-main px-6" :disabled="invalid">送出訂單</button>
            </form>
          </validation-observer>
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
        tel: '',
        address: '',
        payment: 'WebATM',
        message: ''
      },
      isLoading: false,
      status: {
        loadingItem: '' // 先給預設值才不會出錯
      },
      coupon: {},
      coupon_code: ''
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
    addOrder () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`
      this.isLoading = true
      const order = { ...this.form }
      this.$http.post(url, order)
        .then((res) => {
          this.getCart()
          this.$router.push(`/checkout/${res.data.data.id}`)
          this.isLoading = false
          console.log(order)
        })
        .catch((err) => {
          console.log(err.response)
          this.isLoading = false
        })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/coupon/search`
      this.isLoading = false
      this.$http.post(url, { code: this.coupon_code })
        .then((res) => {
          this.getCart()
          this.coupon = res.data.data
          Alert.fire({
            title: '優惠券已加入',
            icon: 'success'
          })
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err.response.data)
          Alert.fire({
            title: `${err.response.data.errors}`,
            icon: 'warning'
          })
        })
    }
  }
}
</script>

<style lang="scss">
.order-bg {
  background-image: url('https://i.imgur.com/qwgr12f.jpg');
}
</style>
