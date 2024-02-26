import React, { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Loader from '@components/loader/Loader';
import { PATHS } from '@constants/PATHS';
import useAuth from '@hooks/useAuth';

const LazyMainPage = lazy(() => import('./layout/MainPageLayout'));

export const MainPage: React.FC = () => {
    const isAuth = useAuth();
    return (
        <>
            {isAuth ? (
                <Suspense fallback={<Loader />}>
                    <LazyMainPage />
                </Suspense>
            ) : (
                <Navigate to={PATHS.auth} />
            )}
        </>
    );
};
