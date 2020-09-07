<template>
  <div class="subscribe d-flex justify-content-around mb-6" id="subscribe">
    <div class="subInput d-flex flex-column justify-content-center">
      <label for="subscribe" class="font-weight-bold text-main fz-36 mb-5">訂閱我們，獲得更多優惠通知～</label>
      <input id="subscribe" type="text" placeholder="輸入 email 訂閱" class="mb-5" />
      <button type="button" class="btn btn-danger px-3 py-1">訂閱</button>
    </div>
    <img src="https://i.imgur.com/3JB2dlF.jpg" alt />
  </div>
</template>

<style lang="scss">
.subscribe {
  background: #fafafa;
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
</style>
