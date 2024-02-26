import { RootState } from '@redux/configure-store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    isAuth: boolean;
    // email: string | null;
    // password?: string | null;
    accessToken?: string | null;
}

const initialState: AuthState = {
    isAuth: false,
    // email: null,
    // password: null,
    accessToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAuth: (
            state,
            action: PayloadAction<{
                // email: string;
                accessToken?: string;
                remeberCheck?: boolean;
                password?: string;
            }>,
        ) => {
            // state.email = action.payload.email;
            state.accessToken = action.payload.accessToken;
            // state.password = action.payload.password;
            state.isAuth = true;
            if (action.payload.remeberCheck) {
                localStorage.setItem(
                    'user',
                    JSON.stringify({
                        token: action.payload.accessToken,
                    }),
                );
            }
            //  else {
            //     sessionStorage.setItem(
            //         'user',
            //         JSON.stringify({
            //             token: action.payload.accessToken,
            //         }),
            //     );
            // }
        },
        logout: (state) => {
            localStorage.clear();
            // state.email = null;
            state.accessToken = null;
            state.isAuth = false;
        },
    },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
