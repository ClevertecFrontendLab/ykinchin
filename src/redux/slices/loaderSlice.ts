import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LoaderState {
    showLoader: boolean;
}

const initialState: LoaderState = {
    showLoader: false,
};

const loaderSlice = createSlice({
    name: 'loader',
    initialState: initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.showLoader = action.payload;
        },
    },
});

export const { setIsLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
