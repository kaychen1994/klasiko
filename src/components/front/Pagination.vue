<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{disabled: pages.current_page === 1}">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="updatePage(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li
        class="page-item"
        v-for="i in pages.total_pages"
        :key="i"
        :class="{active: pages.current_page === i}"
      >
        <a class="page-link" href="#" @click.prevent="updatePage(i)">{{ i }}</a>
      </li>

      <li class="page-item" :class="{disabled: pages.current_page === pages.total_pages}">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="updatePage(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    pages: {
      type: Object,
      required: true
    }
  },
  methods: {
    updatePage (num) {
      this.$emit('update', num)
    }
  }
}
</script>

<style lang="scss">
.page-item.active .page-link {
  background: #cbac67;
  color: white;
  border-color: white;
}
.page-link {
  border: 2px solid #cbac67;
  color: #495057;
  margin-left: 0px;
  &:hover {
    color: #495057;
  }
}
</style>
