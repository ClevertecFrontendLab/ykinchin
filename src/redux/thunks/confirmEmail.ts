import axios from 'axios';
import { push } from 'redux-first-history';

import { PATHS } from '@constants/PATHS';
import { REQUEST_URL } from '@constants/requestUrl';
import { setIsLoading } from '@redux/slices/loaderSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IConfirmEmailData {
    email?: string;
    code: string;
}

export const confirmEmail = createAsyncThunk(
    'auth/confirmEmail',
    async (data: IConfirmEmailData, thunkAPI) => {
        try {
            thunkAPI.dispatch(setIsLoading(true));
            const response = await axios.post(REQUEST_URL.confirmEmail, data, {
                withCredentials: true,
            });
            thunkAPI.dispatch(push(PATHS.changePassword));
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return thunkAPI.rejectWithValue(e.response?.data.message || 'error');
            }
        } finally {
            thunkAPI.dispatch(setIsLoading(false));
        }
    },
);
