<template>
  <div class="minhas-tarefas">
    <Sidebar />
    <div class="main-content">
      <Header />
      <div class="content">
        <Categorias />
        <MyTasks />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Categorias from '@/components/Categorias.vue'
import TasksInfo from '../components/TasksInfo.vue'
import MyTasks from '../components/MyTasks.vue'
import FloatingButton from '../components/FloatingButton.vue'

export default {
  name: 'MinhasTarefas',
  components: {
    Sidebar,
    Header,
    Categorias,
    FloatingButton,
    TasksInfo,
    MyTasks
  }
}
</script>

<style lang="stylus" scoped>
.content
  position fixed
  display flex
  flex 1
  margin-top 2px

.minhas-tarefas
  display flex
  height 100vh /* Ocupa toda a altura da tela */
  width 100vw /* Ocupa toda a altura da tela */

.main-content
  flex 1
  display flex
  flex-direction column
  background-color #f5f6fa /* cor de fundo */
  height 100vh
</style>
