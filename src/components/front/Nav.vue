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
          class="navMenu"
          id="navbarToggleExternalContent"
        >
          <ul
            class="navbar-nav fz-20 mr-auto d-flex list-unstyled"
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
      $('#navbarNav').collapse('hide')
    }
  }
}
</script>

<style lang="scss">
.nav-link:hover, .nav-link.active{
  border-bottom: 3px solid white !important;
}
.navMenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 768px) {
  .navMenu {
    display: inline;
  }
  .nav-link:hover, .nav-link.active {
    background: #cbac67;
    font-weight: bold !important;
  }
  .navbar {
    padding-top: 0;
    padding-bottom: 0;
  }
  .navbar-nav{
    margin-bottom: 24px;
  }
  .navbar-brand {
    margin-right: 0;
  }
}
</style>
