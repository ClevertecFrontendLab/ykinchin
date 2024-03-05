import { RootState } from '@redux/configure-store';

export const selectEmail = (state: RootState) => state.user.email;
export const selectPassword = (state: RootState) => state.user.password;

export const selectIsError = (state: RootState) => state.user.isError;
