<script>
import Filter from '@/components/filter/Filter.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Card from '@/components/cards/Card.vue'
import API from '@/components/APIS/API.js'
import Input from '@/components/inputs/Input.vue'
import ModalEventsDOM from '@/components/DOM/ModalDOM/ModalEventsDOM.js'
import ModalFilterMobile from '@/components/modals/ModalFilterMobile.vue'
import FilterMobile from '@/components/filter/FilterMobile.vue'
import EstruturaOrganizacional from '@/services/EstruturaOrganizacional.js'
import { Notivue, Notification, push } from 'notivue'
import Navigation from '@/components/form/Navigation.vue'
import { TypeNavigation } from '../../components/APIS/TypeNavigation.js'

export default {
  name: 'EstruturaOrganizacional',
  components: {
    Navigation,
    FilterMobile,
    ModalFilterMobile,
    Input,
    Card,
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
      filterObject: [],
      structs: [],
      filterTextSearch : null
    }
  },
  watch: {
    filterTextSearch(newValue,oldValue) {
      console.log(newValue)
        EstruturaOrganizacional
          .getWithFilter(newValue)
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
    },

  },

  mounted() {
    EstruturaOrganizacional
      .getFilters()
      .then((response) => {
        this.success('Carregando Componentes...')
        this.filterObject = response.map(item => item.nome)
      })

    EstruturaOrganizacional
      .getAll()
      .then((response) => {
        this.structs = response
      })

  }

}
</script>

<template>
  <section id="sec" class=" m-5  d-flex align-items-center justify-content-center">
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
    <article id="container">
      <Filter
        @on-search="(value) => console.log(value)"
        :options="this.filterObject"
        title="Filtrar"
        id="filters"
        v-model="filterTextSearch"
      />
      <FilterMobile @open="openModal" />
      <ModalFilterMobile
        v-if="showModal"
        @close="openModal"
      />
      <section id="cards-container">
        <Card
          v-for="struct in structs.data"
          :id="struct.id"
          :title="struct.title"
          :tag="struct.categoria_estrutura_organizacional.nome"
          :cargo="struct.pessoa_juridica.cargo.nome"
          :persona="struct.pessoa_juridica.nome"
          :competencia="struct.pessoa_juridica.competencias"
        />
        <Navigation
          :type="TypeNavigations.EstruturaOrganizacionalType"
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
  justify-content: center;
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
