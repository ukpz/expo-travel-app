import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dimension: {
        width: 0,
        height: 0,
    }
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setDimensions: (state, action) => {
            state.dimension.width = action.payload.width;
            state.dimension.height = action.payload.height;
        },
    },
});

export const { setDimensions } = appSlice.actions;
export default appSlice.reducer;
