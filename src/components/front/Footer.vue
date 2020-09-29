<template>
  <div class="footer">
    <h3 class="logo">
      <a class="text-main text-decoration-none" href="#">KLÁSIKO</a>
    </h3>
    <p class="text-white">Copyright © 2020 kay Chen</p>
    <ul class="d-flex list-unstyled">
      <li class="nav-item">
        <router-link class="nav-link text-light" to="/news">最新消息</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-light" to="/products">全系列錶款</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link text-light" to="/contact">聯絡我們</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: black;
}
@media (max-width: 768px) {
  .footer {
    display: flex;
    flex-direction: column;
  }
}
</style>
