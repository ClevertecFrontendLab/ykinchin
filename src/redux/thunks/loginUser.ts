import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { replace } from 'redux-first-history';

import { PATHS } from '@constants/PATHS';
import { REQUEST_URL } from '@constants/requestUrl';
import { setAuth } from '@redux/slices/authSlice';
import { setIsLoading } from '@redux/slices/loaderSlice';

interface ILoginData {
    email: string;
    password?: string;
    rememberCheck: boolean;
}

export const login = createAsyncThunk('auth/login', async (data: ILoginData, thunkAPI) => {
    try {
        thunkAPI.dispatch(setIsLoading(true));
        const result = await axios.post(
            REQUEST_URL.login,
            {
                email: data.email,
                password: data.password,
            },
            {
                withCredentials: true,
            },
        );
        thunkAPI.dispatch(
            setAuth({
                accessToken: result.data.accessToken,
                remeberCheck: data.rememberCheck,
            }),
        );
        thunkAPI.dispatch(replace(PATHS.main));
    } catch (e) {
        thunkAPI.dispatch(replace(PATHS.logInError));
        return thunkAPI.rejectWithValue('error');
    } finally {
        thunkAPI.dispatch(setIsLoading(false));
    }
});
