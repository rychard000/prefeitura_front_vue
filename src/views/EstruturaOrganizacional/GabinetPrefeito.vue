<script>
import { Notification, Notivue } from 'notivue'
import Card from '@/components/cards/Card.vue'
import ModalFilterMobile from '@/components/modals/ModalFilterMobile.vue'
import Navigation from '@/components/form/Navigation.vue'
import FilterMobile from '@/components/filter/FilterMobile.vue'
import Filter from '@/components/filter/Filter.vue'
import API from '@/components/APIS/API.js'
import EstruturaOrganizacional from '@/services/EstruturaOrganizacional.js'

export default {
  name: 'EstruturaOrganizacionalShow' ,
  components: {
    Filter,
    Notification,
    FilterMobile,
    Navigation,
    ModalFilterMobile,
    Card,
    Notivue
  },
  data(){
    return{
      estrutura : null,
      competencias : null,
      pessoa_juridica : null
    }
  },
  beforeMount() {
    EstruturaOrganizacional
      .getGabinetePrefeito()
      .then((response) => {
        this.pessoa_juridica = response
        this.competencias = response.competencias
      })
  }
}
</script>

<template>
  <section id="sec" class=" m-5  d-flex align-items-center justify-content-center">
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
    <section class="d-flex gap-5">
      <article id="competencias" class="card p-4">
        <h2>Competências</h2>
        <div id="competencias_text">
          <p class="font-weight-bold"><strong>Lei Orgânica;</strong></p>
        <small v-html="this?.competencias"></small>
        </div>
      </article>
      <article :style="{
        color:this.$store.state.colors.light,
        backgroundColor:this.$store.state.colors.primary
      }" id="pessoa_juridica" class="card p-3">
        <small>{{this.pessoa_juridica?.cargo.nome}}</small>
        <h4>{{this.pessoa_juridica?.nome}}</h4>
        <div class="card mt-3">
          <div class="px-3 py-2 d-flex align-items-center justify-content-start gap-3  ">
            <font-awesome-icon :style="{
              fontSize:20,
              color:this.$store.state.colors.primary,
            }" icon="fas fa-phone"/>
            <p :style="{
              padding:0,
              margin:0,
              fontSize:'18px',
              fontWeight:'bold',
              color:this.$store.state.colors.primary,
            }">(71) 9 9739-6256</p>
          </div>
          <div class="px-3 py-2 d-flex align-items-center justify-content-start gap-3  ">
            <font-awesome-icon :style="{
              fontSize:20,
              color:this.$store.state.colors.primary,
            }" icon="fas fa-envelope"/>
            <p :style="{
              padding:0,
              margin:0,
              fontSize:'18px',
              fontWeight:'bold',
              color:this.$store.state.colors.primary,
            }" v-html="this?.pessoa_juridica.email"></p>
          </div>
          <div class="px-3 py-2 d-flex align-items-center justify-content-center gap-3  ">
            <font-awesome-icon :style="{
              fontSize:20,
              color:this.$store.state.colors.primary,
            }" icon="fas fa-clock"/>
            <p :style="{
              padding:0,
              margin:0,
              fontSize:'18px',
              fontWeight:'bold',
              color:this.$store.state.colors.primary,
            }" v-html="this?.pessoa_juridica.horario"></p>
          </div>
          <div class="px-3 py-2 pb-0 d-flex align-items-center justify-content-start gap-3  ">
            <font-awesome-icon :style="{
              fontSize:20,
              color:this.$store.state.colors.primary,
            }" icon="fas fa-map"/>
            <small :style="{
              padding:'0px',
              margin:'0px',
              fontSize:'18px',
              fontWeight:'bold',
              color:this.$store.state.colors.primary,
            }" v-html="this?.pessoa_juridica.endereco"></small>
          </div>
        </div>
      </article>
    </section>
  </section>
</template>

<style scoped>
  #competencias{
    width: 800px;
  }
  #competencias_text{
    height: 300px;
    overflow-y: auto;
  }

  #pessoa_juridica{
    height: 100%;
    width: 300px;
  }
</style>
