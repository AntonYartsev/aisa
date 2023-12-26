import type { drinkSet } from './drinkSet'
import type { machineSize } from './machineSize'

export class CofeeMachine {
  public id: number | undefined
  public size: machineSize | undefined
  public drinkSet: drinkSet | undefined
  public count: number = 1

  constructor(size: machineSize, drinkSet: drinkSet, count: number = 1) {
    this.size = size
    this.drinkSet = drinkSet
    this.count = count
  }
}
