import { PATHS } from '@constants/PATHS';
import AuthLayout from '@pages/authLayuot/AuthLayout';
import { MainPage } from '@pages/main-page';
import SignInPage from '@pages/signIn/signInPage';
import SignUpPage from '@pages/signUp/signUpPage';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const PageRouter: FC = () => {
    return (
        <Routes>
            <Route path={PATHS.main} element={<MainPage />} />
            <Route path={PATHS.auth} element={<AuthLayout />}>
                <Route index element={<SignInPage />} />
                <Route path={PATHS.registration} element={<SignUpPage />} />
            </Route>
        </Routes>
    );
};

export default PageRouter;
