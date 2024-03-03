import axios from 'axios';

import { REQUEST_URL } from '@constants/requestUrl';
import { RootState } from '@redux/configure-store';
import { setIsLoading } from '@redux/slices/loaderSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

type Feedback = {
    message: string;
    rating: number;
};

export const postFeedback = createAsyncThunk('/postFeedback', async (data: Feedback, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const accessToken =
        state.auth.accessToken || JSON.parse(localStorage.getItem('user') as string);

    try {
        thunkAPI.dispatch(setIsLoading(true));
        const response = await axios.post(REQUEST_URL.feedbacks, data, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return thunkAPI.fulfillWithValue(response.data);
    } catch (e) {
        if (axios.isAxiosError(e)) {
            return thunkAPI.rejectWithValue(e.response?.data.message || 'error');
        }
    } finally {
        thunkAPI.dispatch(setIsLoading(false));
    }
});
