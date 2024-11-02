<script>
export default {
  name: 'List',
  props: ['title','selectedKey','index'],
  data() {
    return {
      colors: this.$store.state.colors,
      arrow: false
    }
  },
  methods: {
    deactiveIcon() {
      this.arrow = false
    },
    activeIcon() {
      this.arrow = true
    }
  },
  mounted() {
    if(this.selectedKey == this.index){
      this.activeIcon()
    }
  }
}
</script>

<template>
  <li :style="this.selectedKey == this.index ? {
      backgroundColor: '#e2edf1',
      color: 'deepskyblue',
      fontWeight: 'bold',
  } : {

  }" @mouseover="activeIcon" @mouseleave="deactiveIcon">
    {{ title }}
    <font-awesome-icon v-if="this.arrow" icon="fa-solid fa-arrow-right" />
  </li>
</template>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:15px;
}

li:hover {
  background-color: #e2edf1;
  color: deepskyblue;
  font-weight: bold;
}
</style>
