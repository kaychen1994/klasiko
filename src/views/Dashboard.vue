<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <Menu class="col-md-2"></Menu>
        <main role="main" class="col-md-9 px-4 m-auto">
          <router-view v-if="isSuccess" />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/admin/Menu.vue'
import Alert from '@/alert.js'

export default {
  components: {
    Menu
  },
  data () {
    return {
      token: '',
      isSuccess: false
    }
  },
  created () {
    this.checkSuccess()
  },
  methods: {
    checkSuccess () {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      const url = `${process.env.VUE_APP_APIPATH}auth/check`
      this.$http.post(url, { api_token: this.token })
        .then((res) => {
          if (res.data.success) {
            this.isSuccess = true
          }
          this.$http.defaults.headers.Authorization = `Bearer ${this.token}`
        })
        .catch(() => {
          Alert.fire({
            title: '請先登入',
            icon: 'error'
          })
          this.$router.push('/login')
        })
    }
  }
}
</script>
