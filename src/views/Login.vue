<template>
  <div class="login-page">
    <div class="login-left">
      <LogoView />
    </div>
    <div class="login-right">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LogoView from '../components/LogoView.vue'
import LoginForm from '../components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LogoView,
    LoginForm
  }
}
</script>

<style lang="stylus" scoped>
.login-page
  display grid
  grid-template-columns 1fr 2fr
  height 100vh

  .login-left
    background-color #2693ff
    display flex
    justify-content center
    align-items center
    color white

  .login-right
    display flex
    flex-direction column
    justify-content center


    h2
      margin-bottom 20px
      color: #283848
      font-weight: bold
      font-size 18px
</style>
