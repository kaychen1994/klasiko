import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // frontEnd
  // {
  //   path: '*',
  //   redirect: '/'
  // },
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/Home.vue')
      },
      {
        path: 'about',
        component: () => import('../views/front/About.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/Products.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/front/Product.vue')
      },
      {
        path: 'contact',
        component: () => import('../views/front/Contact.vue')
      },
      {
        path: 'news',
        component: () => import('../views/front/News.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/Cart.vue')
      },
      {
        path: 'order',
        component: () => import('../views/front/Order.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/front/Checkout.vue')
      },
      {
        path: 'faq',
        component: () => import('../views/front/Faq.vue')
      }
    ]
  },
  // login
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  // admin
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/admin/Coupons.vue')
      },
      {
        path: 'order',
        component: () => import('../views/admin/Order.vue')
      },
      {
        path: 'image',
        component: () => import('../views/admin/Image.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
