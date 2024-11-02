<script>
import EstruturaOrganizacional from '@/services/EstruturaOrganizacional.js'
import { TypeNavigation } from '../../../src/components/APIS/TypeNavigation.js'
import TransparenciaService from '@/services/TransparenciaService.js'
import PortalServicos from '@/services/PortalServicos.js'

export default {
  name: 'Navigation',
  props: ['structs', 'type'],
  methods: {
    goInitialPage() {
      switch (this.type) {
        case TypeNavigation.EstruturaOrganizacionalType :
          EstruturaOrganizacional
            .getAll()
            .then((response) => {
              this.$emit('goInitialPage', response)
            })
          break
        case TypeNavigation.TransparenciaType :
          TransparenciaService
            .getAll()
            .then((response) => {
              this.$emit('goInitialPage', response)
            })
          break
        case TypeNavigation.PortalServicos :
          PortalServicos
            .getAll()
            .then((response) => {
              this.$emit('goInitialPage', response)
            })
        default:
          break
      }
    },
    pageNavigation(page) {
      switch (this.type) {
        case TypeNavigation.EstruturaOrganizacionalType :
          EstruturaOrganizacional
            .getWithPage(page)
            .then((response) => {
              this.$emit('pageNavigation', response)
            })
          break
        case TypeNavigation.TransparenciaType :
          TransparenciaService
            .getWithPage(page)
            .then((response) => {
              this.$emit('pageNavigation', response)
            })
          break
        case TypeNavigation.PortalServicos :
          PortalServicos
            .getWithPage(page)
            .then((response) => {
              this.$emit('pageNavigation', response)
            })
        default:
          break
      }
    }
  },
  beforeMount() {
    console.log(this.structs)
  }
}
</script>

<template>
  <footer>
    <nav v-if="this.structs != null" aria-label="...">
      <ul class="pagination">
        <li class="page-item ">
          <a class="page-link" @click="this.goInitialPage()">Inicio</a>
        </li>
        <li class="page-item" v-for="pagination in this.structs.links">
          <a
            :class="this.structs.current_page == pagination.label ? 'page-link active' : 'page-link' "
            v-if="pagination.label.startsWith('Next') ==  false && pagination.label.startsWith('&') ==  false "
            @click="this.pageNavigation(pagination.label)">{{ pagination.label }}
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" @click="() => pageNavigation(this.structs.last_page)">Next</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<style scoped>

</style>
