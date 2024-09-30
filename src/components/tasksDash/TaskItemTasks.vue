<template>
  <div class="task-item">
    <!-- Checkbox para marcar/desmarcar a tarefa -->
    <TaskCheckbox :task="task" @toggle-status="toggleTaskStatus" />

    <!-- Conteúdo da tarefa -->
    <div class="task-content" :class="{ 'task-completed': task.status === 'concluída' }">
      <p>{{ task.title }}</p>
    </div>

    <!-- Prioridade da tarefa -->
    <div class="task-priority" :style="{ backgroundColor: getPriorityColor(task.priority) }">
      <span class="badge">{{ task.priority }}</span>
    </div>

    <!-- Opções de exclusão e edição -->
    <TaskOptionsMenu @edit="editTask" @delete="deleteTask" />
  </div>
</template>

<script>
import TaskCheckbox from './Checkbox.vue'
import TaskOptionsMenu from './MenuDropdown.vue'

export default {
  components: {
    TaskCheckbox,
    TaskOptionsMenu
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleTaskStatus(task) {
      this.$emit('toggle-task-status', task)
    },
    editTask() {
      this.$emit('edit-task', this.task)
    },
    deleteTask() {
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

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

p {
  margin: 0;
  font-size: 16px;
  color: #304458;
  font-weight: bold;
}

.task-content.task-completed p {
  text-decoration: line-through;
  color: #9e9e9e;
}

.task-priority {
  margin-left: auto;
  margin-right: 15px;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  color: white;
}
</style>
