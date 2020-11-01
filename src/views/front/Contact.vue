<template>
  <div>
    <div class="topCover contact-bg bg-img d-flex">
      <h3 class="coverTitle">CONTACT US</h3>
    </div>
    <div class="container">
      <div class="breadcrumb">
        <ul class="list-unstyled d-flex align-items-center">
          <li>
            <router-link class="nav-link text-main" to="/">首頁</router-link>
          </li>
          <li class="mr-1">></li>
          <li>聯絡我們</li>
        </ul>
      </div>
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
      <div class="mb-6 row px-2 d-flex flex-column align-items-center">
        <div class="card contactCard col-md-11 mb-4">
          <img
            src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/dRdCZgSnvEcP7OViwEMqJxEXcqmMKXbuIPYtNLjGEhNGEguynitBirVTn9jH2AHmjMcY38piL1PBLQx4TXvzQjP9L3rveFCPlYb9HlrFxzyfVEAhg4XA20IBleHJbEiY.jpg"
            class="card-img-top"
            alt="KLÁSIKO 旗艦店"
          />
          <div class="card-body">
            <h3 class="card-title font-weight-bold text-main">台北 101 旗艦店</h3>
          </div>
          <div class="card-footer bg-transparent">
            <p class="fz-20 d-flex align-items-center justify-content-lg-center justify-content-sm-between">
              <span class="material-icons mr-lg-2 mr-sm-1">call</span>
              電話：(02)2234-5678
            </p>
            <p class="fz-20 d-flex align-items-center justify-content-lg-center justify-content-sm-between">
              <span class="material-icons mr-lg-2 mr-sm-1">schedule</span>
              營業時間：10:00-21:00
            </p>
            <p class="fz-20 d-flex align-items-center justify-content-lg-center justify-content-sm-between">
              <span class="material-icons mr-lg-2 mr-sm-1">mail_outline</span>
              Email：klasiko@service.com
            </p>
          </div>
        </div>
        <div class="map col-md-11">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10224.782391184755!2d121.56124558990469!3d25.033854073012375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6e9d93249%3A0xd508f7b3aa02d931!2z5Y-w5YyXMTAx6KeA5pmv5Y-w!5e0!3m2!1szh-TW!2stw!4v1598883167334!5m2!1szh-TW!2stw"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
            class="map"
          ></iframe>
        </div>
      </div>
      <div class="mb-6 row px-2 d-flex flex-column align-items-center">
        <div class="card contactCard col-md-11 mb-4">
          <img
            src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/vpElXHYZGipTOMSMJtbNsxQ2TAoBwZM1dDJldNRjZgWboGsAh9rdJtuE9ExdTs2L1Vg0bK9bKtSIIHyiOMp8Vl3izUYAozZhvbMZmbKddy4abODY5aILpqJTba9MVPVr.jpg"
            class="card-img-top"
            alt="KLÁSIKO 分店"
          />
          <div class="card-body">
            <h3 class="card-title font-weight-bold text-main">台中廣三 SOGO 分店</h3>
          </div>
          <div class="card-footer bg-transparent">
            <p class="fz-20 d-flex align-items-center justify-content-lg-center justify-content-sm-between">
              <span class="material-icons mr-lg-2 mr-sm-1">call</span>
              電話：(04)2234-5678
            </p>
            <p class="fz-20 d-flex align-items-center justify-content-lg-center justify-content-sm-between">
              <span class="material-icons mr-lg-2 mr-sm-1">schedule</span>
              營業時間：10:00-21:00
            </p>
            <p class="fz-20 d-flex align-items-center justify-content-lg-center justify-content-sm-between">
              <span class="material-icons mr-lg-2 mr-sm-1">mail_outline</span>
              Email：klasiko@service.com
            </p>
          </div>
        </div>
        <div class="map col-md-11">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21195.99530920897!2d120.67218275209481!3d24.161581020599552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d9cc02858c3%3A0x317a8c5860c7e433!2z5buj5LiJU09HT-eZvuiyqA!5e0!3m2!1szh-TW!2stw!4v1598885656282!5m2!1szh-TW!2stw"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
            class="map"
          ></iframe>
        </div>
      </div>
      <div class="mb-6 row px-2 d-flex flex-column align-items-center">
        <div class="card contactCard col-md-11 mb-4">
          <img
            src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/XTUCr6fEApmGmfoBQ1LpEu4lyTFnY22ZpwuIrFUXVoqhrGtl1wxaz3aZZX1pLb8ChRj0TUutsZWOoTMKXpVuGNoNnyZdYNlK7KmhpTX7zRwWclpEyjp0rMVOTiuI8Ew7.jpg"
            class="card-img-top"
            alt="KLÁSIKO 分店"
          />
          <div class="card-body">
            <h3 class="card-title font-weight-bold text-main">高雄左營新光三越分店</h3>
          </div>
          <div class="card-footer bg-transparent">
            <p class="fz-20 d-flex align-items-center justify-content-lg-center justify-content-sm-between">
              <span class="material-icons mr-lg-2 mr-sm-1">call</span>
              電話：(07)2234-5678
            </p>
            <p class="fz-20 d-flex align-items-center justify-content-lg-center justify-content-sm-between">
              <span class="material-icons mr-lg-2 mr-sm-1">schedule</span>
              營業時間：10:00-21:00
            </p>
            <p class="fz-20 d-flex align-items-center justify-content-lg-center justify-content-sm-between">
              <span class="material-icons mr-lg-2 mr-sm-1">mail_outline</span>
              Email：klasiko@service.com
            </p>
          </div>
        </div>
        <div class="map col-md-11">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5515.457055666181!2d120.30839376555356!3d22.68635306952794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e056ff4d123ad%3A0x3a384dfb665b1a27!2z5paw5YWJ5LiJ6LaK6auY6ZuE5bem54ef5bqX!5e0!3m2!1szh-TW!2stw!4v1598885890857!5m2!1szh-TW!2stw"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
            class="map"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contact-bg {
  background-image: url('https://hexschool-api.s3.us-west-2.amazonaws.com/custom/xvDzlfE2qz92ldRY2YVMq4H5EJGbDGgWazbU9AUuZt0JR7YD75PksxtPAkWy3k8QEQHEQdtbVrSmgEJnBKJP21w0s7H3UE0FIwGkkyyIfCpYpS905T7GhNwLccrgxOty.jpg');
}
.map {
  width: 100%;
  height: 300px;
}
@media (max-width: 768px) {
  .map {
    margin-top: 20px;
  }
}
</style>
