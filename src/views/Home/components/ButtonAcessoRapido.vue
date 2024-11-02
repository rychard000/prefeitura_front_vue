<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'ButtonAcessoRapido',
  components: { FontAwesomeIcon },
  props:['title','icon', 'href'],
  data(){
    return {
      hover:false
    }
  },
  computed:{
    colors(){
      return this.$store.state.colors
    }
  },
  methods:{
    handleMouseOver(){
      this.hover = true
    },
    handleMouseLeave(){
      this.hover = false
    }
  }

}
</script>

<template>
    <a
      :class="'option-container-openned'"
      :style="{
        backgroundColor:!this.hover ? colors.light : '#d9d9d9',
        color: 'black',
        transform: !this.hover ? '' : 'scale(.98,.98)',
        transition: 'all .6s'
       }"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      <font-awesome-icon style="font-size: 20px"  :icon="['fas', icon]"/>
      <strong  style=" font-size: 20px">{{title}}</strong>
    </a>
</template>

<style scoped>
  .option-container-closed{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .8s;
    border-radius: 50%;
    padding: 10px;
    margin: 10px;
    text-decoration: none;
    width: 60px;
    height: 60px;
  }
  .option-container-openned{
    display: flex;
    align-items: center;
    justify-content: start;
    cursor: pointer;
    transition: all .8s;
    border-radius: 50px;
    gap:15px;
    padding: 10px 0px 10px 20px;
    margin: 10px;
    text-decoration: none;
    width: 300px;
    height: 60px;
  }
  .option-container-openned:hover{
    background-color: #545353;
  }
</style>