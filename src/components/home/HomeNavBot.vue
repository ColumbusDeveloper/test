<template>

    <div
    class="home__who"
    @click="$router.push({name:'page'})"
    >
      <p>who?</p>
    </div>

</template>

<script>



export default {
    name: 'HomeNavBot', 
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/views/home/homenavbot';
</style>