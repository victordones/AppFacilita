<template>
  <div class="header">
    <h1>Minhas Tarefas</h1>
    <p>
      Olá <span class="user">{{ userName }}</span
      >, você tem <span class="task-count">{{ pendingTasksCount }} tarefas</span> pendentes.
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      pendingTasksCount: 'pendingTasksCount'
    }),
    userName() {
      return 'Usuário'
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  padding 20px
  font-size 18px
  color: #283848
  margin-top: 50px

  h1 {
    font-size 26px
    font-weight bold
    margin-bottom: 0px

  }

  p {
    color: #77899E
    font-weight: 600
    font-size: 17px
    margin-top: 5px

     }

.user
  font-weight bold
  color #007bff

.task-count
  font-weight bold
  color: #2693FF
  text-decoration: underline
</style>
