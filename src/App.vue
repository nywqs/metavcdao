<template>
  <div id="app">
    <common-header />
    <router-view></router-view>
    <common-footer />
  </div>
</template>

<script>
import CommonFooter from './pages/components/foot/foot.vue'
import CommonHeader from './pages/components/header/header.vue'
export default {
  components: { CommonHeader, CommonFooter },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
::-webkit-scrollbar  
{  
    width: 0px;  
}
a{
  text-decoration: none;
}
</style>