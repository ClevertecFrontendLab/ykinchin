import { lazy, Suspense } from 'react';

import Loader from '@components/loader/Loader';

const LazyMainPage = lazy(() => import('./layout/MainPageLayout'));

export const MainPage = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <LazyMainPage />
            </Suspense>
        </>
    );
};
