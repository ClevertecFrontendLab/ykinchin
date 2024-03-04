import { IFeedback } from 'src/shared/types/feedbackType';

import { STATUS } from '@constants/responseStatus';
import { getFeedbacks } from '@redux/thunks/getFeedbacks';
import { postFeedback } from '@redux/thunks/postFeedback';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type feedbackState = {
    isErrorModalOpened: boolean;
    isSuccessModalOpened: boolean;
    isNewFeedbackModalOpened: boolean;
    isFetchingErrorModalOpened: boolean;
    feedbacks: IFeedback[];
};

const initialState: feedbackState = {
    isErrorModalOpened: false,
    isSuccessModalOpened: false,
    isNewFeedbackModalOpened: false,
    isFetchingErrorModalOpened: false,
    feedbacks: [],
};

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState: initialState,
    reducers: {
        toggleErrorModal: (state, action: PayloadAction<boolean>) => {
            state.isErrorModalOpened = action.payload;
        },
        toggleSuccessModal: (state, action: PayloadAction<boolean>) => {
            state.isSuccessModalOpened = action.payload;
        },
        toggleNewFeedback: (state, action: PayloadAction<boolean>) => {
            state.isNewFeedbackModalOpened = action.payload;
        },
        toggFetchingErrorModal: (state, action: PayloadAction<boolean>) => {
            state.isFetchingErrorModalOpened = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getFeedbacks.fulfilled, (state, action) => {
            state.feedbacks = [...action.payload];
        });
        builder.addCase(getFeedbacks.rejected, (state, action) => {
            const status = action.payload;
            if (status !== STATUS.forbidden) {
                state.isFetchingErrorModalOpened = true;
            }
        });
        builder.addCase(postFeedback.fulfilled, (state) => {
            state.isNewFeedbackModalOpened = false;
            state.isSuccessModalOpened = true;
        });
        builder.addCase(postFeedback.rejected, (state) => {
            state.isNewFeedbackModalOpened = false;
            state.isErrorModalOpened = true;
        });
    },
});

export const { toggleErrorModal, toggleSuccessModal, toggleNewFeedback, toggFetchingErrorModal } =
    feedbackSlice.actions;
export default feedbackSlice.reducer;
