<template>
    <div id="Basket">
        <Header></Header>
        <template v-if="vendors.length > 0">
            <div id="layout" class="flex space-between-dir">
                <div>
                    <Navigation></Navigation>
                    <Booth v-for="vendor in vendors" :key="vendor.id" :vendor="vendor"></Booth>
                </div>
                <Footer></Footer>
            </div>
        </template>
        <template v-else>
            <EmptyBasket></EmptyBasket>
        </template>
    </div>
</template>
<script>
    import Header from '@/components/Header.vue';
    import Navigation from '@/components/Navigation.vue';
    import Booth from '@/components/Booth.vue';
    import EmptyBasket from '@/components/EmptyBasket.vue';
    import Footer from '@/components/Footer.vue';
    
    export default {
        name: "basket",
        components: {
            Header,
            Navigation,
            Booth,
            EmptyBasket,
            Footer
        },
        computed: {
            vendors() { // Display information of each booth
                return this.$store.state.vendors;
            },
        }
    };
</script>

<style scoped>
    #layout {
        height: 100vh;
        flex-direction: column;
    }
</style>