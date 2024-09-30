<template>
  <div class="task-options">
    <span class="dots" :class="{ active: showMenu }" @click="toggleMenu">⋮</span>
    <div v-if="showMenu" class="dropdown-menu">
      <button class="dropdown-item edit-btn" @click="handleEdit">
        <span class="dot edit-dot"></span> Editar
      </button>
      <button class="dropdown-item delete-btn" @click="openDeleteModal">
        <span class="dot delete-dot"></span> Excluir
      </button>
    </div>

    <!-- Modal de Confirmação de Exclusão -->
    <ConfirmDeleteModal
      v-if="showDeleteModal"
      @close="closeDeleteModal"
      @confirm="confirmDeleteTask"
    />
  </div>
</template>

<script>
import ConfirmDeleteModal from './Delete/ConfirmDeleteModal.vue'

export default {
  components: {
    ConfirmDeleteModal
  },
  data() {
    return {
      showMenu: false,
      showDeleteModal: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    handleClickOutside(event) {
      if (this.showMenu && !this.$el.contains(event.target)) {
        this.showMenu = false
      }
    },
    handleEdit() {
      this.$emit('edit')
      this.showMenu = false
    },
    openDeleteModal() {
      this.showDeleteModal = true
      this.showMenu = false // Fecha o menu ao abrir o modal
    },
    closeDeleteModal() {
      this.showDeleteModal = false
    },
    confirmDeleteTask() {
      this.$emit('delete')
      this.closeDeleteModal() // Fecha o modal após confirmar a exclusão
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  }
}
</script>

<style scoped>
.task-options {
  position: relative;
}

.dots {
  font-size: 20px;
  color: #b0bec5;
  cursor: pointer;
}
.dots.active {
  color: #2693ff;
  z-index: 4; /* Coloca os três pontinhos acima do dropdown */
  position: relative; /* Garante que o z-index funcione */
}
.dropdown-menu {
  position: absolute;
  right: -150%;
  top: -20%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 5px 30px 5px 0px; /* Espaço para o círculo */
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.dropdown-menu button {
  position: relative;
  background: none;
  border: none;
  padding: 5px;
  font-size: 14px;
  cursor: pointer;
  color: #333;
  text-align: left;
  padding-left: 30px;
  width: 100%; /* Espaço para o círculo */
  z-index: 1000;
}

.dropdown-menu button::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.edit-btn::before {
  background-color: #32d296; /* Cor verde para Editar */
}

.delete-btn::before {
  background-color: #c0c8d1; /* Cor cinza claro para Excluir */
}

.dropdown-menu button:hover {
  background-color: #f0f0f0;
}
</style>
