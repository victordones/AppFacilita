import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import createStore from './store/store.js' // Importa da pasta store

// Cria a instância do app
const app = createApp(App)

// Cria a instância do store
const store = createStore()

// Usa o router e o store na instância do app
app.use(router)
app.use(store)

// Monta o app no elemento HTML com id 'app'
app.mount('#app')
