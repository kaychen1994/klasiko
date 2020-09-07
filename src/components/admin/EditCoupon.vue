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
          // 使用 split 切割相關時間戳
          const dedlineAt = this.tempCoupon.deadline.datetime.split(' ')
          ;[this.due_date, this.due_time] = dedlineAt // 設定日期 eslint standard 前面要加 ; 不然不改過
          $('#editCoupon').modal('show') // fix 在打開視窗前設定日期就能解決每次編輯優惠券的時間空白問題
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    updateCoupon () {
      let url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon`
      let httpMethod = 'post' // 新增
      this.isLoading = true
      if (!this.isNew) {
        url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`
        httpMethod = 'patch' // 編輯
      }
      // 日期格式 Y-m-d H:i:s，例如：「2020-06-16 09:31:18」
      this.tempCoupon.deadline_at = `${this.due_date} ${this.due_time}`
      this.$http[httpMethod](url, this.tempCoupon)
        .then((res) => {
          this.isLoading = false
          this.$emit('update')
          $('#editCoupon').modal('hide')
          this.getCoupons()
        })
        .catch((err) => {
          this.isLoading = false
          console.log(err.response.data)
        })
    }
  }
}
</script>
