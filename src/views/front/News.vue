<template>
  <div>
    <div class="topCover news-bg bg-img d-flex">
      <h3 class="coverTitle">NEWS</h3>
    </div>
    <div class="container">
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
      <div class="lastestNews mb-6">
        <div class="row">
          <div class="col-md-4 mb-3">
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/cunFJ5IHfEkcmil4MeEmBFBTPefIToABrBmlT0unGeos02JIYxmYoncZdAGViQEg1J5EBKKylkXlB28BrCz4daIPnXN0fLVVdc1NfQgNmVhvAdk0K5zdPFt5kfGS2LGK.jpg" alt="七月份限時優惠" class="mb-3 newsImg" />
            <h4 class="mb-2 font-weight-bold text-danger">七月份限時優惠</h4>
            <p class="mb-3 text-secondary">2020/07/01</p>
            <p>07/01 ~ 07/31 限時！全館石英錶款 77 折。</p>
            <router-link class="text-decoration-none text-main font-weight-bold" to="/products">前往購物 >></router-link>
          </div>
          <div class="col-md-4 mb-3">
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/IZpITnJUMlbA0AdM1BSZr3Cabe9tYIjBdWeJTleCTH5u6ynferQhmXMr5EcljoFzhY2QGGM3UhPmGpZmJYchhFnnq1DkxYJ5XShTMcpnb5tobOqI9wevv61mm2ynOlIN.jpg" alt="父親節優惠" class="mb-3 newsImg" />
            <h4 class="mb-2 font-weight-bold text-danger">父親節優惠</h4>
            <p class="mb-3 text-secondary">2020/08/02</p>
            <p>歡慶 88 節，任選一隻男錶立即享有 88 折優惠。</p>
            <router-link class="text-decoration-none text-main font-weight-bold" to="/products">前往購物 >></router-link>
          </div>
          <div class="col-md-4">
            <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/IWBXs0q5GebJrcHfXhstXrXEbF3stUDfgh2KIas9OoAMkTf7YY8PxE1cYXv3UL7J1WdXicYupxgPSxPsenL3kd6uJAwyciv1NkHOEHW73BwKAQFX8ItXAucKgLVrdPFF.jpg" alt="對錶限時優惠" class="mb-3 newsImg" />
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
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/uTqyA7PWl3Ut19vpEffBbgsjbEyGKJ63KKRRBMRcwtYzm6MZELonkVBLxM1aIqqlJK02vsy8BOk75K8KpzzeZAZXrJv6Ju6mdWyWs0oJC9rjpiDYi0mGpdWT9Me3KGOo.jpg" class="card-img-top" alt="石英錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">棕色皮革簡約石英錶</h5>
            <p
              class="card-text"
            >棕色皮革搭配白色錶面，簡約錶款配輕鬆穿搭，輕鬆創造休閒感。</p>
          </div>
        </div>
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/MAHH0ExIAKaMOBPuUaO7ZipSM1llqhssy7AuKhO3DprBkrqKLeLIk2dXodBmG3CcmM6ht9Nz0rqmHqzMcq84sb3QU0oqLaLWBIb1w2qmly3fCJ4hOGgAFoK8NggyLtUQ.jpg" class="card-img-top" alt="計時錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">素色復古計時錶</h5>
            <p
              class="card-text"
            >大錶面看起來落落大方，以最簡約的造型襯托時尚，是都會型男必備錶款，任何穿搭都合適。</p>
          </div>
        </div>
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/SfH8pydcI8HVz9VEyPGZH5RHacEfgd1fu0BZFZPtQmjx9Tcc7UMYUhgWsqc60IIxDTjqgpMZIFDFqATSfL0ssTakIcys3AlmTQPZ3yiaphRF3sySS37iDm5i0f7Sun9I.jpg" class="card-img-top" alt="經典錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">黑色皮革經典錶</h5>
            <p
              class="card-text"
            >這款錶是由玫瑰金錶圈、白色錶面以及黑色皮革組成，最簡單也最經典，不管過了多久都不會退流行。</p>
          </div>
        </div>
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/lUDQpHzTA1r8wTg79t00hbmf4vNSfMOamq5LpkxahvObpRrGP5vFZPlukUwCvE7qxDhih42LJbPGbBbr2l8TypmQG1H36ozbJ3kmS79kY5wsHNoZ1AbkrXXw4WfRukxg.jpg" class="card-img-top" alt="石英錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">限量木色石英錶</h5>
            <p
              class="card-text"
            >錶帶由木頭打造，很適合熱愛大自然的愛錶人士收藏，小巧的錶面看起來更加內斂，很適合搭配休閒穿著。</p>
          </div>
        </div>
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/dK5pnqmAMCkVi46nErVTg8zvvrDEjK5vAzTVnKbSno96xX0X7u7jcQscYeZXF7HzerkBFiG3j6QwKX0pQHm2ba3U3g5I9cn1lvvMiQhx5DNyRMjNKA1CsOfDzgVXDxJ6.jpg" class="card-img-top" alt="潛水錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">型男必備潛水錶</h5>
            <p
              class="card-text"
            >陶瓷錶圈搭配黑色錶面，讓潛水錶看起來有型也有質感，因此就算穿西裝也不會感到突兀。</p>
          </div>
        </div>
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/JwZmr01PdgwsAdmv5IHjBfG0lZE3w9KeX8GW420qASMabt9JS1IfRoFOA6IaRvm3UhWLQpnBRPMQXuRicLeeVCWFMlSfCfMgiRqYYxd6Pmcrygs1Bt8bMEq9y4QIAOVX.jpg" class="card-img-top" alt="休閒錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">玫瑰金休閒錶</h5>
            <p
              class="card-text"
            >以玫瑰金的錶圈、米蘭錶帶、指針來襯托白色錶面，非常適合年輕女性配戴，看起來時尚又不失特色。</p>
          </div>
        </div>
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/897zzQIxOeIfU57vA0gx1ulJVSzy17U9EYvgKCYnoNIXzFyq1HXQBeNWHG4wjlV6NzKobfX7pAoj6sN93LSfySDbPrOtMk2bajOkZ9yxVR3sWbD0qzL4biqbBuL47JSb.jpg" class="card-img-top" alt="計時錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">金色錶帶計時錶</h5>
            <p
              class="card-text"
            >黃金色的錶帶、錶框加上鐵灰色的錶面，看起來高雅又時尚，搭配素色襯衫非常適合。</p>
          </div>
        </div>
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/tqHX5AXIf2L46u5G4QXpfDMJVkpDwHfmAJcslBFaxyRqkHhKvbQt6TCVbejOsGg2TOyG2ZJ0fSv2rdMF11wISZgYoZ1Jy3Y6YF2QwGlZW42GDqzso46eN9R82W753hmK.jpg" class="card-img-top" alt="經典錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">淑女必備經典錶</h5>
            <p
              class="card-text"
            >以小巧錶面以及纖細錶帶，讓腕錶看起來更秀氣，黃金配色也更顯得突出。</p>
          </div>
        </div>
        <div class="card">
          <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/0GAw8d3dTPBrjRru5Deg5d5UYmP1u7IFHAwuy8Qzb1bIonMm9ipoFBOVHigOExw4siJ2nfCoyD2vPwal9NN6VbVwrW7KfCxBAzyIkiYMeZ84pBsDVaY1ruOxKsdb50KP.jpg" class="card-img-top" alt="機械錶" />
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">精緻工藝機械錶</h5>
            <p
              class="card-text"
            >純手工製造的機械錶，低調奢華的造型讓手錶不只是看時間的工具，更是生活的一部份。</p>
          </div>
        </div>
      </div>
    </div>
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
