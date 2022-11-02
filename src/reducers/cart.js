import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [] // when adding an item to the cart or when you click on the plus icon
  },
  reducers: {
    addItem: (state, action) => {
      // eslint-disable-next-line max-len
      const existingProduct = state.items.find((item) => item.id === action.payload.id) // find the matching to existing.

      if (existingProduct) {
        // eslint-disable-next-line max-len
        existingProduct.quantity += 1 // adding to an existing choice, action.payload is our product object with an id
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      // eslint-disable-next-line max-len
      const existingProduct = state.items.find((item) => item.id === action.payload.id) // find the matching to existing.

      if (existingProduct && existingProduct.quantity === 1) {
        // eslint-disable-next-line max-len
        state.items = state.items.filter((item) => item.id !== action.payload.id) // returning a new array of items except the payload, finding where it does NOT equal.
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    }
  }
})
