import { createSlice,PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isAuth: boolean;
    accessToken?: string | null;
}

const initialState: AuthState = {
    isAuth: false,
    accessToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuth: (
            state,
            action: PayloadAction<{
                accessToken?: string;
                remeberCheck?: boolean;
            }>,
        ) => {
            state.accessToken = action.payload.accessToken;
            state.isAuth = true;
            if (action.payload.remeberCheck) {
                localStorage.setItem('user', JSON.stringify(action.payload.accessToken));
            }
        },
        logout: (state) => {
            localStorage.clear();
            state.accessToken = null;
            state.isAuth = false;
        },
    },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
