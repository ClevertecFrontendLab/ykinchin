import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { push } from 'redux-first-history';

import { PATHS } from '@constants/PATHS';
import { REQUEST_URL } from '@constants/requestUrl';
import { setIsLoading } from '@redux/slices/loaderSlice';

export const checkEmail = createAsyncThunk('auth/checkEmail', async (email: string, thunkAPI) => {
    try {
        thunkAPI.dispatch(setIsLoading(true));
        await axios.post(
            REQUEST_URL.checkEmail,
            { email: email },
            {
                withCredentials: true,
            },
        );

        thunkAPI.dispatch(push(PATHS.confirmEmail));
    } catch (e) {
        if (axios.isAxiosError(e)) {
            if (e.response?.status === 404 && e.response.data.message === 'Email не найден') {
                thunkAPI.dispatch(push(PATHS.emailCheckExistError));
            } else {
                thunkAPI.dispatch(push(PATHS.emailCheckError));
            }
            return thunkAPI.rejectWithValue(e.response?.data.message || 'error');
        }
        return thunkAPI.rejectWithValue('error');
    } finally {
        thunkAPI.dispatch(setIsLoading(false));
    }
});
