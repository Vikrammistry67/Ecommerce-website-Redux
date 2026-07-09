import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: []
};


const userSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers: {
            loadUser: (state, action) => { }
        },
    },
);

export default userSlice.reducer;