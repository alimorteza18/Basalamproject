<template>
    <div id="Order-com">
        <section id="category" class="txt-normal">
            از غرفه: <span class="primary-tag">{{order.name}}</span>
        </section>
        <user v-for="product in order.products" :key="product.id" :product="product"></user>
    </div>
</template>

<script>
    import user from '@/components/user.vue'
    export default {
        name: 'Order',
        data() {
            return {

            }
        },
        components: {
            user
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