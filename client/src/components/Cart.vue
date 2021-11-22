<template>
  <div class="cart">
    <h1>Cart</h1>
    <div class="cart-item" :key="index" v-for="(item, index) in cart">
      <span>{{ index + 1 }}</span>
      <span class="product-item"> Product: </span>
      <span>{{ item.item }}</span>
      <span class="price">Price: </span>
      <span>{{ (item.price * item.amount).toFixed(2) }}</span>
      <button class="dec" @click="decAmount(item._id)">-</button>
      <span>amount: {{ item.amount }}</span>
      <button class="inc" @click="incAmount(item._id)">+</button>
    </div>
    <p>
      <span class="total-price">Total Price:</span>
      <span>{{ getTotalPrice }}</span>
    </p>
    <button @click="makeOrder">Make order</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    makeOrder: async function () {
      try {
        const newOrder = {
          items: this.cart.map((item) => item.item),
          totalPrice: this.getTotalPrice,
        };

        const { data: order } = await axios.post(
          "http://localhost:3000/orders",
          newOrder
        );

        this.$store.commit("addToOrder", order);
        this.$store.commit("clearCart");
        this.$store.commit("toggleCart");
      } catch (err) {
        console.log(err);
      }
    },

    incAmount: function (id) {
      this.$store.commit("incAmount", id);
    },

    decAmount: function (id) {
      this.$store.commit("decAmount", id);
    },
  },

  computed: {
    cart: function () {
      return this.$store.getters.getCart;
    },

    getTotalPrice: function () {
      return this.$store.getters.getTotalPrice;
    },
  },
};
</script>

<style scoped>
.cart {
  max-width: 600px;
  margin: 20px 0 20px 50px;
  padding: 10px;
  border: 1px solid gray;
}

.product-item,
.price {
  font-weight: 700;
}

.cart-item {
  margin-bottom: 15px;
}

.total-price {
  font-weight: 700;
}
</style>