<template>
  <div>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle-task-status="toggleTaskStatus"
      @edit-task="editTask"
      @delete-task="deleteTask"
    />
    <p v-if="tasks.length === 0"></p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TaskItem from './TaskItemTasks.vue'

export default {
  components: {
    TaskItem
  },
  computed: {
    ...mapGetters(['tasks'])
  },
  methods: {
    ...mapActions(['toggleTaskStatus', 'editTask', 'deleteTask'])
  },
  mounted() {
    this.$store.dispatch('loadTasks')
  }
}
</script>
