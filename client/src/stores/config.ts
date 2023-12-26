import { CofeeMachine } from '@/types/coffeeMachine';
import type { config } from '@/types/config';
import type { drinkSet } from '@/types/drinkSet'
import type { machineSize } from '@/types/machineSize'
import axios from 'axios';
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useConfigStore = defineStore('config', () => {
  const currentMachineConfig = ref({} as CofeeMachine)
  const sizes = ref(<machineSize[]>[])
  const sets = ref(<drinkSet[]>[])

  const getConfigs = async () => {
    const { data } = await axios.get<config>('http://localhost:3000/configs');
    sizes.value = data.availableSizes;
    sets.value = data.availableDrinkSets;
  };

  getConfigs();

  return { currentMachineConfig, sizes, sets, getConfigs };
},{
  persist: true
});
