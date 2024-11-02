<script>
export default {
  name: 'CardPortalServicos',
  props: {
    perfil: {
      type: String,
      default: 'perfil is null',
      required: true
    },
    categoria: {
      type: String,
      default: 'categoria is null',
      required: true
    },
    titulo: {
      type: String,
      default: 'titulo is null',
      required: true
    },
    redirect_uri: {
      type: String,
      default: 'redirect_uri is null',
      required: true
    },
    description: {
      type: String,
      default: 'description is null',
      required: true
    }
  },
  data() {
    return {
      colors: this.$store.state.colors,
      hoverAcess: false,
      hoverLearningMore: false,

    }
  }
}
</script>

<template>
  <div id="card-container" class="card p-4">
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
        <font-awesome-icon icon="fas fa-house" />
      </div>
      <header>
        <h6>{{ this.perfil }} - {{ this.categoria }} </h6>
        <h4>{{ this.titulo }}</h4>
      </header>
    </nav>
    <small class="my-3" v-html="description"></small>
    <footer class="d-flex flex-row gap-3">
      <a
        :href="this.redirect_uri"
        class="btn btn-light"
        @mouseover="hoverAcess = true"
        @mouseleave="hoverAcess = false"
        :style="hoverAcess
        ? {
          color:colors.lightPrimary,
          transform:'scale(1.05,1.05)'
        } :
        {
          color:colors.primary,
          transform:'scale(1.05,1.05)'
        } "
      >Acessar Serviço</a>
<!--      <a-->
<!--        @mouseover="hoverLearningMore = true"-->
<!--        @mouseleave="hoverLearningMore = false"-->
<!--        :style="hoverLearningMore ? {color:colors.lightPrimary,transform:'scale(1.05,1.05)'} :{} "-->
<!--      >Saiba mais</a>-->
    </footer>
  </div>
</template>

<style scoped>
#card-container {
  width: 100%;
  max-width: 900px;
}
</style>
