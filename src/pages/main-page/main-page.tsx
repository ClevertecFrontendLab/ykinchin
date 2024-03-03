import React, { Suspense, lazy } from 'react';

import Loader from '@components/loader/Loader';

const LazyMainPage = lazy(() => import('./layout/MainPageLayout'));

export const MainPage: React.FC = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <LazyMainPage />
            </Suspense>
        </>
    );
};
