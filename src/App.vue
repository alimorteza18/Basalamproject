<template>
  <div id="app">
    <transition enter-active-class="animated  slideInRight">
     <router-view></router-view>
    </transition>
   
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "App",
    async created() { // View general shopping cart information
      const {
        data
      } = await axios.get('https://minimal-cart.herokuapp.com/cart');
      return this.$store.dispatch('setData', data);
    },
  };
</script>

<style>
  @import url("./assets/style.css");
  @import url("./assets/animate.css");
</style>