<template>
    <div id="Navigation-com" class="flex">
        <a href="#" class="primary-link link-active">سبد خرید</a>
        <a href="#" class="primary-link link-inactive">لیست خرید بعدی</a>
    </div>
</template>

<script>
    export default {
        name: 'navigation-com'
    }
</script>

<style scoped>
    #Navigation-com {
        width: 100%;
    }

    .link-active {
        color: var(--teabery);
        border-bottom: 2px solid var(--teabery);
    }

    .link-inactive {
        border-bottom: 2px solid var(--lightergray);
        font-weight: 400;
    }
</style>