<template>
  <div>
    <Nav />
    <router-view></router-view>
    <!-- <router-link to="/cart" class="cart pl-3 pr-1 pt-4 pb-3">
      <CartIcon />
    </router-link> -->
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/front/Nav.vue'
import Footer from '@/components/front/Footer.vue'
// import CartIcon from '@/components/front/CartIcon.vue'
export default {
  data () {
    return {}
  },
  components: {
    Nav,
    Footer
    // CartIcon
  }
}
</script>
