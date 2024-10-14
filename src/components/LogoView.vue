<template>
  <div class="logo">
    <LogoImg :caminhoIcone="logoSrc" :size="'100px'" />
    <h1><span>MANANGER</span>TASKS</h1>
    <p>Gestão de tarefas pessoais</p>
  </div>
</template>

<script>
import LogoImg from './LogoImg.vue'
export default {
  components: { LogoImg },
  name: 'LogoView',
  data() {
    return {
      logoSrc: '/img/logo.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
span
  font-weight bold
  margin-bottom: 30px
h1
  margin-bottom: 30px
.logo
  text-align left
  line-height: 10px
  margin-top 50px
  margin-bottom: 30px
  .logo-image
    width 100px
    border-radius 5px
</style>
