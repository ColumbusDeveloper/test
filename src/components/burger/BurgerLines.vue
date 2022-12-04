<template>
    <div class="blines"
    ref="bmicon"
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
        },
        dropdown (e) {
            let icon = this.$refs.bmicon
            let a = e.composedPath().includes(icon)
            if (!a) {
                this.pressed = false
                this.$emit('act', this.pressed)
            }
            if (this.pressed) {
                this.$refs.linetop.style = 'margin-bottom:-1px'; 
            } else {
                this.$refs.linetop.style = 'margin-bottom:7px';
            }
        }
    },
    created () {
        document.addEventListener('click', this.dropdown)
    },
    unmounted () {
        document.removeEventListener('click', this.dropdown)
    }
}

</script>

<style lang="scss" scoped>
    @import '../../assets/scss/components/burger/burgerlines';
</style>