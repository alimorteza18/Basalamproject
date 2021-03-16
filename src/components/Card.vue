<template>
    <div id="Card-com">
        <div class="flex">
            <img class="product-image" :src="card.image.url" @error="defaultPicture" />
            <div class="flex txt-small card-info">
                <div class="flex space-between-dir">
                    <p class="long-text">{{ card.name }}</p>
                    <span class="error" v-if="card.counter == card.stock">آخرین موجودی</span>
                </div>
                <div class="flex price">
                    <span class="flex">
                        {{thousandSeparator(totalDisPrice)}}
                        <img src="@/assets/image/Toman.svg" alt="Value" />
                    </span>
                    <del>{{thousandSeparator(totalOriginPrice)}}</del>
                </div>
            </div>
        </div>
        <div class="flex space-between-dir action">
            <section class="flex counter">
                <div class="flex space-between-dir">
                    <button @mousedown="looper(true)" @mouseup="stopTimer" class="btn-icon dec">
                        <img src="@/assets/image/Decrement.svg" alt="Decrement icon" />
                    </button>
                    <input type="tel" class="txt-small input" min="0" max="99" :value="this.card.counter" />
                    <button @mousedown="looper(false)" @mouseup="stopTimer" class="btn-icon inc">
                        <img src="@/assets/image/Increment.svg" alt="Increment" />
                    </button>
                </div>
                <button @click="removeProduct" class="btn-icon btn-trash">
                    <img src="@/assets/image/Trash_Icon.svg" alt="" />
                </button>
            </section>
            <a href="#" class="txt-tiny">
                <span class="dotted-link">ذخیره در لیست خرید بعدی </span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card-com",
        data() {
            return {}
        },
        props: {
            card: {
                required: true,
            },
            boothindex: {
                required: true
            }
        },
        computed: {
            totalDisPrice() { // The method of displaying the sum of each product
                return this.card.price * this.card.counter;
            },
            totalOriginPrice() { // The method of displaying the sum of each product
                return this.card.primaryPrice * this.card.counter;
            }
        },
        methods: {
            defaultPicture() { // Method for the default photo
                this.src = 'https://s17.picofile.com/file/8424599468/Without_Picture.png';
            },
            thousandSeparator(number) { // Method for displaying Persian numbers
                return number.toLocaleString('fa-IR');
            },
            removeProduct() { // Remove any product from the cart
                return this.$store.dispatch('removeProduct', this.card);
            },
            looper(type) { // Load function add product
                let args = [type, this.card.id]
                this.$store.dispatch('crement', args);
                this.loopTimer(type);
            },
            loopTimer(type) { // Loop timer add any product
                if (this.$store.state.sum < 500) {
                    this.timer = setTimeout(() => {
                        this.looper(type);
                    }, 300);
                } else {
                    this.timer = setTimeout(() => {
                        this.looper(type);
                    }, 30);
                }
            },
            stopTimer() { // Stop timer loop Add any product
                clearTimeout(this.timer);
                this.$store.state.sum = 0;
            }
        },
    }
</script>
<style scoped>
    #Card-com {
        padding: 16px;
        border-bottom: 1px solid var(--silvergray);
    }

    .action {
        padding: 16px 0px 0px 0px;
    }

    .card-info {
        width: 100%;
        flex-direction: column;
        padding: 0px 8px 0px 0px;
    }
    .error {
        color: var(--teabery);
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

    input[type="tel"] {
        width: 28px;
        height: 26px;
        border: 1px solid var(--silvergray);
        border-radius: 6px;
        padding: 2px 6px;
        text-align: center;
    }

    .dotted-link {
        border-bottom: 1px dotted;
        font-weight: 700;
        color: var(--gray);
    }

    .product-image {
        width: 82px;
        height: 82px;
        border-radius: 8px;
    }

    .counter>div {
        width: 83px;
    }

    .btn-trash {
        margin: 0px 16px 0px 0px;
    }

</style>