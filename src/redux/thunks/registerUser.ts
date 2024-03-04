import axios from 'axios';
import { push } from 'redux-first-history';

import { PATHS } from '@constants/PATHS';
import { REQUEST_URL } from '@constants/requestUrl';
import { STATUS } from '@constants/responseStatus';
import { setIsLoading } from '@redux/slices/loaderSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IRegisterData {
    email: string;
    password: string;
}

export const registration = createAsyncThunk(
    'auth/registration',
    async (data: IRegisterData, thunkAPI) => {
        try {
            thunkAPI.dispatch(setIsLoading(true));
            const response = await axios.post(REQUEST_URL.registration, data, {
                withCredentials: true,
            });
            thunkAPI.dispatch(push(PATHS.signUpSuccess));
            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                if (e.response?.status === STATUS.userExist) {
                    thunkAPI.dispatch(push(PATHS.userExistError));
                } else {
                    thunkAPI.dispatch(push(PATHS.error));
                }
                return thunkAPI.rejectWithValue(e.response?.data.message || 'error');
            }
        } finally {
            thunkAPI.dispatch(setIsLoading(false));
        }
    },
);
