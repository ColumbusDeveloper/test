<template>
  <div class="home">

    <HomeImgS class="home__imgS" />
    
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

    <HomeButtRound class="home__buttround" />

    <HomeLang class="home__lang" />
     
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
import HomeImgS from '@/components/home/HomeImgS.vue'
import HomeLang from '@/components/home/HomeLang.vue'

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
    HomeImgS,
    HomeLang,
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