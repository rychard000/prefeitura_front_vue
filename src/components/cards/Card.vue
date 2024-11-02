<script>
export default {
  name: 'Card',
  props:{
    tag:{
      type: String,
      default: 'Tag is null'
    },
    id:{
      type: String,
      default: null
    },
    title:{
      type: String,
      default: 'Title is null'
    },
    competencia:{
      type: String,
      default: 'Competencia is null'
    },
    cargo:{
      type: String,
      default: 'Cargo is null'
    },
    persona:{
      type: String,
      default: 'Persona is null'
    }
  },
  data(){
    return {
      colors: this.$store.state.colors
    }
  }
}
</script>

<template>
  <a :href="'/estrutura-organizacional/'+this.id" :style="{
    width:'100%',
    maxWidth:'700px'
  }" class="card p-4">
    <nav class="d-flex align-items-center gap-3">
      <div :style="{
              backgroundColor:colors.lightPrimary,
              color:colors.light,
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              width:'50px',
              height:'50px',
              borderRadius:'100%',
              cursor:'pointer'
            }">
        <font-awesome-icon icon="fas fa-house"/>
      </div>
      <header>
        <h6>{{this.tag}}</h6>
        <h4>{{this.title}}</h4>
      </header>
    </nav>
    <small v-html="this.competencia.substring(0,650)+'...'" class="my-3"></small>
    <h6>{{this.cargo}}</h6>
    <h6>{{this.persona}}</h6>
  </a>
</template>

<style scoped>

</style>
