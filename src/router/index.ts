import { createRouter, createWebHistory } from 'vue-router'
const MinhasTarefas = () => import('@/views/MinhasTarefas.vue')
const Login = () => import('@/views/Login.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },

    {
      path: '/dashboard',
      name: 'MinhasTarefas',
      component: MinhasTarefas
    }
  ]
})

export default router
