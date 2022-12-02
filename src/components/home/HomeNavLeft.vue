<template>

    <div
    class="home__where"
    @click="$router.push({name:'page'})"
    >
      <p>where?</p>
    </div>

</template>

<script>



export default {
    name: 'HomeNavLeft', 
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/views/home/homenavleft';
</style>