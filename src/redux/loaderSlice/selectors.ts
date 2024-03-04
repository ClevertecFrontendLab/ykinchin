import { RootState } from '@redux/configure-store';

export const selectShowLoader = (state: RootState) => state.loader.showLoader;
