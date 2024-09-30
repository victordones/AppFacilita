<template>
  <div class="search-bar">
    <input type="text" v-model="search" placeholder="Buscar Tarefas" />
    <LogoImg class="icon-search" :caminhoIcone="searchSrc" :size="'25px'" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import LogoImg from '../LogoImg.vue'

export default {
  components: { LogoImg },
  computed: {
    ...mapState(['searchQuery']),
    search: {
      get() {
        return this.searchQuery
      },
      set(value) {
        this.setSearchQuery(value) // Usa a action para definir o termo de busca no Vuex
      }
    }
  },
  methods: {
    ...mapActions(['setSearchQuery'])
  },
  data() {
    return {
      searchSrc: 'img/search.png'
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-bar
  display flex
  align-items center
  padding 5px
  border 2px solid #BFDAEB // Borda azul mais destacada
  border-radius 5px
  background-color #f1f8ff // Fundo levemente azul claro
  width 100%
  color: #AECBDE
  margin-bottom: 20px
  input
    flex 1
    padding 10px
    border none
    outline none
    font-size 16px
    color #333
    background-color transparent // Sem fundo no input para coincidir com o container
    &::placeholder
      color #b0bec5 // Placeholder com cor mais clara
  .icon-search
    margin-right:  10px
    color: #AECBDE
</style>
