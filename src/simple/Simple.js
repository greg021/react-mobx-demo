import React from "react"
import { observer } from "mobx-react-lite"

import { store } from "./Simple.store"
import { Negative } from "./Negative"

export const Simple = observer(() => {
  const { count, onDecrement, onIncrement } = store

  return (
    <>
      <div>Count: {count}</div>
      <Negative />
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </>
  )
})
