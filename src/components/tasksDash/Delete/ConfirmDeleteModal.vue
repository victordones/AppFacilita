<template>
  <div class="confirmation-modal-overlay" @click.self="closeModal">
    <div class="confirmation-modal-content">
      <div class="radius-trash">
        <LogoImg :caminhoIcone="trashSrc" />
      </div>
      <h2>Tem certeza que deseja <span class="highlight">excluir</span> esta tarefa?</h2>
      <p>Esta ação não poderá ser desfeita.</p>
      <div class="button-container">
        <button class="cancel-button" @click="closeModal">Cancelar</button>
        <button class="confirm-button" @click="confirmDelete">Confirmar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import LogoImg from '../../LogoImg.vue'

export default {
  props: {
    taskId: {
      type: Number,
      required: true
    }
  },
  components: {
    LogoImg
  },
  data() {
    return {
      trashSrc: './img/trash.png'
    }
  },
  methods: {
    ...mapActions(['deleteTask']), // Mapeia a ação deleteTask do Vuex
    closeModal() {
      this.$emit('close')
    },
    confirmDelete() {
      this.$emit('confirm') // Emite o evento para o componente pai
    }
  }
}
</script>

<style scoped>
.confirmation-modal-overlay {
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

.confirmation-modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.delete-icon {
  width: 80px;
  height: 80px;
}

.radius-trash {
  background-color: #edf6fc; /* cor de fundo semelhante à da imagem */
  border-radius: 50%; /* faz com que o elemento seja um círculo */
  width: 136px; /* ajusta o tamanho para manter proporção de círculo */
  height: 136px; /* igual à largura para manter o círculo */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px; /* centraliza e dá espaço inferior */
}
h2 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.highlight {
  color: #ff4d4f;
}

p {
  font-size: 14px;
  color: #777;
  margin-bottom: 30px;
}

.button-container {
  display: flex;
  justify-content: center; /* Centraliza os botões horizontalmente */
  gap: 20px; /* Adiciona espaçamento entre os botões */
}

.cancel-button {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.cancel-button:hover {
  background-color: #218838;
}

.confirm-button {
  background-color: #ff4d4f;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.confirm-button:hover {
  background-color: #d9363e;
}
</style>
