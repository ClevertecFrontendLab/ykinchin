import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { confirmEmail } from '@redux/thunks/confirmEmail';

export interface userState {
    email: string;
    password: string | null;
    isError: boolean;
}

const initialState: Partial<userState> = {
    email: '',
    password: null,
    isError: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (
            state,
            action: PayloadAction<{
                email: string;
                password?: string;
            }>,
        ) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(confirmEmail.rejected, (state) => {
            state.isError = true;
        });
        builder.addCase(confirmEmail.fulfilled, (state) => {
            state.isError = false;
        });
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
