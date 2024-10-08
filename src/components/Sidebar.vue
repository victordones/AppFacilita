<template>
  <aside class="sidebar">
    <div class="logoF">
      <LogoImg :caminhoIcone="logoSrc" :size="'60px'" />
    </div>
    <div class="nav-container">
      <nav class="nav-menu">
        <ul>
          <li>
            <router-link class="dashboard-link" to="/dashboard">
              <LogoImg :caminhoIcone="dashSrc" :size="'32px'" />
              <span>Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <LogoImg :caminhoIcone="checkSrc" :size="'32px'" />
              <span>Tarefas</span>
            </router-link>
          </li>
          <li>
            <router-link to="#">
              <LogoImg :caminhoIcone="configSrc" :size="'32px'" />
              <span>Configurações</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
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
      configSrc: '/img/config.png'
    }
  }
}
</script>

<style lang="stylus" scoped>

.sidebar
  background-color #007bff
  color white
  height 100vh
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
  z-index 21
  padding-top 20px // Adiciona espaçamento no topo
  position fixed


.logoF
  margin-bottom 10px // Espaço entre o logo e o menu

.nav-container
  flex-grow 1
  display flex
  flex-direction column
  justify-content center
.nav-menu
  display flex
  flex-direction column
  align-items center
  width 100%

  ul
    list-style none
    padding 0
    width 100%

  li
    margin-bottom 20px


  a
    color white
    text-decoration none
    font-size 14px
    font-weight bold
    display flex
    flex-direction column
    align-items center
    justify-content center
    padding 10px
    border-radius 5px
    transition background-color 0.3s ease

  a:hover
    background-color #0056b3
</style>
