<template>
  <div class="logo">
    <img :src="caminhoIcone" :style="{ width: size, height: size }" />
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    size: {
      type: String,
      default: '50px',
      caminhoIcone: String
    },
    caminhoIcone: {
      type: String,
      required: true // Define que o caminho do ícone é obrigatório
    }
  },
  data() {
    return {
      logoSrc: '/img/logo.png'
    }
  }
}
</script>

<style scoped>
.logo {
  margin-bottom: 5px;
}
img {
  display: block;
  object-fit: contain; /* Mantém a proporção */
}
</style>
