<!-- <script>
import Filter from '@/components/filter/FilterPortalServicos.vue';
import NoticiasService from '@/services/NoticiasService';
import ModalEventsDOM from '@/components/DOM/ModalDOM/ModalEventsDOM.js'
import { Notification, Notivue, push } from 'notivue'

export default {

    name: 'Noticias',

    components: {
        Filter,
        Notivue,
    },

    data() {
        return {
            filterTextSearch: null,
            colors: this.$store.state.colors,
            showModal: false,
            structs: [],
            filterObject: []
        }
    },

    watch: {
    filterTextSearch(newValue, oldValue) {
      NoticiasService
        .getWithFilter(newValue)
        .then((response) => {
          this.success('Carregando Componentes...')
          this.structs = response
        })
    },

    methods: {
        openModal() {
            if (!this.showModal) {
                ModalEventsDOM.overflowHiddebInAllPage()
                this.showModal = true
            } else {
                ModalEventsDOM.overflowAutoInAllPage()
                this.showModal = false
            }
        },

        success(message = '') {
            push.success(message)
        },

        error(message = '') {
            push.error(message)
        },

        warning(message = '') {
            push.warning(message)
        }
    },

  },
    
  created() {
    NoticiasService
      .getAll()
      .then((response) => {
        this.structs = response
        console.log(response)
      })

    NoticiasService
      .getFilters()
      .then((response) => {
        this.success('Carregando Componentes...')
        this.filterObject = response.map(item => item.nome)
      })
  }

};

</script>

<template>
    <div>
        <Filter
        id="filters"
        title="Perfil"
        v-model="filterTextSearch"
        :options="this.filterObject"
      />
    </div>
</template> -->

<script>
import Filter from '@/components/filter/FilterPortalServicos.vue';
import NoticiasService from '@/services/NoticiasService';
import ModalEventsDOM from '@/components/DOM/ModalDOM/ModalEventsDOM.js';
import { Notification, Notivue, push } from 'notivue';

export default {
    name: 'Noticias',
    components: {
        Filter,
        Notivue,
    },
    data() {
        return {
            filterTextSearch: null,
            colors: this.$store.state.colors,
            showModal: false,
            structs: [],
            filterObject: []
        };
    },
    watch: {
        filterTextSearch(newValue, oldValue) {
            NoticiasService
                .getWithFilter(newValue)
                .then((response) => {
                    this.success('Carregando Componentes...');
                    this.structs = response;
                })
                .catch((error) => {
                    this.error('Erro ao carregar componentes');
                    console.error(error);
                });
        }
    },
    methods: {
        openModal() {
            if (!this.showModal) {
                ModalEventsDOM.overflowHiddebInAllPage();
                this.showModal = true;
            } else {
                ModalEventsDOM.overflowAutoInAllPage();
                this.showModal = false;
            }
        },
        success(message = '') {
            push.success(message);
        },
        error(message = '') {
            push.error(message);
        },
        warning(message = '') {
            push.warning(message);
        }
    },
    created() {
        NoticiasService
            .getAll()
            .then((response) => {
                this.structs = response;
                console.log(response);
            })
            .catch((error) => {
                this.error('Erro ao carregar dados iniciais');
                console.error(error);
            });

        NoticiasService
            .getFilters()
            .then((response) => {
                this.success('Carregando Componentes...');
                this.filterObject = response.map(item => item.nome);
            })
            .catch((error) => {
                this.error('Erro ao carregar filtros');
                console.error(error);
            });
    }
};
</script>

<template>
    <div>
        <Filter
            id="filters"
            title="Perfil"
            v-model="filterTextSearch"
            :options="this.filterObject"
        />
    </div>
</template>

<!-- v-model= aonde vou pesquisar -->
<!-- options= eh as noticias, que por padrao eh um array vazio que sera preenchido -->

<style scoped>
    
#filters{
    width: 300px;
}

</style>
