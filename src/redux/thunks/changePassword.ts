import { PATHS } from '@constants/PATHS';
import { setIsLoading } from '@redux/slices/loaderSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { push } from 'redux-first-history';

interface IChangeData {
    password: string;
    confirmPassword: string;
}

export const changePassword = createAsyncThunk(
    'auth/changePassword',
    async (data: IChangeData, thunkAPI) => {
        try {
            thunkAPI.dispatch(setIsLoading(true));
            const response = await axios.post(
                'https://marathon-api.clevertec.ru/auth/change-password',
                data,
                {
                    withCredentials: true,
                },
            );
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
