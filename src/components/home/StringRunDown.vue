<template>
    <div class="stringrun">  
       <p id="demo">FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</p>
    </div>
</template>

<script>



export default {
    name: 'StringRunDown',
    mounted () {
        let el = document.getElementById('demo');
        let text = el.innerHTML;
        setInterval (function() {
            text =  text.substring(1, text.length) + text[0];
            el.innerHTML = text;
        },100);
    }
}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/views/home/stringrundown';
</style>