<template>
     <div id="footer-1">
            <div id="footer-1-right">
                <div id="continue">
                    <router-link :to="{ name: 'payment' }">ادامه فرآیند خرید</router-link>
                </div>
            </div>
            <div id="footer-1-left">
                <div id="af">
                    <a>مبلغ قابل پرداخت </a>
                </div>
                <div class="toman-f">
                    <a>61,500</a>
                    <img src='@/assets/img/toman.png'>
                </div>
            </div>
        </div>
</template>