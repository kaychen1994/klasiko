<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <Menu class="col-md-2"></Menu>
        <main role="main" class="col-md-9 px-4 m-auto">
          <router-view v-if="isSuccess" :token="token" />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/admin/Menu.vue'
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
      // Axios 預設值
      this.$http.defaults.headers.Authorization = `Bearer ${this.token}`
      const url = `${process.env.VUE_APP_APIPATH}auth/check`
      this.$http.post(url, { api_token: this.token })
        .then((res) => {
          if (res.data.success) {
            this.isSuccess = true
          }
        })
        .catch((err) => {
          console.log(err.response)
          this.$router.push('/login')
        })
    }
  }
}
</script>
