import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartData: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: (state, action) => { }
});


export default cartSlice.reducer