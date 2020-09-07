<template>
<!-- 還沒做完 -->
  <div class="cart">
    <span class="material-icons text-light" aria-hidden="true">shopping_cart</span>
    <span
      class="badge badge-danger cartBadge"
      style="transform: translateX(-7px) translateY(-2px)"
    >{{ cartTotal }}</span>
  </div>
</template>

<style lang="scss">
.cart {
  position: fixed;
  border-radius: 50%;
  background-color: #cbac67;
  right: 1%;
  bottom: 10%;
  cursor: pointer;
  z-index: 5;
}
.cartBadge {
  border-radius: 10rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
}
</style>
