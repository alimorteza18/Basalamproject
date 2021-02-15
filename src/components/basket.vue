<template>
    <div id="Address-basket" class="flex container">
        <Header></Header>
        <main>
            <header class="flex">
                <div class="flex primary-tag vertical-center">
                    <router-link to="/">
                        <button class="big-btn-icon"><img class="relative" src="@/assets/img/Back_Icon.svg"></button>
                    </router-link>
                    <span class="relative">آدرس ارسال</span>
                </div>
                <button @click="addAddress" class="button btn-outline">+ آدرس جدید</button>
            </header>
            <adress v-for="customer in customers" :key="customer.id" :customer="customer"></adress>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/header.vue';
    import adress from '@/components/adress.vue';
    import Footer from './footer.vue';
    export default {
        name: 'basket',
        data: () => {
            return {
                addressCounter: 2,
            }
        },
        components: {
            Header,
            adress,
             Footer
        },
        computed: {
            customers() {
                return this.$store.state.customers;
            }
        },
        methods: {
            addAddress() { 
                let obj = {
                    id: this.addressCounter++,
                    name: "مهدی خدادادی",
                    selected: false,
                    address: "قم، پردیسان، خیابان دانشگاه، بعد از میدان علوم، روبروی پایانه، ساختمان شرکت توسعه و تدبیر جوامع باسلام"
                }
                this.customers.push(obj);
            },
        }
    }
</script>

<style scoped>
    header {
        padding: 12px 14px;
        justify-content: space-between;
    }

    button img {
        top: 3px;
    }

    span {
        top: 10px;
        right: 8px;
    }

    main {
        height: 100%;
    }
</style>