
import { createStore } from 'vuex'


export const store = createStore({
  state () {
    return {
      count: 0,
      colors:{
        primary: '#14427d',
        lightPrimary: '#70a1e1',
        secondary: '#0e2950',
        light: '#ffffff',
        backgroundPage:"#e1e7e7"
      }
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
