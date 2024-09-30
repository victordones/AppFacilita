<template>
  <div class="minhas-tarefas">
    <div class="main-content">
      <Header :user="user" :totalTasks="tasks.length" />
      <div class="task-section"></div>
      <FloatingButton @click="adicionarTarefa" />
    </div>
  </div>
</template>

<script>
import Header from './tasksDash/HeaderTasks.vue'
import FloatingButton from './FloatingButton.vue'

export default {
  name: 'MyTasks',
  components: {
    Header,
    FloatingButton
  },
  data() {
    return {
      user: {
        name: 'Eduardo Pereiraasd',
        role: 'Front-end Developer'
      },
      tasks: [
        {
          id: 1,
          title: 'Planejar desenvolvimento do app TodoList',
          status: 'concluída',
          priority: 'urgent'
        },
        { id: 2, title: 'Criar projeto Vue.js', status: 'pendente', priority: 'importante' },
        { id: 3, title: 'Montar telas HTML/CSS', status: 'pendente', priority: 'importante' },
        { id: 4, title: 'Separar componentes', status: 'pendente', priority: 'normal' },
        { id: 5, title: 'Programar componentes', status: 'pendente', priority: 'normal' }
      ]
    }
  },
  methods: {
    adicionarTarefa() {
      // Função para adicionar nova tarefa
      alert('Adicionar nova tarefa')
    }
  }
}
</script>

<style lang="stylus" scoped>
.minhas-tarefas
  display flex
  width 100%
  min-height 100vh

.main-content
  flex 1
  display flex
  flex-direction column
  padding 20px
  background-color #f8f9fa

.task-section
  flex 1
  margin-top 20px
</style>
