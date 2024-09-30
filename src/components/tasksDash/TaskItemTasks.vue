<template>
  <div>
    <!-- Renderiza os detalhes da tarefa -->
    <div class="task-item" :class="{ 'task-completed': task.status === 'concluída' }">
      <!-- Checkbox e conteúdo da tarefa -->
      <TaskCheckbox :task="task" @toggle="toggleTaskStatus(task)" />
      <div class="task-content" :class="{ 'task-completed': task.status === 'concluída' }">
        <p>{{ task.title }}</p>
      </div>

      <!-- Prioridade da tarefa -->
      <div class="task-priority" :style="{ backgroundColor: getPriorityColor(task.priority) }">
        <span class="badge">{{ task.priority }}</span>
      </div>

      <!-- Menu de opções -->
      <MenuDropdown @edit="openEditModal" @delete="handleDeleteTask" />
    </div>

    <!-- Modal de Edição -->
    <EditTasks
      v-if="isEditModalVisible"
      :task="selectedTask"
      @close-modal="closeEditModal"
      @save-task="handleSaveTask"
    />
  </div>
</template>

<script>
import TaskCheckbox from './Checkbox.vue'
import MenuDropdown from './MenuDropdown.vue'
import EditTasks from './EditTasks.vue'

export default {
  components: {
    TaskCheckbox,
    MenuDropdown,
    EditTasks
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isEditModalVisible: false,
      selectedTask: null
    }
  },
  methods: {
    toggleTaskStatus(task) {
      this.$emit('toggle-task-status', task)
    },
    openEditModal() {
      // Define a tarefa selecionada antes de abrir o modal
      this.selectedTask = { ...this.task } // Faz uma cópia da tarefa
      this.isEditModalVisible = true
    },
    closeEditModal() {
      this.isEditModalVisible = false
    },
    handleSaveTask(updatedTask) {
      this.$emit('save-task', updatedTask) // Emite o evento para o componente pai salvar a tarefa editada
      this.closeEditModal()
    },
    handleDeleteTask() {
      this.$emit('delete-task', this.task.id)
    },
    getPriorityColor(priority) {
      if (priority === 'Importante') {
        return '#FFC42E' // Cor para tarefas importantes
      } else if (priority === 'Urgente') {
        return '#FF2E79' // Cor para tarefas urgentes
      } else {
        return '#f28b82' // Cor padrão para outras tarefas
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.task-item
  display flex
  align-items center
  background-color #f9f9f9
  border-radius 10px
  padding 10px
  margin-bottom 10px
  box-shadow 0 2px 4px rgba(0, 0, 0, 0.1)
  position relative

  &.task-completed
    opacity 0.5 // Define a opacidade do item quando a tarefa está concluída

p
  margin 0
  font-size 16px
  color #304458
  font-weight bold

.task-content.task-completed p
  text-decoration line-through
  color #9e9e9e

.task-priority
  margin-left auto
  margin-right 15px
  padding 5px 10px
  border-radius 15px
  font-size 12px
  color white
</style>
