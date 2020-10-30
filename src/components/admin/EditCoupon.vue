<template>
  <div
    id="editCoupon"
    class="modal fade"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    role="dialog"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-dark py-4">
          <h3 class="modal-title text-light" id="exampleModalLabel">新增/編輯折扣碼</h3>
          <button type="button" class="close text-light" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div>
            <label for="name" class="mb-3">名稱</label>
            <input
              id="name"
              type="text"
              v-model="tempCoupon.title"
              class="px-3 py-1 w-100"
              placeholder="請輸入名稱"
            />
            <div class="d-flex mt-3">
              <div class="mr-3">
                <label class="mb-3">折扣碼</label>
                <input
                  type="text"
                  v-model="tempCoupon.code"
                  class="px-3 py-1 w-100"
                  placeholder="請輸入折扣碼"
                />
              </div>
              <div>
                <label class="mb-3">折扣百分比</label>
                <input
                  type="text"
                  v-model="tempCoupon.percent"
                  class="px-3 py-1 w-100"
                  placeholder="請輸入折扣百分比"
                />
              </div>
            </div>
            <div class="d-flex mt-3">
              <div class="mr-3">
                <label class="mb-3">到期日</label>
                <input type="date" v-model="due_date" class="px-3 py-1 w-100" placeholder="請輸入到期日" />
              </div>
              <div class="mr-3">
                <label class="mb-3">到期時間</label>
                <input
                  type="time"
                  step="1"
                  v-model="due_time"
                  class="px-3 py-1 w-100"
                  placeholder="請輸入到期時間"
                />
              </div>
            </div>
            <p class="mt-3">{{ tempCoupon.deadline_at }}</p>
            <hr class="mt-3" />
            <div class="mt-3 d-flex align-items-center">
              <input type="checkbox" class="mr-3" id="enabled" v-model="tempCoupon.enabled" />
              <label for="enabled">是否啟用</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger px-5" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-info px-5" @click="updateCoupon">確認</button>
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
      tempCoupon: {
        title: '',
        code: '',
        percent: 100,
        enabled: false,
        deadline_at: ''
      },
      due_date: '',
      due_time: '',
      isLoading: false
    }
  },
  props: {
    isNew: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    editDetails (id) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${id}`
      this.$http
        .get(url)
        .then((res) => {
          this.tempCoupon = res.data.data
          const dedlineAt = this.tempCoupon.deadline.datetime.split(' ')
          ;[this.due_date, this.due_time] = dedlineAt
          $('#editCoupon').modal('show')
        })
        .catch(() => {
          Alert.fire({
            title: '操作失敗',
            icon: 'error'
          })
        })
    },
    updateCoupon () {
      let url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon`
      let httpMethod = 'post'
      this.isLoading = true
      if (!this.isNew) {
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`
        httpMethod = 'patch'
      }
      this.tempCoupon.deadline_at = `${this.due_date} ${this.due_time}`
      this.$http[httpMethod](url, this.tempCoupon)
        .then((res) => {
          this.$emit('update')
          $('#editCoupon').modal('hide')
          this.getCoupons()
          this.isLoading = false
        })
        .catch(() => {
          Alert.fire({
            title: '操作失敗',
            icon: 'error'
          })
          this.isLoading = false
        })
    }
  }
}
</script>
