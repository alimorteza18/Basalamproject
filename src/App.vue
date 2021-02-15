<template>
  <router-view></router-view>
</template>

<script>

import axios from 'axios';
export default {
  name: 'App',
   async created() {
      const {
        data
      } = await axios.get('https://minimal-cart.herokuapp.com/cart');
      return this.$store.dispatch('setData', data);
    },
    
}

</script>

<style>
 @import './assets/styles.css';
 @import './assets/Fonts/css/fontiran.css';
</style>
