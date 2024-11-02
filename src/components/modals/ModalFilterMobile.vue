<script>
import Input from '@/components/inputs/Input.vue'

export default {
  name: 'ModalFilterMobile' ,
  components: { Input },
  data() {
    return {
      colors: this.$store.state.colors,
    }
  },
  methods:{
    close(){
      this.$emit('close',true);
    }
  }
}
</script>

<template>
  <div id="modal" class="px-4">
    <div style="width: 90%;" class="card">
      <div :style="{
            backgroundColor:colors.lightPrimary,
            color:'white'
          }" class="card-header d-flex justify-content-between align-items-center py-4 pb-3">
        <h2 class="m-0 p-0">Filtro</h2>
        <font-awesome-icon @click="close" :style="{fontSize:'25px'}" icon="fas fa-times" />
      </div>
      <section class="px-4" style="height: 400px;max-height:400px;overflow-x: auto">
        <div class=" d-flex gap-2">
          <label class=" my-1 p-2 d-flex justify-content-between align-items-center w-100">
            PREFEITURA
            <input type="radio" name="filter"></input>
          </label>
        </div>
        <div class=" d-flex gap-2">
          <label class=" my-1 p-2 d-flex justify-content-between align-items-center w-100">
            PREFEITURA
            <input type="radio" name="filter"></input>
          </label>
        </div>
        <div class=" d-flex gap-2">
          <label class=" my-1 p-2 d-flex justify-content-between align-items-center w-100">
            PREFEITURA
            <input type="radio" name="filter"></input>
          </label>
        </div>
        <div class=" d-flex gap-2">
          <label class=" my-1 p-2 d-flex justify-content-between align-items-center w-100">
            PREFEITURA
            <input type="radio" name="filter"></input>
          </label>
        </div>
        <div class=" d-flex gap-2">
          <label class=" my-1 p-2 d-flex justify-content-between align-items-center w-100">
            PREFEITURA
            <input type="radio" name="filter"></input>
          </label>
        </div><div class=" d-flex gap-2">
        <label class=" my-1 p-2 d-flex justify-content-between align-items-center w-100">
          PREFEITURA
          <input type="radio" name="filter"></input>
        </label>
      </div>
        <div class=" d-flex gap-2">
          <label class=" my-1 p-2 d-flex justify-content-between align-items-center w-100">
            PREFEITURA
            <input type="radio" name="filter"></input>
          </label>
        </div>
        <div class=" d-flex gap-2">
          <label class=" my-1 p-2 d-flex justify-content-between align-items-center w-100">
            PREFEITURA
            <input type="radio" name="filter"></input>
          </label>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
#modal{
  position: absolute;
  background-color: rgba(0, 0, 0, 0.59);
  width: 100vw;
  height: 100dvh;
  left: 0;
  top: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
