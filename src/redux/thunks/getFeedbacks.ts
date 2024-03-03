import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { push, replace } from 'redux-first-history';

import { PATHS } from '@constants/PATHS';
import { REQUEST_URL } from '@constants/requestUrl';
import { RootState } from '@redux/configure-store';
import { logout } from '@redux/slices/authSlice';
import { setIsLoading } from '@redux/slices/loaderSlice';
import { IFeedback } from 'src/shared/types/feedbackType';

export const getFeedbacks = createAsyncThunk<IFeedback[], void>(
    'getFeedbacks',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        const accessToken =
            state.auth.accessToken || JSON.parse(localStorage.getItem('user') as string);

        try {
            thunkAPI.dispatch(setIsLoading(true));
            const response = await axios.get<IFeedback[]>(REQUEST_URL.feedbacks, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            thunkAPI.dispatch(push(PATHS.feedbacks));

            return thunkAPI.fulfillWithValue(response.data);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                if (e.response?.status === 403) {
                    thunkAPI.dispatch(replace(PATHS.auth));
                    thunkAPI.dispatch(logout());
                } else {
                    thunkAPI.dispatch(push(PATHS.feedbacks));
                }
                return thunkAPI.rejectWithValue(e.response?.status);
            }
            throw e;
        } finally {
            thunkAPI.dispatch(setIsLoading(false));
        }
    },
);
