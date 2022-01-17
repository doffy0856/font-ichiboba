<template>
  <div id="app">

    <div v-if="$route.meta.header != 1" >
      <Header />
    </div>

 
      <router-view/>  


    <div v-if="$route.meta.header != 1">
      <Footer />
    </div>
  
   
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'

// import Home from '@/views/Home'


export default {
    name: "app",
    data() {
      return {
       
      }
    },
    components: {
      Header,
      Footer
      // Home
    },

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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
