<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"> </span>
      </button>
      <h1 class="logo">
        <router-link class="navbar-brand text-main" to="/">KLÁSIKO</router-link>
      </h1>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div
          class="navMenu d-flex justify-content-between align-items-center"
          id="navbarToggleExternalContent"
        >
          <ul
            class="navbar-nav mr-auto mt-2 mt-lg-0 fz-20 mr-auto d-flex list-unstyled"
          >
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/about"
                >關於我們</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/products"
                >全系列錶款</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/news"
                >最新消息</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/contact"
                >聯絡我們</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-light" to="/faq"
                >常見問題</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  watch: {
    $route () {
      // 收合選單
      $('#navbarNav').collapse('hide')
    }
  }
}
</script>

<style lang="scss">
.navMenu li :hover{
  border-bottom: 3px solid white;
}
</style>
