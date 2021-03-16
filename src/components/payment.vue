<template>
    <div id="Payment-com">
        <Header></Header>
        <main>
            <header>
                <div class="flex primary-tag vertical-center">
                    <router-link to="/addressbasket">
                        <button class="big-btn-icon"><img src="@/assets/image/Back_Icon.svg"></button>
                    </router-link>
                    <span>پرداخت</span>
                </div>
                <section id="discount" class="relative txt-normal">اگر کد تخفیف دارید وارد کنید
                    <div>
                        <input type="text" placeholder="کد تخفیف">
                        <button id="btn-discount" class="button btn-tertiary">تایید</button>
                    </div>
                </section>
                <div id="use-account" class="flex txt-normal">
                    <input type="checkbox" id="checkbox">
                    <label class="select-checkbox" for="checkbox"></label>
                    استفاده از اعتبار
                </div>
            </header>
            <section class="payment">
                انتخاب درگاه پرداخت
                <div class="payment-gateway txt-normal">
                    <div class="flex">
                        <div class="flex relative">
                            <input checked type="radio" id="saman" name="payment">
                            <label class="select-radio pointer" for="saman"></label>
                            بانک سامان
                        </div>
                        <div class="flex relative">
                            <input type="radio" id="pasargad" name="payment">
                            <label class="select-radio pointer" for="pasargad"></label>
                            بانک پاسارگاد
                        </div>
                    </div>
                    <div>
                        <div class="flex relative">
                            <input type="radio" id="asan" name="payment">
                            <label class="select-radio pointer" for="asan"></label>
                            آسان پرداخت
                        </div>
                    </div>
                </div>
            </section>
            <Order v-for="order in orders" :key="order.id" :order="order"></Order>
        </main>
        <footer>
            <button class="button btn-primary">پرداخت</button>
        </footer>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Order from '@/components/Order.vue';
    export default {
        name: 'payment-com',
        data() {
            return {}
        },
        components: {
            Header,
            Order
        },
        computed: {
            orders() { // Display information of each booth
                return this.$store.state.vendors;
            }
        }
    }
</script>

<style scoped>
    header {
        padding: 12px 14px;
    }

    button img {
        position: relative;
        top: 3px;
    }

    span {
        position: relative;
        top: 10px;
        right: 8px;
    }

    #btn-discount {
        position: absolute;
        left: 6px;
        bottom: 3px;
        width: 68px;
    }

    #discount {
        margin-top: 32px;
        position: relative;
        display: inline-block;
    }

    #use-account {
        position: relative;
        margin: 24px 0px;
        line-height: 1.8rem;
    }

    .payment {
        padding: 16px;
        border-top: 1px solid var(--silvergray);
        border-bottom: 1px solid var(--silvergray);

    }

    .payment-gateway div {
        width: 300px;
        margin-top: 12px;
    }

    .payment-gateway div div {
        line-height: 1.2rem;
    }

    .select-radio {
        margin-left: 8px;
    }

    input[type="radio"]:checked+.select-radio {
        background-color: var(--teabery);
        border: 2px solid var(--teabery);
    }

    footer {
        padding: 11px 16px;
    }

    footer button {
        width: 100%;
        height: 48px;
        font-size: 1rem;
    }

    footer {
        box-shadow: 0px 8px 24px rgba(128, 128, 128, .24);
        background-color: white;
        position: sticky;
        bottom: 0;
    }
</style>