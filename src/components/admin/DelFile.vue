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
    <div
      class="modal fade"
      id="delFileModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除圖片</span>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="tempStorage.path" class="w-120 mb-3" />
            <p>
              <span class="text-danger">是否刪除圖片</span>(刪除後將無法恢復)。
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click.prevent="delFile"
              :disabled="isLoading"
            >
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Alert from '@/alert.js'
export default {
  data () {
    return {
      isLoading: false
    }
  },
  props: {
    tempStorage: {
      type: Object,
      required: true
    }
  },
  methods: {
    delFile () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage/${this.tempStorage.id}`
      this.isLoading = true
      this.$http
        .delete(url)
        .then(() => {
          $('#delFileModal').modal('hide')
          Alert.fire({
            title: '刪除成功',
            icon: 'success'
          })
          this.isLoading = false
        })
        .catch(() => {
          $('#delFileModal').modal('hide')
          Alert.fire({
            title: '刪除失敗',
            icon: 'error'
          })
          this.isLoading = false
        })
    }
  }
}
</script>
