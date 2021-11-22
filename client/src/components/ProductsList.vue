<template>
  <div class="products">
    <form class="searchbar">
      <input placeholder="Пошук" v-model="search" />
      <input type="submit" class="btn" />
      <template v-if="cart.length">
        <button @click="toggleCart">
          <b>{{ !isOpen ? "Open cart" : "Close cart" }}</b>
        </button>
      </template>
    </form>
    <div class="product" v-for="item in filteredItems" v-bind:key="item._id">
      <div class="product-image">
        <img v-bind:src="item.src" />
      </div>
      <div>
        <h4 class="product-title">
          <router-link v-bind:to="'/product/' + item._id">
            {{ item.item }}
          </router-link>
        </h4>
        <label>{{ item.price }}</label>
        <button class="btn" @click="addToCart(item)">Add to cart</button>
      </div>
    </div>
    <template v-if="isOpen">
      <Cart />
    </template>
    <template v-if="orders.length">
      <div class="orders">
        <b>Orders</b>
        <div class="order" :key="order._id" v-for="(order, index) in orders">
          <p>Order: {{ index + 1 }}</p>
          <p :key="index" v-for="(item, index) in order.items">
            {{ item }}
          </p>
          <b>Order Price: {{ order.totalPrice }}</b>
          <button @click="deleteOrder(order._id)">Delete Order</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
// import products from "../data/products.js";
import Cart from "./Cart.vue";
import axios from "axios";

export default {
  components: {
    Cart,
  },

  data: function () {
    return {
      items: [],
      search: "",
      searchResult: [],
    };
  },

  mounted: async function () {
    // this.items = products;

    try {
      const { data: items } = await axios.get("http://localhost:3000/items");
      const { data: orders } = await axios.get("http://localhost:3000/orders");

      this.items = items;
      this.$store.commit("setOrders", orders);
    } catch (err) {
      console.log(err);
    }
  },

  methods: {
    addToCart: function (product) {
      this.$store.commit("addToCart", { ...product, amount: 1 });
    },

    deleteOrder: async function (id) {
      try {
        await axios.delete(`http://localhost:3000/order/${id}`);

        this.$store.commit("deleteOrder", id);
      } catch (error) {
        console.log(error);
      }
    },

    toggleCart: function () {
      this.$store.commit("toggleCart");
    },
  },

  computed: {
    filteredItems: function () {
      // console.log(this);
      if (!this.search) {
        return this.items;
      }

      return this.items.filter((element) => {
        return element.item.toUpperCase().includes(this.search.toUpperCase());
      });
    },

    cart: function () {
      return this.$store.getters.getCart;
    },

    orders: function () {
      return this.$store.getters.getOrders;
    },

    isOpen: function () {
      return this.$store.getters.getToggleCart;
    },
  },
};
</script>
