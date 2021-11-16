<template>
  <div class="cart">
    <h1>Cart</h1>
    <div class="cart-item" :key="index" v-for="(item, index) in products">
      <span>{{ index + 1 }}</span>
      <span class="product-item"> Product: </span>
      <span>{{ item.item }}</span>
      <span class="price">Price: </span>
      <span>{{ item.price }}</span>
    </div>
    <p>
      <span class="total-price">Total Price:</span>
      <span>{{ getTotalPrice(products).toFixed(1) }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    products: null,
  },
  methods: {
    getTotalPrice: function (products) {
      return products.reduce((acc, item) => acc + item.price, 0);
    },
  },
};
</script>

<style scoped>
.cart {
  max-width: 600px;
  margin-top: 20px;
  margin-left: 50px;
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