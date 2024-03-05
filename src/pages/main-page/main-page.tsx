import { lazy, Suspense } from 'react';

import Loader from '@components/loader/Loader';

const LazyMainPage = lazy(() => import('./layout/MainPageLayout'));

export const MainPage = () => (
    <Suspense fallback={<Loader />}>
        <LazyMainPage />
    </Suspense>
);
