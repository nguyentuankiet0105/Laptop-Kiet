import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Reducer/productReducer';
import gmailReducer from '../Reducer/gmailReducer';
import cartReducer from '../Reducer/cartReducer';

export default configureStore({
  reducer: {
    product: productReducer,
    gmail: gmailReducer,
    cart: cartReducer,
  },
});
