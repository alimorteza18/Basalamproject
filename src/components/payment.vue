<template>
    <div class="container">
        <Header></Header>
        <main>
            <header>
                <div class="flex primary-tag vertical-center">
                    <router-link to="/addressbasket">
                        <button class="big-btn-icon"><img src="@/assets/img/Back_Icon.svg"></button>
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
    import Header from '@/components/header.vue';
    import Order from '@/components/Order.vue';
    export default {
        name: 'payment',
        data() {
            return {}
        },
        components: {
            Header,
            Order
        },
        computed: {
            orders() {
                return this.$store.state.vendors;
            }
        }
    }
</script>

<style scoped>

input[type="text"] {
    padding: 8px 16px 9px 16px;
    border-radius: 8px;
    border: 1px solid var(--lightgray);
    width: 280px;
    margin-top: 8px;
}
input[type="radio"],
input[type="checkbox"] {
    display: none;
}

.select-radio {
    content: '';
    width: 20px;
    height: 20px;
    display: block;
    background-color: white;
    border-radius: 50%;
    border: 2px solid var(--lightgray);
    z-index: 1;
}

.radioSelected {
    background-color: var(--teabery);
    border: 2px solid var(--teabery);
}

.select-radio:after {
    content: '';
    width: 10px;
    height: 10px;
    display: block;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    right: 7px;
    bottom: 7px;
    opacity: 0;
    transition: .5s;
}


input[type="radio"]:checked+.select-radio:after {
    opacity: 1;
}

.select-checkbox {
    content: '';
    width: 46px;
    height: 28px;
    display: block;
    border-radius: 20px;
    background-color: var(--silvergray);
    margin-left: 8px;
    transition: .5s;
}

.select-checkbox:before {
    content: '';
    width: 24px;
    height: 24px;
    display: block;
    background-color: white;
    border-radius: 20px;
    border: 1px solid var(--lightgray);
    position: absolute;
    top: 1px;
    right: 20px;
}

input[type="checkbox"]:checked+.select-checkbox:before {
    margin-right: -19px;
    border: 1px solid white;
}

input[type="checkbox"]:checked+.select-checkbox {
    background-color: var(--teabery);
}

a {
    text-decoration: none;
}

.primary-link,
.primary-tag {
    font-size: calc(var(--font-size) - var(--mobile-ratio));
    font-weight: 600;
}

.secondary-link {
    font-size: calc(var(--font-size) - var(--mobile-ratio));
}

.primary-link {
    width: 50%;
    display: block;
    padding: 16px 0px;
    text-align: center;
}
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
    }
</style>