<template>
  <div
    class="task-checkbox"
    :class="{ checked: task.status === 'concluída' }"
    @click="toggleStatus"
  >
    <span class="checkmark" v-if="task.status === 'concluída'">&#10003;</span>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleStatus() {
      this.$store.dispatch('toggleTaskStatus', this.task.id)
    }
  }
}
</script>

<style scoped>
.task-checkbox {
  background-color: #e2eef5;
  border-radius: 5px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
}

.task-checkbox.checked {
  background-color: #a7efd8;
}

.checkmark {
  font-size: 18px;
  color: white;
}
</style>
