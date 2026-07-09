import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/auth/authSlice';
import productReducer from '../reducers/products/productSlice';
import cartReducer from '../reducers/cart/cartSlice';
import orderReducer from '../reducers/orders/orderSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        cart: cartReducer,
        order: orderReducer
    }
}); 