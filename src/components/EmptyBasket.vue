<template>
    <div id="Empty-basket" class="flex horizental-center vertical-center">
        <img src="@/assets/image/Empty_Basket.svg" alt="Empty Basket illustration">
        <p style="font-size: 2rem">!Ooops</p>
        <p class="primary-tag">سبد خرید شما خالی می باشد.</p>
        <button @click="reloadPage" class="button btn-primary">صفحه اصلی</button>
    </div>
</template>

<script>
    export default {
        name: 'empty-basket',
        methods: {
            reloadPage() { // Reload this Page
                window.location.reload();
            }
        }
    }
</script>

<style scoped>
    #Empty-basket {
        height: 400px;
        padding: 32px 72px;
        flex-direction: column;
    }

    p {
        margin-top: 16px;
        text-align: center;
    }

    button {
        margin-top: 16px;
    }
</style>