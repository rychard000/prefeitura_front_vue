<script>
export default {
  name: 'MenuLateral',
  computed: {
    colors() {
      return this.$store.state.colors
    },
    route() {
      return this.$route.path
    }
  },
  data() {
    return {
      divWidth: 60,
      rotate: 0,
      openCloseMenu: false,
      menuLateral: {
        'INICIO': {
          'icon': 'fa-house',
          'href': '/',
          'submenu': null
        },
        'INSTITUCIONAL': {
          'icon': 'fa-hammer',
          'href': null,
          'submenu': {
            'Estrutura Organizacional': 'http://google.com',
            'Gabinete do Prefeito': 'http://google.com',
            'Gabinete do Vice-Prefeito': 'http://google.com'
          }
        },
        'CIDADE': {
          'icon': 'fa-city',
          'href': null,
          'submenu': {
            'História': 'http://google.com',
            'Símbolo Municipais': 'http://google.com',
            'Galeria de Imagens': 'http://google.com',
            'Galeria de Vídeos': 'http://google.com'
          }
        },
        'TRANSPARÊNCIA': {
          'icon': 'fa-eye',
          'href': '/about',
          'submenu': null
        },
        'PLANO DIRETOR': {
          'icon': 'fa-briefcase',
          'href': 'http://google.com',
          'submenu': null
        },
        'PORTAL DE SERVIÇOS': {
          'icon': 'fa-user',
          'href': 'http://google.com',
          'submenu': null
        },
        'NOTÍCIAS': {
          'icon': 'fa-newspaper',
          'href': 'http://google.com',
          'submenu': null
        },
        'FALE CONOSCO': {
          'icon': 'fa-headset',
          'href': 'http://google.com',
          'submenu': null
        }
      }
    }
  },
  methods: {
    abrirMenu(main_app) {
      main_app.style.overflow = 'hidden'
      this.divWidth = 300
      this.rotate = 180
      this.openCloseMenu = true
    },
    fecharMenu(main_app) {
      this.rotate = 0
      this.divWidth = 60
      this.openCloseMenu = false
      main_app.style.overflow = ''
    },
    aumentarTamanho() {
      const main_app = document.getElementById('main-app')
      if (this.divWidth == 300) {
        this.fecharMenu(main_app)
      } else {
        this.abrirMenu(main_app)
      }
    }
  }
}
</script>

<template>
  <div>
    <div class="menu-lateral" :style="{ width: divWidth + 'px', height: '100%',backgroundColor:colors.secondary}">
      <div :id="this.openCloseMenu ? 'card-header-open' :  'card-header-close'" class="text-white w-100 ">
        <h5 v-if="this.openCloseMenu">Menu</h5>
        <font-awesome-icon
          :style="{transform:`rotate(${rotate}deg)`,transition:'all .5s'}"
          @click="aumentarTamanho" :icon="['fas', 'circle-chevron-right']"
        />
      </div>
      <ul class="list-unstyled  w-100 d-flex flex-column ">
        <li class="menu-item-list" v-for="(items, sectionName) in menuLateral" :key="sectionName">
          <div id="menu-icon-title"
               :class="items.href === route ? 'd-flex align-items-center item-selected' : 'd-flex align-items-center item'">

            <font-awesome-icon
              :style="{marginTop:this.openCloseMenu ? '0px' : '14px',marginBottom:this.openCloseMenu ? '0px' : '14px',transition:'all .3s'}"
              @click="aumentarTamanho" :icon="['fas', items.icon]"
            />
            <a :to="items.href" v-if="items.submenu != null && this.openCloseMenu" style="transition: all .5s"
               class="menu-item p-0 m-0 ms-2 ">{{ sectionName }}</a>

            <RouterLink :to="items.href" v-if="items.submenu == null && this.openCloseMenu" style="transition: all .5s"
                        class="menu-item p-0 m-0 ms-2 ">{{ sectionName }}
            </RouterLink>
          </div>
          <ul v-if="items.submenu != null && this.openCloseMenu"
              class=" ms-4 d-flex flex-column gap-2 ps-3 pt-3 mb-3 gap-3">
            <RouterLink :to="item" class="submenu" v-if="items.href == null"
                        v-for="(item,subsMenuName) in items.submenu" :key="subsMenuName">
              {{ subsMenuName }}
            </RouterLink>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.item {
  padding-top: 4px;
  padding-left: 20px;
  transition: all .5s;
  display: flex;
  color: white;
}

.item:hover {
  background-color: #f6f6f8;
  color: #000000;

  .menu-item {
    color: #000000;
  }
}

.item-selected {
  padding-top: 4px;
  padding-left: 20px;
  transition: all .5s;
  display: flex;
  background-color: #f6f6f8;

  .menu-item {
    color: #000000;
  }
}


.submenu {
  color: white
}

.menu-item {
  font-size: 18px;
  padding: 5px;
  font-weight: bold;
}

#card-header-open {
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  transition: all 1s;
}

#card-header-close {
  font-size: 30px;
  display: flex;
  padding: 5px;
  padding-top: 15px;
  padding-bottom: 26px;
  justify-content: center;
  align-items: center;
  transition: all 1s;
}

.menu-lateral {
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
  transition: width 0.3s, height 0.3s;
}

</style>
