<template>
     <div id="footer-1">
            <div id="footer-1-right">
                <div id="continue">
                    <router-link :to="{ name: 'basket' }">ادامه خرید از {{this.thousandSeparator(getVendorsLength)}} غرفه</router-link>
                </div>
            </div>
            <div id="footer-1-left">
                <div id="af">
                    <a>مبلغ قابل پرداخت {{this.thousandSeparator(getVendorsLength)}} غرفه</a>
                </div>
                <div class="toman-f">
                    <a>{{thousandSeparator(getTotalSum)}}</a>
                    <img src='@/assets/img/toman.png'>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        name: 'footer-com',
        computed: {
            getTotalSum() { 
                return this.$store.getters.getTotalSum;
            },
            getVendorsLength() {
                return this.$store.state.vendors.length;
            }
        },
        methods: {
            thousandSeparator(number) {
                return number.toLocaleString('fa-IR');
            },
            route() { 
                if (this.$router.history.current.path == '/') {
                    this.$router.push('AddressBasket');
                } else {
                    this.$router.push('Payment');
                }
            }
        }
    }
</script>