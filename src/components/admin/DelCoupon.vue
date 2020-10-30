<template>
  <div
    id="delCoupon"
    class="modal fade"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    role="dialog"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h3 class="modal-title text-light">刪除優惠券</h3>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p class="fz-20">
            是否要將
            <span class="text-danger">{{ tempCoupon.title }} | {{ tempCoupon.code }}</span> 刪除?
          </p>
          <p class="fz-20 d-flex align-items-center">
            <span class="material-icons text-danger mr-3">error_outline</span>
            <span>刪除後就無法復原 !!!</span>
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消刪除</button>
          <button type="button" class="btn btn-danger" @click="delCoupon">確認刪除</button>
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
    tempCoupon: {
      type: Object,
      required: true
    }
  },
  methods: {
    delCoupon () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.tempCoupon.id}`
      this.$http.delete(url, this.tempCoupon)
        .then(() => {
          $('#delCoupon').modal('hide')
          this.$emit('update')
        })
        .catch(() => {
          Alert.fire({
            title: '優惠券刪除失敗',
            icon: 'error'
          })
        })
    }
  }
}
</script>
