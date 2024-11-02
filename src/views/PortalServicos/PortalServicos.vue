<script>
import Filter from '@/components/filter/Filter.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CardPortalServicos from '@/components/cards/CardPortalServicos.vue'
import API from '@/components/APIS/API.js'
import Input from '@/components/inputs/Input.vue'
import ModalEventsDOM from '@/components/DOM/ModalDOM/ModalEventsDOM.js'
import ModalFilterMobile from '@/components/modals/ModalFilterMobile.vue'
import FilterMobile from '@/components/filter/FilterMobile.vue'
import EstruturaOrganizacional from '@/services/EstruturaOrganizacional.js'
import { Notivue, Notification, push } from 'notivue'
import Navigation from '@/components/form/Navigation.vue'
import { TypeNavigation } from '../../components/APIS/TypeNavigation.js'
import FilterPortalServicos from '@/components/filter/FilterPortalServicos.vue'
import PortalServicos from '@/services/PortalServicos.js'

export default {
  name: 'PortalServicos',
  components: {
    FilterPortalServicos,
    Navigation,
    FilterMobile,
    ModalFilterMobile,
    Input,
    CardPortalServicos,
    FontAwesomeIcon,
    Filter,
    ModalEventsDOM,
    Notivue,
    Notification
  },
  computed: {
    TypeNavigations() {
      return TypeNavigation
    }
  },
  data() {
    return {
      colors: this.$store.state.colors,
      showModal: false,
      structs: [],
      filterObjectOne: [],
      filterObjectTwo: [],
      filterTextSearch: null,
      queryFilterOne : null,
      queryFilterTwo : null,
    }
  },
  watch: {
    queryFilterOne(perfil, oldValue) {
      PortalServicos
        .getWithFilter(perfil,this.queryFilterTwo)
        .then((response) => {
          this.success('Carregando Componentes...')
          this.structs = response
        })
    },
    queryFilterTwo(categoria, oldValue) {
      PortalServicos
        .getWithFilter(this.queryFilterOne,categoria)
        .then((response) => {
          this.success('Carregando Componentes...')
          this.structs = response
        })
    }
  },
  methods: {
    openModal() {
      if (!this.showModal) {
        ModalEventsDOM.overflowHiddebInAllPage()
        this.showModal = true
      } else {
        this.showModal = false
        ModalEventsDOM.overflowAutoInAllPage()
      }
    },
    success(message = '') {
      push.success(message)
    },
    error(message = '') {
      push.error(message)
    },
    warning(message = '') {
      push.warning(message)
    }

  },
  beforeMount() {
    PortalServicos
      .getAll()
      .then((response) => {
        console.log(response)
        this.success('Carregando Componentes...')
        this.structs = response
      })
  },
  mounted() {
    PortalServicos
      .getFilterPerfilCategoria()
      .then((response) => {
        this.success('Carregando Componentes...')
        this.filterObjectOne = response.perfil.map(item => item.nome)
        this.filterObjectTwo = response.categoria.map(item => item.nome)
      })

  }

}
</script>

<template>
  <section id="sec" class="m-5 d-flex align-items-center justify-content-center">
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
    <article id="container">
      <FilterPortalServicos
        id="filters"
        title="Perfil"
        second_title="Categoria"
        @on-search="(value) => console.log(value)"
        @option-one="(value) => this.queryFilterOne = value"
        @option-two="(value) => this.queryFilterTwo = value"
        :options-one="this.filterObjectOne"
        :options-two="this.filterObjectTwo"
      />
      <FilterMobile @open="openModal" />
      <ModalFilterMobile
        v-if="showModal"
        @close="openModal"
      />
      <section id="cards-container">
        <CardPortalServicos
          v-for="struct in structs.data"
          :perfil="struct.servicos_categoria_perfil.nome"
          :categoria="struct.servicos_categoria_tipo.nome"
          :titulo="struct.titulo"
          :description="struct.descricao"
          :redirect_uri="struct.redirect_uri"
        />
        <Navigation
          :type="TypeNavigations.PortalServicos"
          :structs="this.structs"
          @goInitialPage="(value) => this.structs = value"
          @pageNavigation="(value) => this.structs = value"
        />
      </section>
    </article>
  </section>
</template>

<style scoped>
#cards-container {
  flex-wrap: wrap;
  width: 100%;
  max-width: 700px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


#container {
  gap: 50px;
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  align-items: flex-start;
}


@media (max-width: 1771px) {
  #container {
    gap: 50px;
    display: flex;
    width: 80%;
    flex-wrap: wrap;
  }
}


@media (max-width: 1561px) {

  #container {
    gap: 50px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
}

@media (max-width: 1271px) {
  #filters {
    display: none;
  }

  #container {
    gap: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }
}


</style>
