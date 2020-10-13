<template>
  <div>
    <div class="topCover faq-bg bg-img d-flex">
      <h3 class="coverTitle">FAQ</h3>
    </div>
    <div class="container">
      <!-- breadcrumb -->
      <div class="breadcrumb">
        <ul class="list-unstyled d-flex align-items-center">
          <li>
            <router-link class="nav-link text-main" to="/">首頁</router-link>
          </li>
          <li class="mr-1">></li>
          <li>常見問題</li>
        </ul>
      </div>
      <div class="faq py-6 mb-6">
        <h2 class="h2Title">常見問題</h2>
        <ul class="container faqList list-unstyled">
          <li class="faqItem">
            <div class="question">
              <a href="#" class="text-decoration-none d-flex justify-content-between">
                <h4>Q1.請問下單後多久可以到貨？</h4>
                <span class="down material-icons mr-20 text-main">keyboard_arrow_down</span>
                <span class="up material-icons mr-20 text-main">keyboard_arrow_up</span>
              </a>
            </div>
            <div class="answer">
              <p class="text-left">A1.下單後我們會立即確認訂單，並且安排出貨，預計 3~5 天內收到您訂購的商品。</p>
            </div>
          </li>
          <li class="faqItem">
            <div class="question">
              <a href="#" class="text-decoration-none d-flex justify-content-between">
                <h4>Q2.請問 KLÁSIKO 全系列商品都是正品嗎？</h4>
                <span class="down material-icons mr-20 text-main">keyboard_arrow_down</span>
                <span class="up material-icons mr-20 text-main">keyboard_arrow_up</span>
              </a>
            </div>
            <div class="answer">
              <p class="text-left">A2.KLÁSIKO 只賣正品，消費者可以安心下單。</p>
            </div>
          </li>
          <li class="faqItem">
            <div class="question">
              <a href="#" class="text-decoration-none d-flex justify-content-between">
                <h4>Q3.KLÁSIKO 提供維修服務嗎？</h4>
                <span class="down material-icons mr-20 text-main">keyboard_arrow_down</span>
                <span class="up material-icons mr-20 text-main">keyboard_arrow_up</span>
              </a>
            </div>
            <div class="answer">
              <p class="text-left">A3.KLÁSIKO 提供 2 年免費保固服務，超過 2 年也享有維修折扣。</p>
            </div>
          </li>
          <li class="faqItem">
            <div class="question">
              <a href="#" class="text-decoration-none d-flex justify-content-between">
                <h4>Q4.如何收到 KLÁSIKO 最新優惠消息？</h4>
                <span class="down material-icons mr-20 text-main">keyboard_arrow_down</span>
                <span class="up material-icons mr-20 text-main">keyboard_arrow_up</span>
              </a>
            </div>
            <div class="answer">
              <p class="text-left">A4.訂閱我們即可獲得最新優惠通知。</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- subscribe -->
    <Subscribe />
  </div>
</template>

<script>
import $ from 'jquery'
import Subscribe from '@/components/front/Subscribe.vue'
export default {
  data () {
    return {}
  },
  components: {
    Subscribe
  },
  mounted () {
    // faq
    $('.answer').hide()
    // 預設讓第一個 li 加上 active
    // $('.faqItem').eq(0).addClass('show')
    // 預設讓第一個 li 內文 顯示
    $('.answer').show()
    $('.faqItem').click(function (e) {
      e.preventDefault()
      // click 自己的時候顯示自己的 li，關掉其他 li
      // $(this).toggleClass('show').siblings().removeClass('show')
      // 讓自己的 li  切換收合
      $(this).children().next().slideToggle()
      // 讓其他 li  收合
      // $(this).siblings().children().next().slideUp()
    })
  }
}
</script>

<style lang="scss">
.faq-bg {
  background-image: url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/HtmU3ZY2mJ2nwNaKLHC9ysDTKfqwynOUMloR692C2SpqzdBt4GzKQYk86u1nPiZidJsvhoOocHK49No2nRaiGYoQLAUNqsVWuZgURU5VRNE4IQFnLxdXIyTrOODx7RyZ.jpg');
}
.faq {
  h4 {
    color: #cbac67 !important;
    font-weight: bold;
  }
  .faqItem {
    border: 1px solid #000000;
  }
  .faqItem:not(.show) .up {
    display: none;
  }
  .faqItem.show .down {
    display: none;
  }
  .question {
    border-bottom: 1px solid #000000;
    height: 70px;
    padding: 22px 0 22px 38px;
    h4 {
      font-size: 1.25rem;
      color: black;
    }
  }
  .answer {
    background-color: white;
    padding: 22px 0 22px 38px;
  }
}
@media (max-width: 375px) {
  .faq {
    .question {
      padding: 20px 10px;
      h4 {
        font-size: 16px;
      }
    }
    .answer {
      padding: 20px 10px;
    }
  }
}
</style>
