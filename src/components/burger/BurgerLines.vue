<template>
    <div class="blines"
    @click="press"
    >
        <div class="blines__line"
        ref="linetop"
        :class="{blines__topactive:pressed,
                 blines__toppass:!pressed}"
        ></div>
        <div class="blines__line"
        ref="linebot"
        :class="{blines__botactive:pressed,
                 blines__botpass:!pressed}"
        ></div>      
    </div>
</template>

<script>



export default {
name: 'BurgerLines',
    components: {
       
    },
    data () {
        return {
            pressed: false,
        }
    },
    methods: {
        press () {
            this.pressed = !this.pressed 
            if (this.pressed) {
                this.$refs.linetop.style = 'margin-bottom:-1px'; 
            } else {
                this.$refs.linetop.style = 'margin-bottom:7px';
            }
            this.$emit('act', this.pressed)
        }
    }
}

</script>

<style lang="scss" scoped>
    @import '../../assets/scss/components/burger/burgerlines';
</style>