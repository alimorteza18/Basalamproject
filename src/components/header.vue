<template>
    <div id="Header-com" class="flex wrap">
        <div class="flex space-between-dir">
            <section class="flex pointer">
                <img src="@/assets/image/Basalam_Logo.svg" alt="Basalam Logo">
                <img src="@/assets/image/List_Menu.svg" alt="List Menu">
            </section>
            <section class="flex">
                <button class="button btn-secondary">فروش در باسلام</button>
                <div id="store" class="pointer relative">
                    <div id="shop-notification" class="flex vertical-center horizental-center">{{numberOfProducts}}</div>
                    <img src="@/assets/image/Card_Icon.svg" alt="Store icon">
                </div>
            </section>
        </div>
        <form class="relative" action="">
            <input type="search" name="Search" placeholder="جستجو در صدها هزار محصول خانگی و محلی ...">
            <button id="btn-search"><img src="@/assets/image/Search_Icon.svg" alt=""></button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'header-com',
        computed: {
            numberOfProducts() { //Product notification in the header section
                return this.$store.state.number;
            }
        }
    }
</script>

<style>
    #Header-com {
        position: sticky;
        left: 0;
        top: 0;
        z-index: 10;
        justify-content: center;
        background-color: white;
        padding-bottom: 8px;
        box-shadow: 0px -8px 24px rgba(128, 128, 128, .24);
    }

    #Header-com>div:first-child {
        width: 100%;
        padding: 8px 14px;
    }

    #store {
        padding: 6px 8px;
    }

    input[type="search"] {
        margin: 16px 0px 0px 0px;
    }

    #btn-search {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 4px;
        top: 20px;
        background: unset;
    }

    #shop-notification {
        width: 16px;
        height: 16px;
        font-size: .7rem;
        color:white;
        background-color: #DF3856;
        border-radius: 50%;
        position: absolute;
        right: 20px;
        top:2px;
    }
</style>