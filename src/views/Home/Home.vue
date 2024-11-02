<script>
import TheWelcome from '../../components/TheWelcome.vue'
import foto from '@/assets/banner-min-compressed.jpg'
import ButtonAcessoRapido from '@/views/Home/components/ButtonAcessoRapido.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CardNoticias from '@/views/Home/components/CardNoticias.vue'

export default {
  name: 'HomeView',
  components: { CardNoticias, FontAwesomeIcon, ButtonAcessoRapido },
  computed: {
    colors() {
      return this.$store.state.colors
    }
  },
  data() {
    return {
      foto,
      fast_acess: [
        {
          title: 'Receitas',
          icon: 'fa-file-invoice-dollar',
          href: '#'
        },
        {
          title: 'Despesas',
          icon: 'fa-house',
          href: '#'
        },
        {
          title: 'Licitações',
          icon: 'fa-gavel',
          href: '#'
        },
        {
          title: 'Contratos',
          icon: 'fa-file',
          href: '#'
        },
        {
          title: 'Folha de Pagamento',
          icon: 'fa-money-bill-wave-alt',
          href: '#'
        },
        {
          title: 'Diárias e Passagens',
          icon: 'fa-calendar',
          href: '#'
        },
        {
          title: 'Legislações',
          icon: 'fa-balance-scale-right',
          href: '#'
        },
        {
          title: 'Código Tributário',
          icon: 'fa-balance-scale-right',
          href: '#'
        },
        {
          title: 'Relatórios',
          icon: 'fa-receipt',
          href: '#'
        },
        {
          title: 'Concursos e Seleções',
          icon: 'fa-id-card-alt',
          href: '#'
        },
        {
          title: 'Ouvidoria',
          icon: 'fa-headset',
          href: '#'
        },
        {
          title: 'Carta de Serviço',
          icon: 'fa-envelope',
          href: '#'
        },
        {
          title: 'COVID-19',
          icon: 'fa-virus',
          href: '#'
        },
        {
          title: 'Acompanhamento de Obras',
          icon: 'fa-exclamation-triangle',
          href: '#'
        }

      ],
      last_news: [
        {
          title: 'Novo Estado de Direito Público',
          image: 'https://mariananardi.com.br/wp-content/uploads/2018/09/Gato-x-leao.jpg',
          href: '#'
        },
        {
          title: 'Novo Estado de Direito Público',
          image: 'https://mariananardi.com.br/wp-content/uploads/2018/09/Gato-x-leao.jpg',
          href: '#'
        },
        {
          title: 'Novo Estado de Direito Público',
          image: 'https://mariananardi.com.br/wp-content/uploads/2018/09/Gato-x-leao.jpg',
          href: '#'
        },
        {
          title: 'Novo Estado de Direito Público',
          image: 'https://mariananardi.com.br/wp-content/uploads/2018/09/Gato-x-leao.jpg',
          href: '#'
        },
        {
          title: 'Novo Estado de Direito Público',
          image: 'https://mariananardi.com.br/wp-content/uploads/2018/09/Gato-x-leao.jpg',
          href: '#'
        },
        {
          title: 'Novo Estado de Direito Público',
          image: 'https://mariananardi.com.br/wp-content/uploads/2018/09/Gato-x-leao.jpg',
          href: '#'
        },
        {
          title: 'Novo Estado de Direito Público',
          image: 'https://mariananardi.com.br/wp-content/uploads/2018/09/Gato-x-leao.jpg',
          href: '#'
        },
        {
          title: 'Novo Estado de Direito Público',
          image: 'https://mariananardi.com.br/wp-content/uploads/2018/09/Gato-x-leao.jpg',
          href: '#'
        }
      ]
    }
  }
}

</script>

<template>
  <main>
    <div
      id="banner-home"
      :style="{backgroundImage:`url(${foto})`}"
    />
    <section
      id="acesso-rapido"
      class=" w-100 d-flex align-items-center justify-content-center  py-5"
      :style="{backgroundColor:colors.primary}"
    >
      <div class="py-5 w-100 d-flex align-items-center justify-content-center flex-column">
        <h2 :style="{
          fontWeight:'bold',
          color:colors.light,
          paddingBottom:'25px'
        }">
          ACESSO RÁPIDO
        </h2>
        <div id="botoes-do-acesso-rapido">
          <div v-for="(item,index) in fast_acess" :key="index">
            <ButtonAcessoRapido
              :href="item.href"
              :title="item.title"
              :icon="item.icon"
            />
          </div>
        </div>

      </div>
    </section>
    <section
      id="noticias"
      :style="{backgroundColor:colors.backgroundPage}"
    >
      <article id="noticias-article" class="py-3">
        <header
          class="d-flex align-items-center flex-wrap justify-content-between mt-5 mb-4"
          :style="{color:colors.primary}"
        >
          <h2 :style="{fontWeight:'bold'}">
            ÚLTIMAS NOTÍCIAS
          </h2>
          <div style="font-size: 20px" id="ver-todas-noticias" class="d-flex align-items-center gap-2">
            <font-awesome-icon :icon="['fas','th']" />
            <p class="text-dark m-0 p-0 fw-semibold">Ver todas</p>
          </div>
        </header>
        <section id="container-noticias">
          <CardNoticias
            v-for="(item,index) in last_news" :key="index"
            :title="item.title"
            :image="item.image"
            :href="item.href"
          />
        </section>
      </article>
      <!-- noticias -->
    </section>

  </main>
</template>

<style scoped>
#noticias-article {
  margin: auto 300px;
}

#container-noticias {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin: 0 30px;
  gap: 20px;
  transition: all 1s;
}

#banner-home {
  width: 100%;
  height: 610px;
  max-width: 100vw;
  background-size: unset;
  background-position: center;
  background-repeat: no-repeat;
}

#botoes-do-acesso-rapido {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
  overflow-y: hidden;
}

#ver-todas-noticias {
  transition: all .8s;
}

#ver-todas-noticias:hover {
  transform: scale(.93, .93);
}

@media (max-width: 1873px) {
  #container-noticias {
    justify-content: center;
  }
  #noticias-article{
    margin: 0 100px;
  }
}

@media (max-width: 1195px) {

  #noticias-article{
    margin: 0 50px;
  }
}

@media (max-width: 779px) {

  #noticias-article{
    margin: 0 30px;
  }
  #container-noticias {
    justify-content: flex-start;
  }
}
</style>
