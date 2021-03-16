<template>
    <div id="Order-com">
        <section id="category" class="txt-normal">
            از غرفه: <span class="primary-tag">{{order.name}}</span>
        </section>
        <Product v-for="product in order.products" :key="product.id" :product="product"></Product>
    </div>
</template>

<script>
    import Product from '@/components/Product.vue'
    export default {
        name: 'order-com',
        data() {
            return {

            }
        },
        components: {
            Product
        },
        props: {
            order: {
                required: true
            }
        },
    }
</script>

<style scoped>
    #Order-com {
        padding: 0px 16px;
    }

    #category {
        padding: 20px 0px 16px 0px;
    }
</style>