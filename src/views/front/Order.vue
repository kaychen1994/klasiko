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
    <div class="topCover order-bg bg-img d-flex mb-3">
      <h3 class="coverTitle">Order</h3>
    </div>
    <div class="container-fluid">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        輸入優惠碼 <strong>discount5</strong> ， 立即享有 95 折優惠
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
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
      <div class="row step">
        <div class="col-md-12">
          <ul class="d-flex justify-content-around px-6 mb-7">
            <li class="process">
              <span class="material-icons mb-1">shopping_cart</span>
              <span>1.確認購物車</span>
            </li>
            <li class="process processActive">
              <span class="material-icons mb-1">wysiwyg</span>
              <span>2.確認訂單</span>
            </li>
             <li class="process">
                <span class="material-icons mb-1">local_atm</span>
                <span>3.結帳</span>
              </li>
            </ul>
        </div>
      </div>
      <div class="row d-flex justify-content-center mb-6">
        <div class="col-lg-5 col-sm-10">
          <table class="table table-hover mb-5">
            <thead class="thead-light">
              <tr>
                <th scope="col">商品圖</th>
                <th scope="col">產品名稱</th>
                <th scope="col">數量</th>
                <th scope="col">價格</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in carts" :key="item.product.id + 1">
                <td>
                  <router-link :to="`/product/${ item.product.id }`">
                    <img :src="item.product.imageUrl[0]" class="cartImg" />
                  </router-link>
                </td>
                <td>{{ item.product.title }}</td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.product.price | money }}</td>
              </tr>
            </tbody>
          </table>
          <hr class="cartHr mb-2" />
          <div class="d-flex justify-content-end font-weight-bold mb-3">
            <ul v-if="coupon.enabled" class="list-unstyled text-right">
              <li>商品總額： {{ cartTotal | money }}</li>
              <li class="mb-3">優惠折扣：- {{ cartTotal * [ 1- (coupon.percent / 100)] | money }}</li>
              <li class="amount text-danger">總計：{{ cartTotal * (coupon.percent / 100) | money }}</li>
            </ul>
            <p class="text-danger amount" v-else>總計： {{ cartTotal | money }}</p>
          </div>
        </div>
        <div class="col-lg-5 col-sm-10" id="ValidationProvider">
          <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="addOrder">
              <div class="form-group">
                <validation-provider v-slot="{ errors, classes }" rules="required|email">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label for="email" class="input-group-text"><span class="text-red mr-1">*</span>收件人信箱</label>
                    </div>
                    <input type="email" class="form-control" name="信箱" id="email" v-model="form.email" :class="classes">
                  </div>
                  <span v-if="errors[0]" class="invalid-feedback text-left">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider v-slot="{ errors, classes }" rules="required">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label for="name" class="input-group-text"><span class="text-red mr-1">*</span>收件人姓名</label>
                    </div>
                    <input type="text" class="form-control" name="收件人姓名" id="name" v-model="form.name" :class="classes">
                  </div>
                  <span v-if="errors[0]" class="invalid-feedback text-left">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider v-slot="{ errors, classes }" rules="required|min:10">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label for="phone" class="input-group-text"><span class="text-red mr-1">*</span>收件人電話</label>
                    </div>
                    <input type="text" class="form-control" name="收件人電話" id="phone" v-model="form.tel" :class="classes">
                  </div>
                  <span v-if="errors[0]" class="invalid-feedback text-left">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider v-slot="{ errors, classes }" rules="required|min:10">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label for="address" class="input-group-text"><span class="text-red mr-1">*</span>收件人地址</label>
                    </div>
                    <input type="text" class="form-control" name="收件人地址" id="address" v-model="form.address" :class="classes">
                  </div>
                  <span v-if="errors[0]" class="invalid-feedback text-left">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="payment">付款方式</label>
                </div>
                <select class="custom-select" id="payment" v-model="form.payment" required>
                  <option>WebATM</option>
                  <option>ATM</option>
                  <option>CVS</option>
                  <option>Barcode</option>
                  <option>Credit</option>
                  <option>ApplePay</option>
                  <option>GooglePay</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label for="msg" class="input-group-text">備註</label>
                </div>
                <textarea class="form-control" id="msg" v-model="form.msg" aria-label="With textarea"></textarea>
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
        loadingItem: ''
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
      this.$http.get(url)
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
    addOrder () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/orders`
      this.isLoading = true
      const order = { ...this.form }
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code
      }
      this.$http.post(url, order)
        .then((res) => {
          this.getCart()
          this.$router.push(`/checkout/${res.data.data.id}`)
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/coupon/search`
      this.isLoading = true
      this.$http.post(url, { code: this.coupon_code })
        .then((res) => {
          this.getCart()
          this.coupon = res.data.data
          Alert.fire({
            title: '優惠券已啟用',
            icon: 'success'
          })
          this.isLoading = false
        })
        .catch((err) => {
          const errorData = err.response.data.errors
          if (errorData) {
            errorData.code.forEach((errmsg) => {
              Alert.fire({
                title: `${errmsg}`,
                icon: 'error'
              })
            })
          } else {
            const { message } = err.response.data
            Alert.fire({
              title: `${message}`,
              icon: 'error'
            })
          }
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss">
.order-bg {
  background-image: url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/kOBjzxz5hPhtwbeqgCw063DxnAP2Ol1IbRxBj5EdMnH2IyYI8ztx2uWEgrzzPBPfVYd5soiPwIXsEerEhfQ0JTcRoAOeEtCwbXlLZpbIgdLh4F8knpUSGwNIhnUdMJmQ.jpg');
}
.label {
  text-align: left !important;
  font-weight: bold;
  color: #cbac67;
}
.invalid-feedback {
  display: block;
  font-size: 90%;
}
</style>
