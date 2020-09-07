<template>
  <div class="menu col-md-2 pt-5 pl-3">
    <ul class="list-unstyled">
      <li class="mb-5 mx-2 d-flex">
        <h1 class="text-light font-weight-bold fz-36">後台管理平台</h1>
      </li>
      <li class="mb-3">
        <router-link
          to="/admin/products"
          class="mr-4 d-flex align-items-center text-decoration-none"
        >
          <span class="material-icons text-light mr-3">view_list</span>
          <span class="text-light list-hover">產品列表</span>
        </router-link>
      </li>
      <li class="mb-3">
        <router-link to="/admin/order" class="mr-4 d-flex align-items-center text-decoration-none">
          <span class="material-icons text-light mr-3">list_alt</span>
          <span class="text-light list-hover">訂單列表</span>
        </router-link>
      </li>
      <li class="mb-3">
        <router-link
          to="/admin/coupons"
          class="mr-4 d-flex align-items-center text-decoration-none"
        >
          <span class="material-icons text-light mr-3">local_offer</span>
          <span class="text-light list-hover">優惠券</span>
        </router-link>
      </li>
      <li class="mb-3">
        <router-link to="/admin/image" class="mr-4 d-flex align-items-center text-decoration-none">
          <span class="material-icons text-light mr-3">perm_media</span>
          <span class="text-light list-hover">圖片列表</span>
        </router-link>
      </li>
    </ul>
    <div>
      <router-link to="/" class="mr-4 d-flex align-items-center mb-3 text-decoration-none">
        <span class="material-icons text-light mr-3">important_devices</span>
        <span class="text-light list-hover">返回前台</span>
      </router-link>
      <router-link to="/login" class="mr-4 d-flex align-items-center mb-5 text-decoration-none">
        <span class="material-icons text-light mr-3">dvr</span>
        <span class="text-light list-hover">登出</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.homeLogo {
  width: 50px;
}
.menu {
  background: linear-gradient(#abb2b9, #566573);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  a {
    font-size: 20px;
  }
}
.list-hover:hover {
  font-size: 28px;
  border-bottom: 1px solid white;
}
.admin {
  display: flex;
  align-items: center;
  span {
    color: white;
    font-size: 28px;
  }
}
.logOut:hover {
  font-size: 32px;
  color: #e74c3c;
  border-bottom: 1px solid #e74c3c;
}
// admin content
.creatContent {
  padding: 8px 16px;
}

// font-size calculations
.fz-20 {
  font-size: 20px;
}
.fz-36 {
  font-size: 36px;
}
</style>
