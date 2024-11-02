<script>
export default {
  name: 'CardNoticias',
  props:['title','image','href'],
  data(){
    return {
      color_titulo_noticia:"black",
    }
  },
  computed: {
    colors() {
      return this.$store.state.colors
    }
  },
  methods:{
    handleCardNoticiasLeave(){
      this.color_titulo_noticia = "black"
    },
    handleCardNoticiasOver(){
      this.color_titulo_noticia = this.colors.lightPrimary
    }
  },
}
</script>

<template>
  <a
    @mouseleave="handleCardNoticiasLeave"
    @mouseover="handleCardNoticiasOver"
    class="card-noticias card"
    :href="href"
    :style="{color:color_titulo_noticia}"
  >
    <img class="img-card-noticias" :src="image">
    <h5 class="title-card-noticias">
      {{title}}
    </h5>
  </a>
</template>

<style scoped>

.card-noticias{
  width: 278px;
  height: 381px;
  border-radius:10px;
  transition: all 0.3s;
}

.img-card-noticias{
  width: 100%;
  object-fit: contain;
  border-radius:10px 10px 0px 0px;
}

.title-card-noticias{
  font-weight: 700;
  padding: 20px 30px;
}

@media (max-width:1873px) {
  .card-noticias{
    width: 300px;
    height: 381px;
  }
}
@media (max-width:1077px) {
  .card-noticias{
    width: 400px;
    height: 381px;
  }
}
@media (max-width:971px) {
  .card-noticias{
    width: 500px;
    height: 381px;
  }
}
</style>