<template>
<div>
  <router-link to="/cart" class="px-2 py-4">
  <div class="cart py-3">
    <span class="material-icons text-light py-1">shopping_cart</span>
    <span
      class="badge badge-danger cartBadge"
      style="transform: translateX(-3px) translateY(-5px)"
    >{{ cartTotal }}</span>
  </div>
  </router-link>
</div>
</template>

<script>
export default {
  data () {
    return {
      cartTotal: 0
    }
  },
  created () {
    this.getCart()
    this.$bus.$on('in-cart', () => {
      this.getCart()
    })
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url).then((res) => {
        this.cartTotal = res.data.data.length
      })
    }
  }
}
</script>

<style lang="scss">
.cart {
  position: fixed;
  border-radius: 99em;
  background-color: #cbac67;
  opacity: 0.9;
  width: 70px;
  height: 70px;
  right: 1%;
  bottom: 10%;
  cursor: pointer;
  z-index: 5;
}
.cartBadge {
  border-radius: 10rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>
