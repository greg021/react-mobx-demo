import { makeAutoObservable } from "mobx"

class Store {
  count = 0

  constructor() {
    makeAutoObservable(this)
  }

  get isNegative() {
    return this.count < 0 ? "Yes" : "No"
  }

  onIncrement = () => {
    this.count += 1
  }

  onDecrement = () => {
    this.count -= 1
  }
}

export const store = new Store()
