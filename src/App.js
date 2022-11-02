/* eslint-disable import/no-duplicates */
import React from 'react'
import { Provider } from 'react-redux' // Provider activation
import { Products } from 'components/Products'
import { Cart } from 'components/Cart'
import { configureStore, combineReducers } from '@reduxjs/toolkit' // Store activation w/ provider + all your reducers combined

import { cart } from 'reducers/cart' // reducers to be imported
import { products } from 'reducers/products'
// * Provider * This will wrap everything in our app.

const reducer = combineReducers({ // creating a reducers then combining these.
  cart: cart.reducer,
  products: products.reducer
})

const store = configureStore({ reducer }) // new store created + combining these

export const App = () => (
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>

)
