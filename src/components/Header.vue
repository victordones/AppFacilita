<template>
  <header class="header">
    <div class="user-info">
      <img src="https://via.placeholder.com/40" alt="Avatar" class="avatar" />
      <div>
        <h4>Eduardo Pereira da Costa</h4>
        <p>Front-end Developer</p>
      </div>
    </div>
  </header>
</template>

<style lang="stylus" scoped>

.header
  display flex
  justify-content flex-end
  padding 20px 0
  background-color white
  box-shadow 0 1px 5px rgba(0, 0, 0, 0.1)
  position fixed
  top 0
  left 0
  width 100%
  z-index 20

.user-info
  display flex
  align-items center
  margin-right: 250px

.avatar
  border-radius 50%
  margin-right 10px

h4
  margin 0
  font-size 16px

p
  margin 0
  font-size 12px
  color #007bff
</style>
