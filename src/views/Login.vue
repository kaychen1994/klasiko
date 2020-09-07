<template>
  <div class="wrap container-fluid">
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
    <div class="row">
      <div class="loginBanner col-md-4">
        <h1 class="mb-5">KLÁSIKO</h1>
        <img src="https://upload.cc/i1/2020/07/16/AqkJsj.png" alt />
      </div>
      <validation-observer
        v-slot="{ invalid }"
        class="col-md-6 d-flex flex-column justify-content-center"
      >
        <form class="loginContent" @submit.prevent="login">
          <h2 class="font-weight-bold mb-4 text-warning">LOGIN</h2>
          <validation-provider v-slot="{ errors, classes }" rules="email|required">
            <div class="loginInput mb-3">
              <div class="loginLogo bg-dark">
                <span class="material-icons user">person</span>
              </div>
              <input
                type="email"
                name="管理者帳號"
                placeholder="Email address"
                class="pl-3"
                v-model="user.email"
                :class="classes"
                autofocus
              />
            </div>
            <span v-if="errors[0]" class="text-danger mb-3">{{ errors[0] }}</span>
          </validation-provider>
          <validation-provider v-slot="{ errors, classes }" rules="min:8|required">
            <div class="loginInput mb-3">
              <div class="loginLogo bg-dark">
                <span class="material-icons user">vpn_key</span>
              </div>
              <input
                type="password"
                name="管理者密碼"
                placeholder="Password"
                class="pl-3"
                v-model="user.password"
                :class="classes"
                @click.prevent="enterKey"
              />
            </div>
            <span v-if="errors[0]" class="text-danger mb-3">{{ errors[0] }}</span>
          </validation-provider>
          <button type="submit" class="btn btn-dark btn-lg loginBtn mt-5" :disabled="invalid">Login</button>
          <p class="mt-5">© 2020 Watches Store</p>
          <!-- <div class="btn" @click="getData">get</div> -->
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      token: '',
      user: {
        email: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    login () {
      // const apiPath = 'https://course-ec-api.hexschool.io/api/';
      const api = `${process.env.VUE_APP_APIPATH}auth/login`
      this.isLoading = true
      this.$http
        .post(api, this.user)
        .then((res) => {
          this.isLoading = false
          const { token } = res.data
          const { expired } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(
            expired * 1000
          )}; path=/`
          this.$router.push('/admin/products') // 登入成功跳到 products
        })
        .catch((error) => {
          this.isLoading = false
          console.log(error)
        })
    },
    // password 輸入後按 enter 也可以 login
    enterKey (e) {
      if (e.keyCode === 13) {
        // enter 的 keycode 是 13
        this.$router.push('/admin')
      }
    }
  }
}
</script>

<style lang="scss">
.wrap {
  margin: 0 auto;
  height: 100vh;
}
.loginBanner {
  margin-right: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(#abb2b9, #566573);
  h1 {
    color: white;
    font-weight: 800;
    font-size: 56px;
  }
  img {
    width: 320px;
    height: 156px;
  }
}

.loginContent {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 40px;
  }
}
.loginInput {
  display: flex;
  justify-content: center;
  .loginLogo {
    width: 50px;
    height: 50px;
  }
  input {
    width: 500px;
  }
}
.user {
  color: white;
  font-size: 40px;
  text-align: center;
  line-height: 50px;
}
.loginBtn {
  width: 80%;
  margin-left: 100px;
}
</style>
