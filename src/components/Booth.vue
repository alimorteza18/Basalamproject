<template>
    <div id="Booth-com">
        <div class="vendor-info">
            <section id="category" class="txt-normal">
                از : <span class="primary-tag">{{vendor.name}}</span>
            </section>
            <section class="flex seller-profile">
                <img :src="vendor.logo.url" @error="defaultPicture" class="profile-picture" alt="Seller profile picture">
                <div class="txt-small">
                    {{vendor.owner}}<br>
                    <img src="@/assets/image/Location_Icon.svg" alt="Location icon"><span class="txt-tiny">از
                        {{vendor.city}}</span>
                </div>
            </section>
        </div>
        <section class="items">
            <Card v-for="card in vendor.products" :key="card.id" :card="card" :boothindex="vendor.id"></Card>
            <footer class="submit-card">
                <section class="relative">
                    <p class="caption txt-small">هورا! ارسال از این غرفه برای شما <span class="free-transform">رایگان
                            شد.</span>
                    </p>
                    <span class="progress-bar full-progress-bar">
                    </span>
                </section>
                <div class="flex discount">
                    <button v-if="discountShowBtn" class="button btn-tertiary flex"><img class="relative"
                            src="@/assets/image/Ticket_Icon.svg" alt="">ثبت کد
                        تخفیف
                        غرفه
                    </button>
                </div>
                <div class="flex result-card space-between-dir">
                    <button class="button btn-primary">ادامه خرید فقط از این غرفه</button>
                    <div class="txt-small">جمع مبلغ برای {{vendor.length}} کالا<span class="flex">
                            {{thousandSeparator(getTotalVendor)}}
                            <img src="@/assets/image/Toman.svg" alt="Value"></span></div>
                </div>
            </footer>
        </section>
    </div>
</template>

<script>
    import Card from '@/components/Card.vue';
    export default {
        name: 'booth-com',
        data() {
            return {
                discountShowBtn: this.vendor.discountbutton,
            }
        },
        components: {
            Card
        },
        props: {
            vendor: {
                required: true
            }
        },
        mounted() { // The function of adding products to each booth
            return this.$store.dispatch('totalVendor');
        },
        computed: {
            getTotalVendor() { // View the total products of each booth
                return this.$store.getters.getTotalVendor(this.vendor.id);
            },
        },
        methods: {
            thousandSeparator(number) { // Method for displaying Persian numbers
                return number.toLocaleString('fa-IR');
            },
            defaultPicture(){ // Method for the default photo
                this.src = 'https://s17.picofile.com/file/8424599468/Without_Picture.png';
            }
        }
    }
</script>

<style>
   .vendor-info {
        padding: 0px 16px;
    }

    #category {
        padding: 20px 0px 16px 0px;
    }

    .profile-picture {
        width: 40px;
        height: 40px;
        border-radius: 50px;
    }

    .seller-profile div {
        padding: 0px 8px 0px 0px;
    }

    .items {
        padding: 16px 0px;
    }

    .submit-card {
        padding: 16px 16px 0px 16px;
    }

    .submit-card>section {
        background-color: var(--silvergray);
    }

    .progress-bar {
        display: block;
        background-color: var(--lightgreen);
        width: 70%;
        height: 25px;
    }

    .full-progress-bar {
        width: 100% !important;
    }

    .free-transform {
        color: var(--darkgreen) !important;
        font-weight: 700;
    }

    .caption {
        color: var(--darkgreen);
        padding: 2px 9px 4px 0px;
        position: absolute;
    }

    .submit-card>section,
    .progress-bar,
    .caption {
        border-radius: 2px;
    }

    .btn-tertiary img {
        top: 4px;
    }

    .discount {
        margin: 16px 0px 0px 0px;
        justify-content: flex-end;
    }
</style>