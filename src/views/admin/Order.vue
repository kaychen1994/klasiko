<template>
  <div>
    <loading :active.sync="isLoading">
      <template slot="default">
        <div class="loadingio-spinner-eclipse">
          <div class="loading-style">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </template>
    </loading>
    <table class="table table-hover my-6">
      <thead class="thead-dark">
        <tr>
          <th scope="col">下單時間</th>
          <th scope="col">購買款項</th>
          <th scope="col">付款方式</th>
          <th scope="col">應付金額</th>
          <th scope="col">是否付款</th>
        </tr>
      </thead>
      <tbody v-if="orders.length">
        <tr v-for="(item, key) in orders" :key="key">
          <td>{{ item.created.datetime }}</td>
          <td>
            <ul class="list-unstyled">
              <li
                v-for="(product, i) in item.products"
                :key="i"
              >{{ product.product.title }} 數量：{{ product.quantity }} 隻</li>
            </ul>
          </td>
          <td>{{ item.payment }}</td>
          <td>{{ item.amount | money }}</td>
          <td>
            <div class="custom-control custom-switch">
              <input
                :id="item.id"
                v-model="item.paid"
                type="checkbox"
                class="custom-control-input"
                @change="setOrderPaid(item)"
              />
              <label class="custom-control-label" :for="item.id">
                <strong v-if="item.paid" class="text-success">已付款</strong>
                <span v-else class="text-danger">尚未付款</span>
              </label>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pages="pagination" @update="getOrders"></pagination>
  </div>
</template>

<script>
import Pagination from '@/components/admin/Pagination.vue'
import Alert from '@/alert.js'

export default {
  name: 'Orders',
  components: {
    Pagination
  },
  data () {
    return {
      isLoading: false,
      pagination: {},
      isNew: false,
      orders: {
        user: {}
      }
    }
  },
  created () {
    this.getOrders()
  },
  methods: {
    getOrders (num = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders?page=${num}`
      this.$http
        .get(url)
        .then((res) => {
          this.orders = res.data.data
          this.pagination = res.data.meta.pagination
          this.isLoading = false
        })
        .catch(() => {
          Alert.fire({
            title: '資料取得失敗',
            icon: 'error'
          })
          this.isLoading = false
        })
    }
  },
  setOrderPaid (item) {
    let url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/paid`
    if (!item.paid) {
      url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${item.id}/unpaid`
    }
    this.$http.patch(url, item.id)
      .then(() => {
        Alert.fire({
          title: '付款狀態已修改',
          icon: 'success'
        })
      })
      .catch(() => {
        Alert.fire({
          title: '資料取得失敗',
          icon: 'error'
        })
      })
  }
}
</script>
