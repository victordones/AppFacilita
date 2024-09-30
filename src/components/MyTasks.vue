<template>
  <div class="minhas-tarefas">
    <div class="main-content">
      <!-- Cabeçalho e Lista de Tarefas -->
      <Header />
      <div class="task-section">
        <SearchBar />
        <TaskList />
      </div>

      <!-- Botão flutuante que contém o modal de adicionar tarefa -->
      <FloatingButton />
    </div>
  </div>
</template>

<script>
import FloatingButton from './FloatingButton.vue'
import Header from './tasksDash/HeaderTasks.vue'
import SearchBar from './tasksDash/SearchBar.vue'
import TaskList from './tasksDash/TaskListTasks.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MyTasks',
  components: {
    Header,
    TaskList,
    SearchBar,
    FloatingButton
  },
  methods: {
    ...mapActions(['loadTasks'])
  },
  mounted() {
    this.loadTasks()
  }
}
</script>

<style lang="stylus" scoped>
.minhas-tarefas {
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: #ccc;
  font-weight: bold;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #E9F4FB;
  padding: 100px;
}

.task-section {
  flex: 1;
  margin-top: 20px;
}
</style>
