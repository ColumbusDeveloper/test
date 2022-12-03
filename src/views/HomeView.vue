<template>
  <div class="home">

    <img class="home__imgS" src="@/static/images/imgS.png" alt="S">
    
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

    <div class="home__movingtext">
  
      <StringRunUp 
      class="home__stringrun home__stringrunup"
      />

      <StringRunDown 
      class="home__stringrun home__stringrundown"
      />
      
    </div>

    <CentralText class="home__centraltext" />
     
  </div>
</template>

<script>

import BurgerMain from '@/components/burger/BurgerMenuMain.vue'
import NavLeft from '@/components/home/HomeNavLeft.vue'
import NavBot from '@/components/home/HomeNavBot.vue'
import NavRight from '@/components/home/HomeNavRight.vue'
import StringRunDown from '@/components/home/StringRunDown.vue'
import StringRunUp from '@/components/home/StringRunUp.vue'
import CentralText from '@/components/home/HomeCentralText.vue'

export default {
  name: 'HomeView',
  components: {
    BurgerMain,
    NavLeft,
    NavBot,
    NavRight,
    StringRunDown,
    StringRunUp,
    CentralText,
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