import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import icons from '@/fontawesome.js'
library.add(
  icons
)
import { createNotivue } from 'notivue'


import 'notivue/notification.css' // Only needed if using built-in <Notification />
import 'notivue/animations.css' // Only needed if using default animations

const notivue = createNotivue({
  position: 'top-right',
  limit: 4,
  enqueue: true,
  avoidDuplicates: true,
  notifications: {
    global: {
      duration: 3000
    }
  }
})

const app = createApp(App)

app.use(notivue)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)
app.mount('#app')
