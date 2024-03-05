import { RootState } from '@redux/configure-store';

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectToken = (state: RootState) => state.auth.accessToken;
