import {
  configureStore
} from '@reduxjs/toolkit';

import cartData from "./modules/cart/reducer";


const store = configureStore({
  reducer: {
    cart: cartData
  }
})
export default store;