<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Cadastrar Tarefa</h2>
        <button class="close-button" @click="closeModal">&#10005;</button>
      </div>

      <form @submit.prevent="submitTask">
        <!-- Campo de Título -->
        <input v-model="title" type="text" id="title" required />

        <!-- Campo de Descrição -->
        <label for="description">Descrição:</label>
        <textarea v-model="description" id="description" rows="4" required></textarea>

        <!-- Opções de Prioridade -->
        <div class="priority-options">
          <label> <input type="radio" value="Urgente" v-model="priority" /> Urgente </label>
          <label> <input type="radio" value="Importante" v-model="priority" /> Importante </label>
        </div>

        <!-- Botão de Adicionar -->
        <button type="submit" class="add-button">Adicionar</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      title: '',
      description: '',
      priority: 'Urgente'
    }
  },
  methods: {
    ...mapActions(['addTask']),
    submitTask() {
      const newTask = {
        id: Date.now().toString(),
        title: this.title,
        description: this.description,
        priority: this.priority,
        status: 'pendente'
      }

      // Chama a ação Vuex para adicionar a nova tarefa
      this.addTask(newTask)

      // Limpa os campos do formulário
      this.title = ''
      this.description = ''
      this.priority = 'Urgente'

      // Fecha o modal
      this.closeModal()
    },
    closeModal() {
      this.$emit('close') // Fecha o modal
    }
  }
}
</script>

<style scoped>
/* Estilos do Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

label {
  display: block;
  font-size: 14px;
  margin-top: 10px;
  color: #5f6368;
}

input[type='text'],
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #d9e2ec;
  border-radius: 5px;
  font-size: 14px;
  color: #5f6368;
  box-sizing: border-box;
}

input[type='text']:focus,
textarea:focus {
  outline: none;
  border-color: #a0c4ff;
}

.priority-options {
  display: flex;
  margin-top: 10px;
}

.priority-options label {
  margin-right: 15px;
  font-size: 14px;
  color: #5f6368;
}

.add-button {
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  background-color: #a0c4ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.add-button:hover {
  background-color: #5f8ef7;
}
</style>
