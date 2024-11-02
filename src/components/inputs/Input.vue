<script>
export default {
  name: 'Input',
  data(){
    return{
      inputValue:'',
    }
  },
  props : {
    backgroundColor: {
      type: String,
      default: 'white'
    },
    color: {
      type: String,
      default: 'black'
    },
    width:{
      type: String,
      default: 'auto'
    }
  }
}
</script>

<template>
  <div id="box-input" :style="{
    width:this.width,
  }">
    <input id="input" v-model="inputValue" :style="{
      backgroundColor: backgroundColor || 'white',
      color:color
    }" type="text" placeholder="Buscar"/>
    <font-awesome-icon
      @click="$emit('onSearch',inputValue)"
      :style="{fontSize:22,color:color}"
      icon="fa-solid fa-search"
    />
  </div>
</template>

<style scoped>
#box-input {
  display: flex;
  align-items: center;
  justify-content: center;
  border:1px solid #ccc;
  border-radius:20px;
  padding:0px 20px;
}

#input {
  width: 100%;
  border-radius: 5px;
  border: 0px solid #ccc;
  justify-content: center;
  font-size: 20px;
  padding: 10px;
  outline: none;
}

#input::placeholder{
    color: #ffffff; /* Set the color of the placeholder */
}
</style>
