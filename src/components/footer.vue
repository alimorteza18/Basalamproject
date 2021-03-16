<template>
    <div id="Footer-com">
        <div class="flex result-card space-between-dir">
            <button class="button btn-primary" @click="route">ادامه خرید از {{this.thousandSeparator(getVendorsLength)}}
                غرفه</button>
            <div class="txt-small" id="submit-card">مبلغ قابل پرداخت {{thousandSeparator(getVendorsLength)}} غرفه<span
                    class="flex">{{thousandSeparator(getTotalSum)}}<img src="@/assets/image/Toman.svg"
                        alt="Value"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'footer-com',
        computed: {
            getTotalSum() { // Total user purchase
                return this.$store.getters.getTotalSum;
            },
            getVendorsLength() {
                return this.$store.state.vendors.length;
            }
        },
        methods: {
            thousandSeparator(number) { // Method for displaying Persian numbers
                return number.toLocaleString('fa-IR');
            },
            route() { // Routing controller on pages
                if (this.$router.history.current.path == '/') {
                    this.$router.push('AddressBasket');
                } else {
                    this.$router.push('Payment');
                }
            }
        }
    }
</script>

<style>
    .result-card {
        margin: 16px 0px 0px 0px;
    }

    .result-card span {
        justify-content: flex-end;
        font-weight: 700;
    }

    #Footer-com {
        background-color: white;
        position: sticky;
        bottom: 0;
    }

    #Footer-com>div {
        box-shadow: 0px 8px 24px rgba(128, 128, 128, .24);
        padding: 16px;
    }
</style>