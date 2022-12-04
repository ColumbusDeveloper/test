<template>
    <div class="burgermain">
        <Blines
        class="burgermain__lines"
        @act="menuStatus"
        ></Blines>
        <BurgerBody
        class="burgermain__body"
        :class="{burgermain__visible:menuOn}"
        :page="page"
        >
        </BurgerBody>
    </div>
</template>

<script>

import Blines from '@/components/burger/BurgerLines.vue'
import BurgerBody from '@/components/burger/BurgerBody.vue'
export default {
name: 'BurgerMenuMain',
props:['page'],
components: {
    Blines,
    BurgerBody,
},
data () {
    return {
        menuOn: false,
        page:this.page,
    }
},
methods: {
    menuStatus (e) {
        this.menuOn = e
    }
}
   
}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/components/burger/burgermain';
</style>