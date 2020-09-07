<template>
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header bg-dark py-4">
        <h3 class="modal-title text-light" id="exampleModalLabel">新增/編輯產品</h3>
        <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container">
          <div class="row d-flex justify-content-between">
            <div class="creatImg col-md-4">
              <h4 class="mb-3">輸入圖片網址</h4>
              <input
                type="text"
                v-model="tempProduct.imageUrl[0]"
                class="px-3 py-1 mb-5 w-100"
                placeholder="請輸入圖片連結"
              />
              <img class="img-fluid mb-3" :src="tempProduct.imageUrl[0]" alt />
              <input
                type="text"
                v-model="tempProduct.imageUrl[1]"
                class="px-3 py-1 mb-5 w-100"
                placeholder="請輸入圖片連結"
              />
              <img class="img-fluid" :src="tempProduct.imageUrl[1]" alt />
            </div>
            <div class="creatContent col-md-8">
              <h4 class="mb-3">標題</h4>
              <input
                type="text"
                v-model="tempProduct.title"
                class="px-3 py-1 w-100"
                placeholder="請輸入標題"
              />
              <div class="d-flex mt-3">
                <div class="mr-3">
                  <h4 class="mb-3">分類</h4>
                  <input
                    type="text"
                    v-model="tempProduct.category"
                    class="px-3 py-1 w-100"
                    placeholder="請輸入分類"
                  />
                </div>
                <div>
                  <h4 class="mb-3">輸入單位</h4>
                  <input
                    type="text"
                    v-model="tempProduct.unit"
                    class="px-3 py-1 w-100"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>
              <div class="d-flex mt-3">
                <div class="mr-3">
                  <h4 class="mb-3">原價</h4>
                  <input
                    type="text"
                    v-model="tempProduct.origin_price"
                    class="px-3 py-1 w-100"
                    placeholder="請輸入原價"
                  />
                </div>
                <div>
                  <h4 class="mb-3">售價</h4>
                  <input
                    type="text"
                    v-model="tempProduct.price"
                    class="px-3 py-1 w-100"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
              <hr class="mt-3" />
              <h4 class="mt-3">產品描述</h4>
              <textarea
                name
                id
                v-model="tempProduct.description"
                placeholder="請輸入產品描述"
                cols="70"
                rows="5"
                class="pt-3 pl-3"
              ></textarea>
              <h4 class="mt-3">說明內容</h4>
              <textarea
                name
                id
                v-model="tempProduct.content"
                placeholder="請輸入說明內容"
                cols="70"
                rows="5"
                class="pt-3 pl-3"
              ></textarea>
              <br />
              <input type="checkbox" class="mt-3" id="enabled" v-model="tempProduct.enabled" />
              <label for="enabled">是否啟用</label>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger px-5" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-info px-5" @click="updateProduct">確認</button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      tempProduct: {
        imageUrl: []
      }
    }
  },
  props: {
    isNew: {
      type: Boolean,
      required: true
    }
    // status
  },
  methods: {
    editDetails (id) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${id}`
      this.$http
        .get(url)
        .then((res) => {
          console.log(res)
          this.tempProduct = res.data.data
          $('#productModal').modal('show')
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    updateProduct () {
      // 新增
      let url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product`
      let httpMethod = 'post'
      // 編輯 如果不是新增就改用 patch 編輯
      if (!this.isNew) {
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`
        httpMethod = 'patch'
      }
      this.$http[httpMethod](url, this.tempProduct)
        .then(() => {
          this.$emit('update')
          $('#productModal').modal('hide')
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }
  }
}
</script>
