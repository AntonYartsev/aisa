<template>
  <div>
    <h1>Cart</h1>
    <div v-if="cart.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <ul v-for="item in cart" :key="item.id">
        <li>
          {{ item.id }}) Size: {{ item.size?.name }} | Drink count: {{ item.drinkSet?.count }} ({{ item.count }} items)
          <button @click="cartStore.increaseCount(item.id!)">+</button>
          <button @click="cartStore.decreaseCount(item.id!)">-</button>
          <button @click="cartStore.deleteFromCart(item.id!)">Delete</button>
          </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useCartStore } from '@/stores/cart';
  import { storeToRefs } from 'pinia';

  const cartStore = useCartStore();
  const { cart } = storeToRefs(cartStore);
</script>

<style scoped>

</style>
