<template>
  <div class="shoping">
    <div class="shoping-top">
      <div class="jambon-img">
        <img :src="card.image.url" class="product-image" />
      </div>
      <div class="jambon-title">
        <a>{{ card.name }}</a>
      </div>
      <div class="price-number">
        <span style="text-decoration: line-through; color: #9d9d9d">
          {{thousandSeparator(totalDisPrice)}}
        </span>
        <span>{{thousandSeparator(totalOriginPrice)}}</span>
      </div>
      <div class="toman">
        <img src="@/assets/img/toman.png" />
      </div>
    </div>
    <div class="shoping-bottom">
      <button class="minus-btn" type="button"  @mousedown="looper(true)" @mouseup="stopTimer">
        <img src="@/assets/img/Vector1.png" />
      </button>
      <input type="tel" size="25" :value="this.card.counter" min="0" max="99" class="count" />
      <button type="button" class="plus-btn" @mousedown="looper(false)" @mouseup="stopTimer">
        <img src="@/assets/img/Vector3.png" />
      </button>
      <button class="remove-btn" type="button" @click="removeProduct">
        <img src="@/assets/img/remove.png" />
      </button>
      <div class="txt-2">
        <a>ذخیره در لیست خرید بعدی</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
        name: "card-com",
        data() {
            return {
              speed: 200,
               setTime: null,
            }
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
            totalDisPrice() {
                return this.card.price * this.card.counter;
            },
            totalOriginPrice() {
                return this.card.primaryPrice * this.card.counter;
            }
        },
        methods: {
            thousandSeparator(number) { 
                return number.toLocaleString('fa-IR');
            },
             removeProduct() { 
                return this.$store.dispatch('removeProduct', this.card);
            },
            looper(type) {
                let args = [type, this.card.id]
                this.$store.dispatch('crement', args);
                this.loopTimer(type);
            },
            loopTimer(type) { 
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
            stopTimer() { 
                clearTimeout(this.timer);
                this.$store.state.sum = 0;
            }

        },
    }

</script>
<style >
.product-image {
        width: 82px;
        height: 82px;
        border-radius: 8px;
}
</style>