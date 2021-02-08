<template>
  <div class="shoping">
    <div class="shoping-top">
      <div class="jambon-img">
        <img :src="item.img" />
      </div>
      <div class="jambon-title">
        <a>{{ item.shopName }}</a>
      </div>
      <div class="price-number">
        <span style="text-decoration: line-through; color: #9d9d9d">
          {{ item.price }}
        </span>
        <span>{{ item.price2 }}</span>
      </div>
      <div class="toman">
        <img src="@/assets/img/toman.png" />
      </div>
    </div>
    <div class="shoping-bottom">
      <button class="minus-btn" type="button" @mousedown="decrement" @mouseup="cleartimer">
        <img src="@/assets/img/Vector1.png" />
      </button>
      <input type="text" size="25" :value="item.counter" class="count" />
      <button type="button" class="plus-btn" @mousedown="increment" @mouseup="cleartimer">
        <img src="@/assets/img/Vector3.png" />
      </button>
      <button @click="remove" class="remove-btn" type="button">
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
   data() {
    return {
      speed: 150,
      setTime: null,
    };
  },
  name: "Product",
  computed: {

  },

  props: {
    item: {
      type: Object,
    },
  },
   methods: {
    remove() {
      this.$store.dispatch("removeProduct", this.item.id);
    },
    increment() {
      this.$store.dispatch('increment', this.item.id);
      this.timer(this.increment);
    },
    decrement() {
      this.$store.dispatch('decrement', this.item.id);
      this.timer(this.decrement);
    },
    timer(speed) {
      this.setTime = setTimeout(() => {
        speed(), (this.speed -= 2);
      }, this.speed);
    },
    cleartimer() {
      clearTimeout(this.setTime);
      this.speed = 150;
    },
  },
 
  }

</script>