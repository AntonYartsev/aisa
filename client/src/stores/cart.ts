import { CofeeMachine } from '@/types/coffeeMachine';
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cart = ref(<CofeeMachine[]>[])

  function addToCart(item: CofeeMachine) {
    // set new id
    item.id = cart.value.length + 1;
    item.count = 1;
    cart.value.push(item);
  }

  function deleteFromCart(id: number) {
    cart.value = cart.value.filter((item) => item.id !== id);
  }

  function increaseCount(id: number) {
    const item = cart.value.find((item) => item.id === id);
    if (item) {
      item.count += 1;
    }
  }

  function decreaseCount(id: number) {
    const item = cart.value.find((item) => item.id === id);
    if (item) {
      item.count -= 1;
    }
  }

  return { cart, addToCart, deleteFromCart, increaseCount, decreaseCount };
},{
  persist: true
});
