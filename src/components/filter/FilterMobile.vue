<script>
import Input from '@/components/inputs/Input.vue'

export default {
  name: 'FilterMobile' ,
  components: { Input }
}
</script>

<template>
  <div id="filter-mobile" class="w-100 ">
    <Input width="100%"/>
    <font-awesome-icon @click="$emit('open')" :style="{fontSize:30}" icon="fas fa-sliders-h"/>
  </div>
</template>

<style scoped>
#filter-mobile{
  display: none;
  align-items: center;
  gap: 30px;
}

@media(max-width: 1271px){
  #filter-mobile{
    display: flex;
  }
}
</style>
