<template>
<div class="page">
    <h1 class="page__text"
    
    >This is a PAGE</h1>
    <BurgerMain class="page__burger" 
    :page="page"
    
    />

</div>
</template>

<script>
import gsap from 'gsap'
import BurgerMain from '@/components/burger/BurgerMenuMain.vue'

export default {
  name: 'PageView',
  components: {

    BurgerMain,
  },
  data () {
    return {
      page:'',
      action:false,
    }
  },
  methods: {
    setAct () {
      this.action = false
    }
  },
  
  beforeMount () {
    this.page = this.$route.name
  },
  mounted () {
    gsap.to(".page__text", {
    duration: 1, 
    x: 150, 
    y: 100, 
    ease: "none", 
    });
    
  }
  
  
 
  
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/views/page/page';
</style>