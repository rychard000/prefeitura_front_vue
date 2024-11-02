import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/Home.vue'
import EstruturaOrganizacional from '@/views/EstruturaOrganizacional/EstruturaOrganizacional.vue'
import Transparencia from '@/views/Transparencia/Transparencia.vue'
import EstruturaOrganizacionalShow from '@/views/EstruturaOrganizacional/EstruturaOrganizacionalShow.vue'
import GabinetPrefeito from '@/views/EstruturaOrganizacional/GabinetPrefeito.vue'
import GabineteVicePrefeito from '@/views/EstruturaOrganizacional/GabineteVicePrefeito.vue'
import PortalServicos from '@/views/PortalServicos/PortalServicos.vue'
import Noticias from '@/views/Noticias/Noticias.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/estrutura-organizacional',
      name: 'estrutura-organizacional',
      component: EstruturaOrganizacional
    },
    {
      path: '/estrutura-organizacional/:id',
      name: 'estrutura-organizacional-show',
      component: EstruturaOrganizacionalShow
    },
    {
      path: '/gabinete-prefeito',
      name: 'gabinete-prefeito',
      component: GabinetPrefeito
    },
    {
      path: '/gabinete-vice-prefeito',
      name: 'gabinete-vice-prefeito',
      component: GabineteVicePrefeito
    },
    {
      path: '/transparencia',
      name: 'transparencia',
      component: Transparencia
    },
    {
      path: '/portal-servicos',
      name: 'portal-servicos',
      component: PortalServicos
    },
    {
      path: '/noticias',
      name: 'noticias',
      component: Noticias
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
