import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authData: []
};


const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {
            getAuth: (state, action) => {
                state.authData = action.payload
            },
        },
    },
);

export const { getAuth } = authSlice.actions;
export default authSlice.reducer;