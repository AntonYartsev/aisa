<template>
  <div class="container">
    <p>
      <label v-if="currentMachineConfig.size">{{ currentMachineConfig.size.name }} cofee machine </label>
      <label v-if="currentMachineConfig.drinkSet && currentMachineConfig.size"> with {{ currentMachineConfig.drinkSet.count }} drinks</label>
      </p>
      <p>
      <img
        v-if="currentMachineConfig.size?.cover"
        class="cover"
        :src="currentMachineConfig.size?.cover"
      />
    </p>
    <label>Machine size:</label>
    <p>
      <select v-model="currentMachineConfig.size">
        <option v-for="size in sizes" :key="size.id" :value="size">{{ size.name }}</option>
      </select>
    </p>
    <label>Drink count:</label>
    <p>
      <select v-model="currentMachineConfig.drinkSet">
        <option v-for="set in sets" :key="set.id" :value="set">{{ set.count }}</option>
      </select>
    </p>
    <p>
      <button @click="addToCart(currentMachineConfig)">Add to cart</button>
      <button @click="reset()">Reset</button>
    </p>
    <p class="error">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useConfigStore } from '@/stores/config'
import { useCartStore } from '@/stores/cart'
import { CofeeMachine } from '@/types/coffeeMachine';
import { ref } from 'vue';

const configStore = useConfigStore()
const cartStore = useCartStore()

const { sizes } = storeToRefs(configStore)
const { sets } = storeToRefs(configStore)
const { currentMachineConfig } = storeToRefs(configStore)

const error = ref("")

function addToCart (currentMachineConfig: CofeeMachine) {
  if (!currentMachineConfig.size) {
    error.value = "Please select a size"
    return
  }
  if (!currentMachineConfig.drinkSet) {
    error.value = "Please select a drink set"
    return
  }
  cartStore.addToCart(currentMachineConfig)
  reset()
}
function reset () {
  error.value = ""
  currentMachineConfig.value = {} as CofeeMachine;
}
</script>

<style scoped>
.cover {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error {
  color: red;
}
</style>
