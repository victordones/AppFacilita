<template>
  <div class="task-options">
    <span class="dots" @click="toggleOptions">&#x2022;&#x2022;&#x2022;</span>
    <div v-if="showOptions" class="options-menu">
      <ul>
        <li @click="editTask">Editar</li>
        <li @click="openDeleteModal">Excluir</li>
      </ul>
    </div>

    <!-- Modal de Confirmação de Exclusão -->
    <ConfirmDeleteModal
      v-if="showDeleteModal"
      :taskId="taskId"
      @close="closeDeleteModal"
      @confirm="confirmDeleteTask"
    />
  </div>
</template>

<script>
import ConfirmDeleteModal from './ConfirmDeleteModal.vue'

export default {
  components: {
    ConfirmDeleteModal
  },
  props: {
    taskId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      showOptions: false,
      showDeleteModal: false
    }
  },
  methods: {
    confirmDeleteTask() {
      this.$emit('delete', this.taskId) // Emite o evento de exclusão para o componente pai
      this.closeDeleteModal()
    },
    editTask() {
      this.$emit('edit-task', this.task)
    },
    openDeleteModal() {
      this.showDeleteModal = true
      this.showOptions = false // Fechar as opções ao abrir o modal
    },
    closeDeleteModal() {
      this.showDeleteModal = false
    },
    confirmDeleteTask() {
      this.$emit('delete-task', this.task) // Emitir o evento para o pai excluir a tarefa
      this.closeDeleteModal() // Fechar o modal após a confirmação
    }
  }
}
</script>

<style scoped>
.task-options {
  position: relative;
  display: inline-block;
}

.dots {
  font-size: 20px;
  color: #b0bec5;
  cursor: pointer;
}

.options-menu {
  position: absolute;
  right: 0;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 10px;
  z-index: 1;
}

.options-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.options-menu ul li {
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  border-radius: 4px;
}

.options-menu ul li:hover {
  background-color: #e2eef5;
}
</style>
