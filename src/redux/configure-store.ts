import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice/authSlice';
import feedbackSlice from './feedbackSlice/feedbackSlice';
import loaderSlice from './loaderSlice/loaderSlice';
import userSlice from './userSlice/userSlice';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
    savePreviousLocations: 1,
});

export const store = configureStore({
    reducer: combineReducers({
        auth: authReducer,
        user: userSlice,
        feedback: feedbackSlice,
        loader: loaderSlice,
        router: routerReducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
});

export const history = createReduxHistory(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
