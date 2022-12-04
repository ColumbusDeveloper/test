<template>
    <div class="home-imgS-box">  
        <img class="home-imgS-box__imgS" src="@/static/images/imgS.png" alt="S">
        <HomeButtRound class="home-imgS-box__butt" 
        />
    </div>
</template>

<script>

import HomeButtRound from '@/components/home/HomeButtRound.vue'

export default {
    name: 'HomeImgS',
    components: {
        HomeButtRound,
    },
    data () {
        
    },
    methods: {
        
    }
    
    
}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/views/home/homeimgs';
</style>