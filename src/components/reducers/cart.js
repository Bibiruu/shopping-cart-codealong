import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [] // when adding an item to the cart or when you click on the plus icon
  },
  reducers: {}
})