import axios from 'axios';
import { push } from 'redux-first-history';

import { PATHS } from '@constants/PATHS';
import { REQUEST_URL } from '@constants/requestUrl';
import { setIsLoading } from '@redux/loaderSlice/loaderSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IChangeData {
    password: string;
    confirmPassword: string;
}

export const changePassword = createAsyncThunk(
    'auth/changePassword',
    async (data: IChangeData, thunkAPI) => {
        try {
            thunkAPI.dispatch(setIsLoading(true));
            const response = await axios.post(REQUEST_URL.changePassword, data, {
                withCredentials: true,
            });
            thunkAPI.dispatch(push(PATHS.changePasswordSuccess));
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                thunkAPI.dispatch(push(PATHS.changePasswordError));
            }
        } finally {
            thunkAPI.dispatch(setIsLoading(false));
        }
    },
);
