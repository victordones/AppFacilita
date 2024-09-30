<template>
  <section class="task-list">
    <div class="categories">
      <h4>Categorias</h4>
      <ul>
        <li @click="selectCategory('Todas')">
          <a href="#">Todas</a>
        </li>
        <li @click="selectCategory('Urgentes')">
          <a href="#"
            >Urgentes <span class="badge urgent">{{ urgentTasksCount }}</span></a
          >
        </li>
        <li @click="selectCategory('Importantes')">
          <a href="#"
            >Importantes <span class="badge important">{{ importantTasksCount }}</span></a
          >
        </li>
        <li @click="selectCategory('Outras')">
          <a href="#">Outras</a>
        </li>
        <li @click="selectCategory('Finalizadas')">
          <a href="#">Finalizadas</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Categorias',
  computed: {
    ...mapGetters({
      urgentTasksCount: 'urgentTasksCount',
      importantTasksCount: 'importantTasksCount'
    })
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category
      // Aqui você pode filtrar as tarefas por categoria
    }
  }
}
</script>

<style scoped>
.task-list {
  display: flex;
  align-items: center;
  background-color: #f4fbff;
  width: 227px;
}
.categories {
  width: 190px;
  margin-left: 40px;
  margin-bottom: 80px;
}
.categories h4 {
  font-size: 17px;
  color: #4e5f70;
  margin-bottom: 52px;
  font-weight: bold;
}
.categories ul {
  list-style: none;
  padding: 0;
  position: fixed;
}
.categories li {
  margin-bottom: 10px;
}
.categories li a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.categories li.active a {
  background-color: #f0f0f0;
  color: #007bff;
}
.categories li:hover a {
  background-color: #f0f0f0;
}
.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background-color: #ddd;
  border-radius: 50%;
  width: 24px; /* Definindo largura e altura iguais para criar o círculo */
  height: 24px;
  font-size: 12px;
  color: white;
  font-weight: bold; /* Definindo largura e altura iguais para criar o círculo */
}
.urgent {
  background-color: red;
  color: white;
}
.important {
  background-color: orange;
  color: white;
}
</style>
