<template>
  <div class="subscribe d-flex justify-content-around" id="subscribe">
    <div class="subInput d-flex flex-column justify-content-center">
      <label for="subscribe" class="font-weight-bold text-main mb-5"
        >訂閱我們，獲得更多優惠通知～</label
      >
      <input
        id="subscribe"
        type="text"
        placeholder="輸入 email 訂閱"
        class="mb-5"
      />
      <button type="button" class="btn btn-danger px-3 py-1">訂閱</button>
    </div>
    <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nyCu5Fnq7meoHSmKKmQqonYB9jr9OZ9nspBtToQ6fIX8BayH05BmuOcQXufHHoCK0SSckIvRJrfzmxh16Top748ofC5obXiq43ifL3vq8uEYKgdQYyHdQZNXD3YVUUXk.jpg" alt="subscribe" />
  </div>
</template>

<style lang="scss">
.subscribe {
  background: #fafafa;
  margin-bottom: 0 !important;
  label {
    font-size: 36px;
  }
  img {
    height: 384px;
  }
  input[placeholder] {
    padding: 8px 16px;
    border: 2px solid #374e60;
    color: gray;
  }
  button {
    width: 200px;
    align-self: center;
    &:hover {
      border-top-left-radius: 50px;
      border-bottom-right-radius: 50px;
      transition: all 2s;
    }
  }
}
@media (max-width: 768px) {
  .subscribe {
    padding-top: 30px;
    padding-bottom: 30px;
    img {
      display: none;
    }
  }
}
@media (max-width: 375px) {
  .subInput {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
