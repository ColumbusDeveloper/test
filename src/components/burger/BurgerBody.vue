<template>
    <div class="burgerbody burgerbody__none"
    :class="{burgerbody__box:visible}"
    >  
        <div class="burgerbody__item"
        v-if="pageProp!=='home'"
        @click="$router.push({name:'home'})"
        ><p class="burgerbody__item-text">Home</p> </div>

        <div class="burgerbody__item"
        v-if="pageProp!=='page'"
        @click="$router.push({name:'page'})"
        ><p class="burgerbody__item-text">Where</p></div>

        <div class="burgerbody__item"
        v-if="pageProp!=='page'"
        @click="$router.push({name:'page'})"
        ><p class="burgerbody__item-text">What</p></div>

        <div class="burgerbody__item"
        v-if="pageProp!=='page'"
        @click="$router.push({name:'page'})"
        ><p class="burgerbody__item-text">Who</p></div>

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