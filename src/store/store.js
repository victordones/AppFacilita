import { createStore } from 'vuex'

export default function createStoreInstance() {
  return createStore({
    state: {
      tasks: JSON.parse(localStorage.getItem('tasks')) || []
    },
    mutations: {
      // Mutação para adicionar uma nova tarefa ao estado
      ADD_TASK(state, task) {
        state.tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      },

      // Mutação para alternar o status da tarefa
      TOGGLE_TASK_STATUS(state, taskId) {
        const task = state.tasks.find((t) => t.id === taskId)
        if (task) {
          task.status = task.status === 'concluída' ? 'pendente' : 'concluída'
          localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
      },

      // Mutação para editar uma tarefa existente
      EDIT_TASK(state, updatedTask) {
        const taskIndex = state.tasks.findIndex((t) => t.id === updatedTask.id)
        if (taskIndex !== -1) {
          state.tasks.splice(taskIndex, 1, updatedTask)
          localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
      },

      // Mutação para excluir uma tarefa
      DELETE_TASK(state, taskId) {
        state.tasks = state.tasks.filter((task) => task.id !== taskId)
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      },

      // Mutação para carregar as tarefas (útil em cenários como reinicialização)
      SET_TASKS(state, tasks) {
        state.tasks = tasks
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      }
    },
    actions: {
      // Ação para adicionar a tarefa chamando a mutação
      addTask({ commit }, task) {
        commit('ADD_TASK', task)
      },

      // Ação para alternar o status da tarefa
      toggleTaskStatus({ commit }, taskId) {
        commit('TOGGLE_TASK_STATUS', taskId)
      },

      // Ação para editar uma tarefa
      editTask({ commit }, updatedTask) {
        commit('EDIT_TASK', updatedTask)
      },

      // Ação para excluir uma tarefa
      deleteTask({ commit }, taskId) {
        commit('DELETE_TASK', taskId)
      },

      // Ação para carregar as tarefas do localStorage
      loadTasks({ commit }) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        commit('SET_TASKS', tasks)
      }
    },
    getters: {
      // Getter para obter o número total de tarefas
      totalTasks: (state) => state.tasks.length,
      pendingTasksCount: (state) => {
        return state.tasks.filter((task) => task.status == 'pendente').length
      },

      // Getter para obter todas as tarefas
      tasks: (state) => state.tasks,
      urgentTasksCount: (state) => {
        return state.tasks.filter((task) => task.priority === 'Urgente').length
      },
      importantTasksCount: (state) => {
        return state.tasks.filter((task) => task.priority === 'Importante').length
      }
    }
  })
}
