import axios from 'axios';
import { push } from 'redux-first-history';

import { PATHS } from '@constants/PATHS';
import { REQUEST_URL } from '@constants/requestUrl';
import { STATUS } from '@constants/responseStatus';
import { setIsLoading } from '@redux/loaderSlice/loaderSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
            if (
                e.response?.status === STATUS.notFount &&
                e.response.data.message === 'Email не найден'
            ) {
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
