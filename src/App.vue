<template>
  <div id="app">
    <MyTitle></MyTitle>
    <router-view/>
  </div>
</template>
<script>
import MyTitle from './components/MyTitle.vue';
export default ({
  components:{
    MyTitle
  }
})
</script>
<style>
*{
  margin: 0;
  padding: 0;
}

ul,li{
  list-style: none;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

</style>
