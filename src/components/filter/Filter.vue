<script>
import Input from '@/components/inputs/Input.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import List from '@/components/list/List.vue'

export default {
  name: 'Filter',
  components: { List, FontAwesomeIcon, Input },
  emits: ['update:modelValue'],
  props: {
    title:{
      type: String,
      default: 'Title is Null'
    },
    options:{
      type: Array,
      default: []
    }
  },
  data() {
    return {
      colors: this.$store.state.colors,
      arrow: false,
      optionSelectKey : null
    }
  },
  methods: {
    deactiveIcon() {
      this.arrow = false
    },
    activeIcon() {
      this.arrow = true
    },
    handleEmitAndSelectOptionOne(option,index){
      this.optionSelectKey = index;
      this.$emit('update:modelValue', option)
    }
  }


}


</script>

<template>
  <div id="filter-container">
    <header :style="{
         backgroundColor: colors.lightPrimary,
         padding:'20px',
         borderRadius: '10px 10px 0px 0px',
      }">
      <h3 class="text-white">Buscar</h3>
      <Input
        :background-color="colors.lightPrimary"
        :color="colors.light"
        @on-search="(value) => $emit('onSearch', value)"
      />
    </header>
    <h5 class="ps-3 pt-4 m-0">
      {{title}}
    </h5>
    <section  class="d-flex flex-column justify-content-between w-100 pt-3 ">
      <ul class="list-unstyled list-filter">
        <List
        v-for="(option,index) in options"
        :key="index"
        :selected-key="optionSelectKey"
        :index="index"
        v-on:click="() => handleEmitAndSelectOptionOne(option,index)"
        :title="option"/>
      </ul>
      <a href="#header" @click="() => $router.go(0)" class="btn btn-light">
        <font-awesome-icon icon="fas fa-arrow-up"/>
        <br>
        Limpar definições
      </a>
    </section>
  </div>

</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
}

#filter-container{
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px 10px 0px 0px;
  cursor: pointer;
  box-shadow: 0px 7px 10px  lightgray;
}

@media (max-width:700px){

}


</style>
