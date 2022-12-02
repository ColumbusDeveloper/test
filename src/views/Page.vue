<template>
<div class="page">
    <h1 class="page__text"
    :class="{page__textactive:action}"
    >This is a PAGE</h1>
    <BurgerMain class="page__burger" 
    :page="page"
    />

</div>
</template>

<script>

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
    changeAction () {
      this.action = !this.action
    }
  },
  beforeMount () {
    this.page = this.$route.name
  },
 
  
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/views/page/page';
</style>