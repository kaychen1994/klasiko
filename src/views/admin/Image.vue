<template>
  <div class="py-6">
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
    <div class="container">
      <div class="row">
        <div class="input-group mb-6">
          <div class="input-group-prepend">
            <span class="input-group-text">新增圖片：</span>
          </div>
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="imgFile"  @change="uploadFile">
            <label class="custom-file-label" for="imgFile">選擇檔案</label>
          </div>
        </div>
        <div class="col-12">
          <h2 class="font-weight-bold mb-3">圖片列表</h2>
          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th>圖片縮圖</th>
                <th>編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in storages" :key="item.id">
                <td><img :src="item.path" class="w-120"></td>
                <td>
                  <button class="btn btn-outline-danger"
                    @click.prevent="openModal(item)">
                    刪除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination :pages="pagination" @update="getFiles"></Pagination>
          <DelFileModal :temp-storage="tempStorage" @change="getFiles" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Alert from '@/alert.js'
import Pagination from '@/components/admin/Pagination.vue'
import DelFileModal from '@/components/admin/DelFile.vue'

export default {
  components: {
    Pagination,
    DelFileModal
  },
  data () {
    return {
      isLoading: false,
      storages: [],
      pagination: {},
      tempStorage: {}
    }
  },
  created () {
    this.getFiles()
  },
  methods: {
    openModal (item) {
      this.tempStorage = { ...item }
      $('#delFileModal').modal('show')
    },
    getFiles (num = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage?paged=10&page=${num}`
      this.$http
        .get(url)
        .then((res) => {
          this.storages = res.data.data
          this.pagination = res.data.meta.pagination
          this.isLoading = false
        })
        .catch(() => {
          Alert.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
          this.isLoading = false
        })
    },
    uploadFile () {
      const uploadedfile = document.querySelector('#imgFile').files[0]
      const formData = new FormData()
      formData.append('file', uploadedfile)
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage`
      this.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((res) => {
          if (res.status === 200) {
            Alert.fire({
              title: '圖片上傳成功',
              icon: 'success'
            })
            this.getFiles()
          }
        })
        .catch(() => {
          Alert.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
        })
    }
  }
}
</script>
