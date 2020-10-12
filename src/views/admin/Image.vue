<template>
  <div class="py-6">
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
    <div class="container">
      <div class="row">
        <div class="col-12 mb-6">
          <p class="font-weight-bold">新增圖片：</p>
          <input type="file" id="imgFile" @change="uploadFile"/>
        </div>
        <div class="col-12">
          <p class="font-weight-bold">圖片列表</p>
          <table class="table table-hover">
            <thead class="thead-dark">
              <tr>
                <th>圖片縮圖</th>
                <th>圖片路徑</th>
                <th>編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in storages" :key="item.id">
                <td><img :src="item.path" class="w-120"></td>
                <td class="col-9">{{ item.path }}</td>
                <td>
                  <button class="btn btn-outline-danger"
                    @click.prevent="openModal(item)">
                    刪除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination :pages="pagination" @changePage="getFiles"></Pagination>
          <DelFileModal :temp-storage="tempStorage" @update="getFiles" />
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
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/storage?page=${num}`
      this.$http
        .get(url)
        .then((res) => {
          this.storages = res.data.data
          this.pagination = res.data.meta.pagination
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
          Alert.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error'
          })
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
