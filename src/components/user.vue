<template>
    <div id="user" class="flex">
        <img  class="product-image" :src="product.image.url"/>
        <div class="contain flex txt-small space-between-dir">
            <p>{{ product.name }}</p>
            <div class="flex space-between-dir">
                <span>{{product.counter}} عدد</span>
                <div class="flex price">
                    <span class="flex">
                        {{thousandSeparator(totalDisPrice)}}
                        <img src="@/assets/img/toman.png" alt="Value" />
                    </span>
                    <del>{{thousandSeparator(totalOriginPrice)}}</del>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user",
        props: {
            product: {
                required: true,
            },
        },
        computed: {
            totalDisPrice() {
                return this.product.price * this.product.counter;
            },
            totalOriginPrice() { 
                return this.product.primaryPrice * this.product.counter;
            }
        },
        methods: {
            thousandSeparator(number) { 
                return number.toLocaleString('fa-IR');
            },
        },
    }
</script>
<style scoped>
    #user {
        padding: 16px 0px;
        border-bottom: 1px solid var(--silvergray);
    }

    .contain {
        width: 100%;
        flex-direction: column;
        padding-right: 8px;
    }

    .product-image {
        width: 82px;
        height: 82px;
        border-radius: 8px;
    }

    .price {
        margin: auto 0px 0px 0px;
        flex-direction: row-reverse;
    }

    del {
        color: var(--lightgray);
        display: inline-block;
        margin-left: 8px;
    }
</style>