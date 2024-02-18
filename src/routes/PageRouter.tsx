import { PATHS } from '@constants/PATHS';
import AuthLayout from '@pages/authPage/authLayuot/AuthLayout';
import AuthPage from '@pages/authPage/AuthPage';
import { MainPage } from '@pages/main-page';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const PageRouter: FC = () => {
    return (
        <Routes>
            <Route path={PATHS.main} element={<MainPage />} />
            <Route path={PATHS.auth} element={<AuthLayout />}>
                <Route index element={<AuthPage />} />
                <Route path={PATHS.registration} element={<AuthPage />} />
            </Route>
        </Routes>
    );
};

export default PageRouter;
