import { RootState } from '@redux/configure-store';

export const selectFeedbacks = (state: RootState) => state.feedback.feedbacks;

export const selectIsErrorModal = (state: RootState) => state.feedback.isErrorModalOpened;
export const selectIsFetchingErrorModal = (state: RootState) =>
    state.feedback.isFetchingErrorModalOpened;
export const selectIsNewFeedbackModal = (state: RootState) =>
    state.feedback.isNewFeedbackModalOpened;
export const selectIsSuccessModal = (state: RootState) => state.feedback.isSuccessModalOpened;
