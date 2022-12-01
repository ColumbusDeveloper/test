<template>
  <div class="home">
    <!-- <MainText msg="Welcome to Your Vue.js App"/> -->
    <BurgerMain class="home__burger"
    :page="page"
    />
  </div>
</template>

<script>
// @ is an alias to /src
// import MainText from '@/components/home/MainText.vue'
import BurgerMain from '@/components/burger/BurgerMenuMain.vue'

export default {
  name: 'HomeView',
  components: {
    // MainText,
    BurgerMain,
  },
  data () {
    return {
      page:'',
    }
  },
  beforeMount () {
    this.page = this.$route.name
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/views/home/home';
</style>