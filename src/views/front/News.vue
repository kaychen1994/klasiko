<template>
  <div>
    <div class="topCover news-bg bg-img d-flex">
      <h3 class="coverTitle">NEWS</h3>
    </div>
    <div class="container">
      <!-- breadcrumb -->
      <div class="breadcrumb">
        <ul class="list-unstyled d-flex align-items-center">
          <li>
            <router-link class="nav-link text-main" to="/">首頁</router-link>
          </li>
          <li class="mr-1">></li>
          <li>最新消息</li>
        </ul>
      </div>
      <h2 class="h2Title">最新消息</h2>
      <!-- lastestNews -->
      <div class="lastestNews mb-6">
        <div class="row">
          <div class="col-md-4 mb-sm-3">
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/QqHyorydvRCZZ5kqKcsNcjTPtXPtsZCBJxPxnlYrFXvPlMXoYHOFgppJZIlMm3xNxBoLjxcwmOvhgq0ZvP0L8IcniLtP9SjUPjk4TpwIdHdozCOH4x3xT4tTwYMA8D1H.jpg" alt="七月份限時優惠" class="mb-3 newsImg" />
            <h4 class="mb-2 font-weight-bold text-danger">七月份限時優惠</h4>
            <p class="mb-3 text-secondary">2020/07/01</p>
            <p>07/01 ~ 07/31 限時！全館石英錶款 77 折。</p>
            <router-link class="text-decoration-none text-main font-weight-bold" to="/products">前往購物 >></router-link>
          </div>
          <div class="col-md-4 mb-sm-3">
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/uP7q17Qk7zCizsZT2nHF2b5oJ3ojtTMSxlO0YJQlyQ6mc4xcWOVb798HfvhfgqO9nxeKDQZGoRGCruycwUNLEGLiVJwhXw0uJMkjKcoU8fong9IgzhOlJgEGJPVsIjrp.jpg" alt="父親節優惠" class="mb-3 newsImg" />
            <h4 class="mb-2 font-weight-bold text-danger">父親節優惠</h4>
            <p class="mb-3 text-secondary">2020/08/02</p>
            <p>歡慶 88 節，任選一隻男錶立即享有 88 折優惠。</p>
            <router-link class="text-decoration-none text-main font-weight-bold" to="/products">前往購物 >></router-link>
          </div>
          <div class="col-md-4">
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/MvzJGhZIHsi3Yb6brE7FeD8BI30ISggFblyqhTcAEOr8klTn9BEW8mEYjma99YUg8vxqwUr6vDSDBOFXpV7Ed1JHuikxelVcHPHThfaPUvixZTBhxoFGToRXhh1d1f3i.jpg" alt="對錶限時優惠" class="mb-3 newsImg" />
            <h4 class="mb-2 font-weight-bold text-danger">對錶限時優惠</h4>
            <p class="mb-3 text-secondary">2020/08/23</p>
            <p>8/31 前全館對錶 7 折，送他/她最棒的七夕禮物。</p>
            <router-link class="text-decoration-none text-main font-weight-bold" to="/products">前往購物 >></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="h2Title mb-2">時尚穿搭</h2>
      <p class="font-italic mb-6">KLÁSIKO 好錶不僅能掌握時間，也能兼顧時尚</p>
      <div class="card-columns mb-6">
        <!-- 1 -->
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/mJO2v5Q3pqgtMQGDoh7twErSRQJ7F0ZSVIC0MR1NyvlI9fLzRkMAUi5kBY3K778jDlvmy5pIZQuVDv4xArwW2VtLBojcogiids0NPBXqNEwdoptjCBwHIv4FxVMJKExj.jpg" class="card-img-top" alt="石英錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">棕色皮革簡約石英錶</h5>
            <p
              class="card-text"
            >棕色皮革搭配白色錶面，簡約錶款配輕鬆穿搭，輕鬆創造休閒感。</p>
          </div>
        </div>
        <!-- 2 -->
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/J9ylHUZUw7ZvCRMxL8dxgdFsD1FYllSCa8PWq9Z2r10R54tAd6KgFC9FA8gI0NbmF1ckiaIUN7bZf7Vg5fGaFkAiNqcAC2YqImbE9pLcExzTTYD00jjLNmmC79Pop96S.jpg" class="card-img-top" alt="計時錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">素色復古計時錶</h5>
            <p
              class="card-text"
            >大錶面看起來落落大方，以最簡約的造型襯托時尚，是都會型男必備錶款，任何穿搭都合適。</p>
          </div>
        </div>
        <!-- 3 -->
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/XkLKH136YxmiKUC1M3VBZLZztn2ur3TjQecpTjyYG75uPIihZUyZKVa43CPXnkDTV159jSsYk69ImbmhbrTznQLfM4LixHttxghTUM4A2zX7qBNMEYTP2xhZ3JLgyJf2.jpg" class="card-img-top" alt="經典錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">黑色皮革經典錶</h5>
            <p
              class="card-text"
            >這款錶是由玫瑰金錶圈、白色錶面以及黑色皮革組成，最簡單也最經典，不管過了多久都不會退流行。</p>
          </div>
        </div>
        <!-- 4 -->
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/bqO39qGNiM7ybDomS2eXYro1T7VZ64PHB68ixoaiidbjYm50C1AZrvTsTc26Qjaoe8gLbzgRszlqjT070jU94TH67f9oC5L8QAA8iDsBsHY1atWucK0qGA290s7jqyy2.jpg" class="card-img-top" alt="石英錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">限量木色石英錶</h5>
            <p
              class="card-text"
            >錶帶由木頭打造，很適合熱愛大自然的愛錶人士收藏，小巧的錶面看起來更加內斂，很適合搭配休閒穿著。</p>
          </div>
        </div>
        <!-- 5 -->
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/9Wxb4cqvLCv5Co7QrTawrqS2NlWtf88O3A7RU5nYQ051XooZKILAC58dmxVuqMejR2Ihd3D2MCGccxnMewyJKOZL0pEWLU10dWoqAaiqXnrXAZXM2RKgZLaaBnCVs93C.jpg" class="card-img-top" alt="潛水錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">型男必備潛水錶</h5>
            <p
              class="card-text"
            >陶瓷錶圈搭配黑色錶面，讓潛水錶看起來有型也有質感，因此就算穿西裝也不會感到突兀。</p>
          </div>
        </div>
        <!-- 6 -->
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/YkgbobS1pVKFIV0hP73EkAk5mXZOLuOXcrUlGQcmDmIDtmZ1ue8XdyFPxdsoI7dWJRkO4GaFVIk3wtJCOchCOVgbeRQGyKKKNttH6ppUc7KSxlrhcCZYQo9EG1DTYcMl.jpg" class="card-img-top" alt="休閒錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">玫瑰金休閒錶</h5>
            <p
              class="card-text"
            >以玫瑰金的錶圈、米蘭錶帶、指針來襯托白色錶面，非常適合年輕女性配戴，看起來時尚又不失特色。</p>
          </div>
        </div>
        <!-- 7 -->
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/JXx1f67CmgQPDOD2vV09p5cWoOiJg6AcxgerPof99k3L4QyMXV3V7VUFZjXazjWBTWPBa3SKyQnceqVqGxHD0OB9hiXcJ841Q3yifUJLdKywgUgaX6BdZC5nGnjfSfvd.jpg" class="card-img-top" alt="計時錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">金色錶帶計時錶</h5>
            <p
              class="card-text"
            >黃金色的錶帶、錶框加上鐵灰色的錶面，看起來高雅又時尚，搭配素色襯衫非常適合。</p>
          </div>
        </div>
        <!-- 8 -->
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/PYCXvMZLcqLDj7NMTkF1xDWrcb9hHqO11fvLjaxVBHNeYqK989oiiHYUaaCyoaxy23BCPX3Q0UHrE305HOXHolkSpqTY7gblMqul06xrpddhXJVce4yQJFGx3AAV0F9s.jpg" class="card-img-top" alt="經典錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">淑女必備經典錶</h5>
            <p
              class="card-text"
            >以小巧錶面以及纖細錶帶，讓腕錶看起來更秀氣，黃金配色也更顯得突出。</p>
          </div>
        </div>
        <!-- 9 -->
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/zN1BMGLHVfvoWlvUQNDIE3NvtiWsesBWQFAAblD3dHlM2IYFkRZKNsJoNHKNrdwqRuLjYAA1VqlPYmaH9sqIESPxej1xzFN4Yckid0go9DqXH6Uzafxn1aoDksRLbO3y.jpg" class="card-img-top" alt="機械錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">精緻工藝機械錶</h5>
            <p
              class="card-text"
            >純手工製造的機械錶，低調奢華的造型讓手錶不只是看時間的工具，更是生活的一部份。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- subscribe -->
    <Subscribe />
  </div>
</template>

<script>
import Subscribe from '@/components/front/Subscribe.vue'
export default {
  data () {
    return {}
  },
  components: {
    Subscribe
  }
}
</script>

<style lang="scss">
.news-bg {
  background-image: url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/cthRPAKReYcqxdzGIYFNlJehnaCVRyhBnRSkHWYDtenYWux7Tz5XUFYL9TnIomnfYS8akNuIgYACT9iCal2YhlC4U7FXfgsRpIpKQ4QIVUTwsIIhQopPTn793wvcoGRz.jpg');
}
.newsImg {
  width: 100%;
}
</style>
