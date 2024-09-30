<template>
  <div>
    <button class="floating-btn" @click="showModal = true">+</button>

    <!-- O modal só é mostrado quando showModal for verdadeiro -->
    <TaskModal v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script>
import TaskModal from '@/components/tasksDash/TaskModal.vue'

export default {
  data() {
    return {
      showModal: false // Controla a exibição do modal
    }
  },
  components: {
    TaskModal
  }
}
</script>

<style lang="stylus" scoped>
.floating-btn
  position fixed
  bottom 20px
  right 20px
  background-color #28a745
  color white
  border none
  border-radius 50%
  width 60px
  height 60px
  font-size 30px
  display flex
  justify-content center
  align-items center
  cursor pointer
</style>
