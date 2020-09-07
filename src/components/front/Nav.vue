<template>
  <div class="navTemplate d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center">
      <h1 class="logo">
        <router-link class="navbar-brand text-main" to="/">KLÁSIKO</router-link>
      </h1>
      <div class="navMenu d-flex justify-content-between align-items-center">
        <ul class="fz-20 mr-auto d-flex list-unstyled">
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/about">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/products">全系列錶款</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/news">最新消息</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/contact">聯絡我們</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light" to="/faq">常見問題</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-link class="cart text-decoration-none mr-5" to="/cart">
      <span class="material-icons fz-2r text-main">shopping_cart</span>
    </router-link>
  </div>
</template>

<style lang="scss">
.navTemplate {
  height: 96px;
  background: black; // #414547
}
</style>
