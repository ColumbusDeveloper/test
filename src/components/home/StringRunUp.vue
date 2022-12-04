<template>
    <div class="stringrun">  
       <p id="demo1">FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</p>
    </div>
</template>

<script>



export default {
    name: 'StringRunDown',
    mounted () {
        let el = document.getElementById('demo1');
        let text = el.innerHTML;
        setInterval (function() {
            text = text[text.length - 1] + text.substring(0, text.length - 1);
            el.innerHTML = text;
        },100);
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/views/home/stringrunup';
</style>