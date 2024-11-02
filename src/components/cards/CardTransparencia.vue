<script>
export default {
  name: 'CardTransparencia',
  props: {
    icon:{
      type: String,
      default: 'shield'
    },
    tag:{
      type: String,
      default: 'Tag empty'
    },
    title:{
      type: String,
      default: 'Title empty'
    },
    href:{
      type: String,
      default: '#'
    }
  },
  data(){
    return {
      colors: this.$store.state.colors,
      iconProp: this.icon
    }
  }
}
</script>

<template>
  <a :href="this.href" target="_blank" style="width: 100%;max-width: 700px" class="card  p-4">
    <nav class="d-flex align-items-center gap-3">
      <div :style="{
              backgroundColor:colors.lightPrimary,
              color:colors.light,
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              width:'60px',
              height:'60px',
              borderRadius:'100%',
              cursor:'pointer'
            }">
        <font-awesome-icon :style="{fontSize:'30px'}" :icon='"fas "+iconProp'/>
      </div>
      <header class="d-flex flex-column gap-2">
        <h6 class="p-0 m-0">{{this.tag}}</h6>
        <h4 class="p-0 m-0">{{this.title}}</h4>
      </header>
    </nav>
  </a>
</template>

<style scoped>

</style>
