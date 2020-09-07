<template>
  <!-- admin content -->
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
    <div class="my-5 d-flex justify-content-start">
      <button
        type="button"
        class="creatContent fz-20 btn btn-info"
        data-toggle="modal"
        data-target=".bd-example-modal-xl"
        @click="openModal('new')"
      >建立新的產品</button>
    </div>
    <!-- product modal -->
    <div
      id="productModal"
      class="modal fade bd-example-modal-xl"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myExtraLargeModalLabel"
      aria-hidden="true"
    >
      <product-modal ref="productModal" :is-new="isNew" :temp-product="tempProduct" @update="getProducts"></product-modal>
    </div>
    <!-- delete modal -->
    <div
      id="delProductModal"
      class="modal fade"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <del-modal :temp-product="tempProduct" @update="getProducts"></del-modal>
    </div>
    <!-- product list -->
    <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">分類</th>
          <th scope="col">產品名稱</th>
          <th scope="col">原價</th>
          <th scope="col">售價</th>
          <th scope="col">是否啟用</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.origin_price | money }}</td>
          <td>{{ item.price | money }}</td>
          <td>
            <span v-if="item.enabled" class="text-warning">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary mr-2"
                @click="openModal('edit',item)"
              >編輯</button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="openModal('delete',item)"
              >刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination 前內後外-->
    <pagination :pages="pagination" @update="getProducts"></pagination>
  </div>
</template>

<script>
import $ from 'jquery'
import DelModal from '@/components/admin/DelModal.vue'
import ProductModal from '@/components/admin/ProductModal.vue'
import Pagination from '@/components/admin/Pagination.vue'
export default {
  components: {
    DelModal,
    ProductModal,
    Pagination
  },
  data () {
    return {
      token: '',
      isNew: false,
      isLoading: false,
      products: [],
      pagination: {},
      tempProduct: {
        mageUrl: []
      }
    }
  },
  methods: {
    // 取得產品資料
    getProducts (num = 1) {
      this.isLoading = true
      // 當 num 為 undefined 的時候代上 1 ，將 num 預設為 1
      const apiUrl = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?paged=10&page=${num}`
      this.$http
        .get(apiUrl)
        .then((res) => {
          this.isLoading = false
          console.log(res)
          this.products = res.data.data
          this.pagination = res.data.meta.pagination

          if (this.tempProduct.id) {
            this.tempProduct = {
              imageUrl: []
            }
            $('#productModal').modal('hide') // 更新結束後關閉 modal
          }
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err.response)
        })
    },
    openModal (isNew, item) {
      switch (isNew) {
        case 'new': {
          // 新增
          this.tempProduct = {
            imageUrl: []
          }
          this.isNew = true
          $('#productModal').modal('show')
          break
        }
        case 'edit': {
          // 編輯
          this.isNew = false
          this.$refs.productModal.editDetails(item.id)
          break
        }
        case 'delete': {
          // 刪除
          this.tempProduct = Object.assign({}, item) // 淺拷貝
          $('#delProductModal').modal('show')
          break
        }
        default: {
          break
        }
      }
    },
    // 登出，清除 cookie
    logout () {
      document.cookie = 'token=; expires=; path=/'
      window.location = 'login.html'
    }
  },
  created () {
    // 帶出 token ， 沒有 token 無法取資料
    this.token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    // 作為預設值，每次發送都會把 token 帶上
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
    // 防止直接輸入網址進入，一定要 login
    if (this.token === '') {
      window.location = 'login.html'
    }
    this.getProducts() // 先運行 getProducts
  }
}
</script>

<style lang="scss">
.creatContent {
  padding: 8px 16px;
}
</style>
