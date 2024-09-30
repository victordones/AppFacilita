<template>
  <aside class="sidebar">
    <div class="logo">
      <LogoImg :caminhoIcone="logoSrc" :size="'60px'" />
    </div>
    <nav class="nav-menu">
      <ul>
        <li>
          <router-link class="dashboard-link" to="/dashboard">
            <LogoImg :caminhoIcone="dashSrc" :size="'32px'" />
            <span>Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link to="/tarefas">
            <LogoImg :caminhoIcone="checkSrc" :size="'32px'" />
            <span>Tarefas</span>
          </router-link>
        </li>
        <li>
          <router-link to="/configuracoes">
            <LogoImg :caminhoIcone="configSrc" :size="'32px'" />
            <span>Configurações</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import LogoImg from './LogoImg.vue'

export default {
  components: { LogoImg },
  data() {
    return {
      dashSrc: '/img/dash.png',
      logoSrc: '/img/logo.png',
      checkSrc: '/img/check.png',
      configSrc: '/img/config.png',
    }
  }
}
</script>

<style scoped>
.sidebar {
  background-color: #007bff;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
  z-index: 1;
}

.logo {
  margin-top: 5px;
}

.nav-menu {
  height: 100%;
  display: flex;
  align-items: center;
}
.nav-menu ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.nav-menu li {
  margin-bottom: 20px;
}
.dashboard-link a {
  background-color: #d8dee4;
  color: white;
}

/* Mantendo o hover para o Dashboard com a cor aplicada */

.nav-menu a {
  color: white;
  text-decoration: none;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  flex-direction: column; /* Colocar ícone acima do texto */
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-menu a:hover {
  background-color: #0056b3;
}
</style>
