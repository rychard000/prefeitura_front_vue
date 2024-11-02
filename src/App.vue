<script>
import { RouterLink, RouterView } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressBook } from '@fortawesome/free-regular-svg-icons'
import Header from '@/components/Header.vue'
import MenuLateral from '@/components/MenuLateral.vue'

export default {
  components: { MenuLateral, Header },

  methods: {
    faAddressBook() {
      return faAddressBook
    },
    faSearch() {
      return faSearch
    }
  },
  computed: {
    colors() {
      return this.$store.state.colors
    }
  },
  mounted() {
    console.log(this.colors)
  }
}

</script>

<template >
  <main  id="main-app" class="d-flex" >
    <div id="scrollview" style="min-height: 100vh;width: 100%;max-width: 100vw" >
      <Header/>
      <RouterView />
    </div>
  </main>

</template>

<style scoped>
#img-logo {
  max-width: 475px;
  max-height: 180px;
  width: 100%;
}

#box-search{
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px
}

#icon-input-search{
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: #706c6c;

  border-radius:0px 10px 10px 0px
}
#main-app{
  background-color: #f5f3f3;
}

#input-search {
  border: none;
  border-radius: 5px;
  height: 48px;
  width: 100%;
  max-width: 500px;
  border-radius:10px 0px 0px 10px;
  padding-left: 20px;
}

</style>
