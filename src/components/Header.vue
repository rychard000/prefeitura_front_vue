<script>
import { RouterLink, RouterView } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressBook } from '@fortawesome/free-regular-svg-icons'
import MenuLateral from '@/components/MenuLateral.vue'
import API, { CLIENT_ID, CLIENT_SECRET } from '@/components/APIS/API.js'
import { postprocess } from 'eslint-plugin-vue/lib/processor.js'

export default {
  components: { MenuLateral },
  methods: { API },
  computed: {
    colors() {
      return this.$store.state.colors
    }
  },
  mounted() {
    console.log(this.colors)
  },
  created() {
    API.post('/oauth/token', {
      'grant_type': 'client_credentials',
      'client_id': CLIENT_ID,
      'client_secret': CLIENT_SECRET,
      'scope': ''
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(response => {
      localStorage.setItem('access_token', response.access_token)
    }).catch(error => {
      console.error('Error:', error)
    })
  }
}

</script>

<template>
  <div id="header" :style="{color:colors.light}" class="d-flex">
    <header
      :style="{backgroundColor:colors.primary}"
      class="py-4 w-100  d-flex flex-column align-items-center justify-content-center"
    >
      <nav style="font-size:16px">
        <div class="d-flex flex-wrap align-items-center justify-content-center gap-3 ">
          <img
            id="img-logo"
            src="../assets/cropped-logo-pref-site-1.png"
          />
          <div id="container-box-search" class="  col-6 px-3 d-flex flex-column justify-content-center">
            <div id="box-search">
              <input
                id="input-search"
                placeholder="Buscar no site"
              />
              <span id="icon-input-search">
            <font-awesome-icon icon="fa-solid fa-search" />
          </span>
            </div>
            <ul
              id="list-icons"
              style="font-size: 17px"
              class="list-unstyled align-self-end d-flex gap-3 pt-2 ">
              <li><i class="fa-brands fa-facebook"></i></li>
              <li><i class="fa-brands fa-instagram"></i></li>
            </ul>
          </div>

        </div>
        <ul id="options-menu" class=" gap-3 list-unstyled m-0">
          <li class="">
            <RouterLink :style="{color:colors.light}" to="/"> INICIO</RouterLink>
          </li>
          <li class="dropdown">
            <a :style="{color:colors.light}" class=" dropdown-toggle" type="button" id="dropdownMenuButton"
               data-bs-toggle="dropdown"
               aria-expanded="true">
              INSTITUCIONAL
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <RouterLink to="/estrutura-organizacional" class="dropdown-item">Estrutura Organizacional</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/gabinete-prefeito">Gabinete do Prefeito</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/gabinete-vice-prefeito">Gabinete do Vice-Prefeito</RouterLink>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <a :style="{color:colors.light}" class=" dropdown-toggle" type="button" id="cidadeDropDownButton"
               data-bs-toggle="dropdown"
               aria-expanded="true">
              CIDADE
            </a>
            <ul class="dropdown-menu" aria-labelledby="cidadeDropDownButton">
              <li>
                <RouterLink class="dropdown-item" to="#">História</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="#">Símbolos Municipais</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="#">Galeria de Imagens</RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="#">Galeria de Vídeos</RouterLink>
              </li>
            </ul>
          </li>
          <li class="">
            <RouterLink :style="{color:colors.light}" to="/transparencia">TRANSPARÊNCIA</RouterLink>
          </li>
          <li class="">
            <RouterLink :style="{color:colors.light}" to="/contact">PLANO DIRETOR</RouterLink>
          </li>
          <li class="">
            <RouterLink :style="{color:colors.light}" to="/portal-servicos">PORTAL DE SERVIÇOS</RouterLink>
          </li>
          <li class="">
            <RouterLink :style="{color:colors.light}" to="/noticias">NOTÍCIAS</RouterLink>
          </li>
          <li class="">
            <RouterLink :style="{color:colors.light}" to="/contact">FALE CONOSCO</RouterLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>

</template>

<style scoped>

#img-logo {
  max-width: 475px;
  max-height: 180px;
  width: 100%;
}

#container-box-search {
  max-width: 483px;
}

#options-menu {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

#box-search {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px
}

#icon-input-search {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: #706c6c;

  border-radius: 0px 10px 10px 0px
}

#input-search {
  border: none;
  border-radius: 5px;
  height: 48px;
  width: 100%;
  max-width: 500px;
  border-radius: 10px 0px 0px 10px;
  padding-left: 20px;
}


@media (max-width: 1139px) {
  #options-menu {
    margin-right: 20px;
  }
}

@media (max-width: 1055px) {
  #options-menu {
    display: none;
  }
}

@media (max-width: 970px) {
  #container-box-search {
    width: 100%;

  }
}

</style>
