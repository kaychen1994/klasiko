<template>
  <div>
    <Nav />
    <router-view></router-view>
      <CartIcon />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/front/Nav.vue'
import Footer from '@/components/front/Footer.vue'
import CartIcon from '@/components/front/CartIcon.vue'

export default {
  data () {
    return {}
  },
  components: {
    Nav,
    Footer,
    CartIcon
  }
}
</script>
