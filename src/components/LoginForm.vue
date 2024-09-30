<template>
  <div class="login-wrapper">
    <div class="login-container">
      <h2>Entre com seus dados de acesso.</h2>
      <form @submit.prevent="submitLogin" class="login-form">
        <div class="form-group">
          <label for="username">Nome de usuário ou e-mail:</label>
          <input type="text" id="username" v-model="username" />
        </div>

        <div class="form-group">
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" />
        </div>

        <!-- Usamos um botão de submit e redirecionamos com o método 'submitLogin' -->
        <button type="submit" class="btn btn-primary">Entrar</button>

        <a href="#" class="forgot-password">Esqueci minha senha</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitLogin() {
      // Lógica de login pode ser adicionada aqui
      console.log('Username:', this.username)
      console.log('Password:', this.password)

      // Redirecionamento para a rota /taskslist
      this.$router.push('/Dashboard')
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-wrapper
  display flex
  justify-content center
  align-items center
  height 100vh
  background-color white

.login-container
  display flex
  flex-direction column
  padding 20px
  background-color white

h2
  margin-bottom 20px
  font-size 18px
  color #283848
  text-align left
  font-weight: bold

.login-form
  display flex
  flex-direction column
  gap 20px
  width 320px
  color #4E657

.form-group
  display flex
  flex-direction column
  margin-bottom 15px
  font-size 14px
  color #4E657B

input
  padding 12px
  font-size 16px
  border 1px solid #ccc
  border-radius 5px
  transition border-color 0.3s ease

  &:focus
    border-color #28a745

label
  margin-bottom 5px
  font-weight bold

.btn-primary
  background-color #28a745
  color white
  border none
  padding 12px
  font-size 16px
  border-radius 5px
  cursor pointer
  transition background-color 0.3s ease

  &:hover
    background-color #218838

.forgot-password
  display block
  text-align left
  color #007bff
  margin-top 10px
  font-size 13px

  &:hover
    text-decoration underline
</style>
