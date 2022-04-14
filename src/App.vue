<template>
  <div id="nav">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {
  },
  created:function(){
    this.$router.push('/')
  },
};
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.2rem;
}
</style>
