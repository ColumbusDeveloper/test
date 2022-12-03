<template>

    <div
    class="home__what"
    @click="$router.push({name:'page'})"
    >
      <p>what?</p>
    </div>

</template>

<script>



export default {
    name: 'HomeNavRight', 
    
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/views/home/homenavright';
</style>