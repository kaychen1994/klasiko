<template>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-danger">
        <h3 class="modal-title text-light">刪除商品</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p class="fz-20">
          是否要將
          <span class="text-danger">{{ tempProduct.title }}</span> 刪除?
        </p>
        <img :src="tempProduct.imageUrl" alt class="mb-3 container-fluid" />
        <p class="fz-20 d-flex align-items-center">
          <span class="material-icons text-danger mr-3">error_outline</span>
          <span>刪除後就無法復原 !!!</span>
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消刪除</button>
        <button type="button" class="btn btn-danger" @click="delProduct">確認刪除</button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Alert from '@/alert.js'

export default {
  data () {
    return {}
  },
  props: {
    tempProduct: {
      type: Object,
      required: true
    }
  },
  methods: {
    delProduct () {
      const delUrl = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`
      this.$http.delete(delUrl, this.tempProduct)
        .then((res) => {
          $('#delProductModal').modal('hide')
          this.$emit('update')
        })
        .catch(() => {
          Alert.fire({
            title: '操作失敗',
            icon: 'error'
          })
        })
    }
  }
}
</script>
