<template>
  <div id="container">
    <Header></Header>
    <tabs></tabs>
    <template v-if="mydata.length">
   <vendor v-for="item in mydata" :key="item.id" :vendor="item"></vendor>
   </template>
   <div v-else>سبد خرید شما خالی است</div>
   <down></down>
  </div>
</template>

<script>
import Header from './components/header.vue'
import tabs from './components/tabs.vue'
import vendor from '@/components/vendor.vue'
import down from '@/components/down.vue'




export default {
  name: 'App',
   computed: {
    mydata: function () {
      return this.$store.getters.getCart;
    },
     
  },
  components: {
    Header,
    tabs,
    vendor,
    down
    

  }
}

</script>

<style>
 @import './assets/styles.css';
 @import './assets/Fonts/css/fontiran.css';
</style>
