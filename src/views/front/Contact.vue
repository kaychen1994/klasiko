<template>
  <div>
    <div class="topCover contact-bg bg-img d-flex">
      <h3 class="coverTitle">CONTACT US</h3>
    </div>
    <div class="container">
      <!-- breadcrumb -->
      <div class="breadcrumb">
        <ul class="list-unstyled d-flex align-items-center">
          <li>
            <router-link class="nav-link text-main" to="/">首頁</router-link>
          </li>
          <li class="mr-1">></li>
          <li>聯絡我們</li>
        </ul>
      </div>
      <!-- repair -->
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        凡是購買 KLÁSIKO 全系列錶款，在
        <strong>2 年保固期間</strong>都可以拿到我們服務據點免費維修，超過保固期間也能享有維修折扣。
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="alert alert-warning alert-dismissible fade show mb-5" role="alert">
        在網路上購買 KLÁSIKO 全系列錶款，可於收到後
        <strong>七日內</strong>退回商品，退換貨運費由 KLÁSIKO 負責。
        <br />若有疑慮也可以直接電洽服務專線 0800-000-000
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <h2 class="h2Title">聯絡我們</h2>
      <!-- location -->
      <div class="location mb-6 d-flex justify-content-between">
        <div class="card" style="width: 24rem;">
          <img
            src="https://images.unsplash.com/photo-1527001929378-edd8dea61a06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            class="card-img-top"
            alt="KLÁSIKO 旗艦店"
          />
          <div class="card-body">
            <h3 class="card-title font-weight-bold text-main">台北 101 旗艦店</h3>
          </div>
          <div class="card-footer bg-transparent">
            <p class="fz-20 d-flex align-items-center">
              <span class="material-icons mr-2">call</span>
              電話：(02)2234-5678
            </p>
            <p class="fz-20 d-flex align-items-center">
              <span class="material-icons mr-2">schedule</span>
              營業時間：10:00-21:00
            </p>
            <p class="fz-20 d-flex align-items-center">
              <span class="material-icons mr-2">mail_outline</span>
              Email：klasiko@service.com
            </p>
          </div>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10224.782391184755!2d121.56124558990469!3d25.033854073012375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6e9d93249%3A0xd508f7b3aa02d931!2z5Y-w5YyXMTAx6KeA5pmv5Y-w!5e0!3m2!1szh-TW!2stw!4v1598883167334!5m2!1szh-TW!2stw"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
      <!-- 2 -->
      <div class="location mb-6 d-flex justify-content-between">
        <div class="card" style="width: 24rem;">
          <img
            src="https://images.unsplash.com/photo-1526743655626-e3d757b13d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            class="card-img-top"
            alt="KLÁSIKO 分店"
          />
          <div class="card-body">
            <h3 class="card-title font-weight-bold text-main">台中廣三 SOGO 分店</h3>
          </div>
          <div class="card-footer bg-transparent">
            <p class="fz-20 d-flex align-items-center">
              <span class="material-icons mr-2">call</span>
              電話：(04)2234-5678
            </p>
            <p class="fz-20 d-flex align-items-center">
              <span class="material-icons mr-2">schedule</span>
              營業時間：10:00-21:00
            </p>
            <p class="fz-20 d-flex align-items-center">
              <span class="material-icons mr-2">mail_outline</span>
              Email：klasiko@service.com
            </p>
          </div>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21195.99530920897!2d120.67218275209481!3d24.161581020599552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9cc02858c3%3A0x317a8c5860c7e433!2z5buj5LiJU09HT-eZvuiyqA!5e0!3m2!1szh-TW!2stw!4v1598885656282!5m2!1szh-TW!2stw"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
      <!-- 3 -->
      <div class="location mb-6 d-flex justify-content-between">
        <div class="card" style="width: 24rem;">
          <img
            src="https://images.unsplash.com/photo-1444881421460-d838c3b98f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
            class="card-img-top"
            alt="KLÁSIKO 分店"
          />
          <div class="card-body">
            <h3 class="card-title font-weight-bold text-main">高雄左營新光三越分店</h3>
          </div>
          <div class="card-footer bg-transparent">
            <p class="fz-20 d-flex align-items-center">
              <span class="material-icons mr-2">call</span>
              電話：(07)2234-5678
            </p>
            <p class="fz-20 d-flex align-items-center">
              <span class="material-icons mr-2">schedule</span>
              營業時間：10:00-21:00
            </p>
            <p class="fz-20 d-flex align-items-center">
              <span class="material-icons mr-2">mail_outline</span>
              Email：klasiko@service.com
            </p>
          </div>
        </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5515.457055666181!2d120.30839376555356!3d22.68635306952794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e056ff4d123ad%3A0x3a384dfb665b1a27!2z5paw5YWJ5LiJ6LaK6auY6ZuE5bem54ef5bqX!5e0!3m2!1szh-TW!2stw!4v1598885890857!5m2!1szh-TW!2stw"
            width="600"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contact-bg {
  background-image: url('https://i.imgur.com/eeF5q9Q.jpg');
}
.location {
  .card-body {
    padding-bottom: 0px !important;
  }
}
</style>
