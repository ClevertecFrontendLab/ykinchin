import { RootState } from '@redux/configure-store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authBaseQuery = fetchBaseQuery({
    baseUrl: `https://marathon-api.clevertec.ru/auth`,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.accessToken;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
    credentials: 'include',
});

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: authBaseQuery,
    endpoints: (builder) => ({
        registrationUser: builder.mutation<any, any>({
            query: (body: { email: string; password: string }) => {
                return {
                    url: '/registration',
                    method: 'post',
                    body,
                };
            },
        }),
        loginUser: builder.mutation<any, any>({
            query: (body: { email: string; password: string }) => {
                return {
                    url: '/login',
                    method: 'post',
                    body,
                };
            },
        }),
        checkEmail: builder.mutation<any, any>({
            query: (body: { email: string }) => {
                return {
                    url: '/check-email',
                    method: 'post',
                    body,
                    credentials: 'include',
                };
            },
        }),
        confirmEmail: builder.mutation<any, any>({
            query: (body: { email: string; code: string }) => {
                return {
                    url: '/confirm-email',
                    method: 'post',
                    body,
                    credentials: 'include',
                };
            },
        }),
        changePassword: builder.mutation<any, any>({
            query: (body: { password: string; confirmPassword: string }) => {
                return {
                    url: '/change-password',
                    method: 'post',
                    body,
                    credentials: 'include',
                };
            },
        }),
    }),
});

export const { useRegistrationUserMutation, useLoginUserMutation, useCheckEmailMutation } = authApi;
