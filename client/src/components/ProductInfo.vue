<template>
  <div>
    <h2 v-if="product">
      This is page for product #{{ product._id }}: {{ product.item }}
    </h2>
    <h2 v-else>Product not found</h2>
    <div>
      <button @click="addToCart(product)" class="btn">Add to cart</button>
    </div>
  </div>
</template>
<script>
// import products from "../data/products.js";
import axios from "axios";

export default {
  data: function () {
    return {
      product: [],
    };
  },

  mounted: async function () {
    const { data } = await axios.get(
      `http://localhost:3000/item/${this.$route.params.id}`
    );

    this.product[0] = data;

    this.product = this.product.find((item) => {
      return item._id === this.$route.params.id;
    });
  },

  methods: {
    addToCart: function (product) {
      this.$store.commit("addToCart", product);
    },
  },
};
</script>
