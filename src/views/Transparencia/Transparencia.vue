<script>
import Filter from '@/components/filter/Filter.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Card from '@/components/cards/Card.vue'
import API from '@/components/APIS/API.js'
import CardTransparencia from '@/components/cards/CardTransparencia.vue'
import FilterMobile from '@/components/filter/FilterMobile.vue'
import ModalEventsDOM from '@/components/DOM/ModalDOM/ModalEventsDOM.js'
import ModalFilterMobile from '@/components/modals/ModalFilterMobile.vue'
import TransparenciaService from '@/services/TransparenciaService.js'
import { Notification, Notivue, push } from 'notivue'
import EstruturaOrganizacional from '@/services/EstruturaOrganizacional.js'

import Navigation from '@/components/form/Navigation.vue'
import { TypeNavigation } from '@/components/APIS/TypeNavigation.js'

export default {
  name: 'Transparencia',
  components: {
    Navigation,
    Notification,
    Notivue,
    ModalFilterMobile,
    FilterMobile,
    CardTransparencia,
    Card,
    FontAwesomeIcon,
    Filter
  },
  data() {
    return {
      filterTextSearch: null,
      colors: this.$store.state.colors,
      showModal: false,
      structs: [],
      filterObject: []
    }
  },
  computed: {
    TypeNavigations() {
      return TypeNavigation
    }
  },
  watch: {
    filterTextSearch(newValue, oldValue) {
      TransparenciaService
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
        ModalEventsDOM.overflowAutoInAllPage()
        this.showModal = false
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
  created() {
    TransparenciaService
      .getAll()
      .then((response) => {
        this.structs = response
        console.log(response)
      })

    TransparenciaService
      .getFilters()
      .then((response) => {
        this.success('Carregando Componentes...')
        this.filterObject = response.map(item => item.nome)
      })

  }
}
</script>

<template>
  <Notivue v-slot="item">
    <Notification :item="item" />
  </Notivue>
  <section class=" m-5  d-flex align-items-center justify-content-center">
    <article id="container">
      <FilterMobile
        @open="openModal"
      />
      <ModalFilterMobile
        v-if="showModal"
        @close="openModal"
      />
      <Filter
        id="filters"
        title="Perfil"
        v-model="filterTextSearch"
        :options="this.filterObject"
      />
      <section id="cards-container">
        <CardTransparencia
          v-for="struct in this.structs.data "
          :icon="struct.icon"
          :title="struct.titulo"
          :tag="struct.categoria_portal_transparencium.nome"
          :href="struct.redirect_uri"
        />
        <Navigation
          :type="TypeNavigations.TransparenciaType"
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
  width: 700px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}

#container {
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 70%;
}


@media (max-width: 1589px) {
  #container {
    gap: 50px;
    display: flex;
    width: 80%;
    flex-wrap: wrap;
  }
}

@media (max-width: 1775px) {
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

@media (max-width: 850px) {
  #cards-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }
}

</style>
