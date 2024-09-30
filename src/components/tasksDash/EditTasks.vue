<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-container">
      <div class="modal-header">
        <h2>Editar Tarefa</h2>
        <button class="close-button" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <label for="title">Título:</label>
        <input id="title" v-model="editedTask.title" placeholder="Título" class="modal-input" />

        <label for="description">Descrição:</label>
        <textarea
          id="description"
          v-model="editedTask.description"
          placeholder="Descrição"
          class="modal-textarea"
        ></textarea>

        <div class="priority-options">
          <label>
            <input type="radio" v-model="editedTask.priority" value="Urgente" />
            Urgente
          </label>
          <label>
            <input type="radio" v-model="editedTask.priority" value="Importante" />
            Importante
          </label>
        </div>

        <div class="modal-footer">
          <button class="cancel-button" @click="closeModal">Cancelar</button>
          <button class="save-button" @click="saveChanges">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editedTask: { ...this.task } // Cria uma cópia da tarefa para edição
    }
  },
  methods: {
    ...mapActions(['editTask']), // Mapeia a ação 'editTask' diretamente do Vuex

    saveChanges() {
      this.editTask(this.editedTask) // Dispara a ação do Vuex para editar a tarefa
      this.closeModal() // Fecha o modal após salvar
    },
    closeModal() {
      this.$emit('close-modal') // Emite o evento para fechar o modal
    }
  }
}
</script>
<style lang="stylus">
.modal-overlay
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background-color rgba(0, 0, 0, 0.5)
  display flex
  justify-content center
  align-items center
  z-index 1000

.modal-container
  background-color white
  padding 30px
  border-radius 10px
  width 450px
  text-align center
  box-shadow 0px 4px 10px rgba(0, 0, 0, 0.1)
  position relative

.modal-header
  display flex
  justify-content space-between
  align-items center
  margin-bottom 20px

.modal-header h2
  margin 0
  font-size 1.5em
  color #333

.close-button
  background none
  border none
  font-size 1.5em
  cursor pointer
  color #333

.modal-body
  display flex
  flex-direction column
  justify-content right

.modal-body label
  display flex

.modal-input,
.modal-textarea
  width 100%
  padding 10px
  margin-top 5px
  margin-bottom 15px
  border 1px solid #ddd
  border-radius 4px
  font-size 1em

.modal-textarea
  resize none
  height 100px

.priority-options
  display flex
  justify-content flex-start
  gap 20px
  margin-bottom 20px

.priority-options label
  display flex
  align-items center
  font-size 14px
  color #555

.priority-options input
  margin-right 5px

.modal-footer
  display flex
  justify-content flex-end
  gap 10px

.cancel-button,
.save-button
  padding 10px 20px
  border none
  border-radius 5px
  cursor pointer
  font-size 1em

.cancel-button
  background-color #f5f5f5
  color #333

.cancel-button:hover
  background-color #e0e0e0

.save-button
  background-color #32d296
  color white

.save-button:hover
  background-color #28a085
</style>
