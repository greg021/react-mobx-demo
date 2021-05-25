import React from "react"
import { observer } from "mobx-react-lite"

import { store } from "./Simple.store"

export const Negative = observer(() => {
  const { isNegative } = store

  return <div>Is negative: {isNegative}</div>
})
