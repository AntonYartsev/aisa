import type { drinkSet } from './drinkSet'
import type { machineSize } from './machineSize'

export interface config {
  availableSizes: machineSize[]
  availableDrinkSets: drinkSet[]
}
