<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MainText msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainText from '@/components/home/MainText.vue'

export default {
  name: 'HomeView',
  components: {
    MainText,
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/views/home/home';
</style>