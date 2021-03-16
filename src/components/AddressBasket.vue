<template>
    <div id="Address-basket" class="flex container">
        <Header></Header>
        <main>
            <header class="flex">
                <div class="flex primary-tag vertical-center">
                    <router-link to="/">
                        <button class="big-btn-icon"><img class="relative" src="@/assets/image/Back_Icon.svg"></button>
                    </router-link>
                    <span class="relative">آدرس ارسال</span>
                </div>
                <button @click="addAddress" class="button btn-outline">+ آدرس جدید</button>
            </header>
            <Address v-for="customer in customers" :key="customer.id" :customer="customer"></Address>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import Address from '@/components/Address.vue';
    export default {
        name: 'address-basket',
        data: () => {
            return {
                addressCounter: 2,
            }
        },
        components: {
            Header,
            Address,
            Footer
        },
        computed: {
            customers() { // Display user information
                return this.$store.state.customers;
            }
        },
        methods: {
            addAddress() { // Add new address
                let obj = {
                    id: this.addressCounter++,
                    name: "امیرعلی کوچولو",
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