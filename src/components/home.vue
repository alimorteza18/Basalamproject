<template>
     <div class="container">
    <Header></Header>
    <tabs></tabs>
    <template  v-if="vendors.length > 0">
   <vendor v-for="vendor in vendors" :key="vendor.id" :vendor="vendor"></vendor>
   </template>
   <div class="emp" v-else> <img src="@/assets/empty-cart.svg" alt="" class="empty" />
      <span class="emptytxt">سبد خرید شما خالی است </span>
      <button class="backToHome button" @click="back">
       <a style="color:white"> بازگشت به صفحه اصلی</a>
      </button></div>
   <down></down>
  </div>
</template>
<script>
import Header from '@/components/header.vue'
import tabs from '@/components/tabs.vue'
import vendor from '@/components/vendor.vue'
import down from '@/components/down.vue'




export default {

  components: {
    Header,
    tabs,
    vendor,
    down
    

  },
    methods: {
            back() { 
                window.location.reload();
            }
        },
   computed: {
            vendors() { 
                return this.$store.state.vendors;
            },
        }
}

</script>

