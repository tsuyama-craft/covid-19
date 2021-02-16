<template>
  <div v-if="serviceworkerUzai == true">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    serviceworkerUzai: function() {
      location.reload(true);
      return true
    },
    readyToshowMainPage: function() {
      return this.kenDetails.length > 0 &&
      this.kenUtiwake.length > 0 &&
      this.kenPcr.length > 0 &&
      this.kenDead.length > 0 &&
      this.kenIryou.length > 0 &&
      this.Zenkoku.length > 0 
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
