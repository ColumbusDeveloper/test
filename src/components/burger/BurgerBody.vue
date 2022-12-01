<template>
    <div class="burgerbody burgerbody__none"
    :class="{burgerbody__box:visible}"
    >  
        <div class="burgerbody__item"
        v-if="pageProp!=='home'"
        @click="$router.push({name:'home'})"
        >Home</div>

        <div class="burgerbody__item"
        v-if="pageProp!=='page'"
        @click="$router.push({name:'page'})"
        >Where</div>

        <div class="burgerbody__item"
        v-if="pageProp!=='page'"
        @click="$router.push({name:'page'})"
        >What</div>

        <div class="burgerbody__item"
        v-if="pageProp!=='page'"
        @click="$router.push({name:'page'})"
        >Who</div>

    </div>
</template>

<script>



export default {
    name: 'BurgerBody',
    props:['page'],
    data() {
        return {
          
            pageProp:this.page
        }
    },
    watch: {
        page(val) {
            this.pageProp = val
        }
    },
    
}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/components/burger/burgerbody';
</style>