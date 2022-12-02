<template>
  <div class="home">
    <!-- <MainText msg="Welcome to Your Vue.js App"/> -->
    <BurgerMain class="home__burger"
    :page="page"
    />

    <NavLeft 
    class="home__navleft home__navcomp"
    />

    <NavBot 
    class="home__navbot home__navcomp"
    />

    <NavRight 
    class="home__navright home__navcomp"
    />
       
  </div>
</template>

<script>
// import MainText from '@/components/home/MainText.vue'
import BurgerMain from '@/components/burger/BurgerMenuMain.vue'
import NavLeft from '@/components/home/HomeNavLeft.vue'
import NavBot from '@/components/home/HomeNavBot.vue'
import NavRight from '@/components/home/HomeNavRight.vue'

export default {
  name: 'HomeView',
  components: {
    // MainText,
    BurgerMain,
    NavLeft,
    NavBot,
    NavRight,
  },
  data () {
    return {
      page:'',
    }
  },
  
  beforeMount () {
    this.page = this.$route.name
  },
  
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/views/home/home';
</style>