import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderData: []
};



const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        loadOrder: (state, action) => { },
    },
});


export default orderSlice.reducer;