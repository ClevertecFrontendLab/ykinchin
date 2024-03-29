import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthLayout from '@components/authLayuot/AuthLayout';
import MainLayout from '@components/mainLayout/MainLayout';
import { PATHS } from '@constants/PATHS';
import AuthPage from '@pages/authPage/AuthPage';
import ChangePassword from '@pages/authPage/changePassword/ChangePassword';
import ConfirmEmail from '@pages/authPage/confirmEmail/ConfirmEmail';
import GoogleRedirect from '@pages/authPage/googleRedirect/GoogleRedirect';
import Feedbacks from '@pages/feedbacksPage/Feedbacks';
import { MainPage } from '@pages/main-page';
import ErrorChangePassword from '@pages/resultPage/errorChangePassword/ErrorChangePassword';
import ErrorEmailCheck from '@pages/resultPage/errorEmailCheck/ErrorEmailCheck';
import ErrorEmailNoExist from '@pages/resultPage/errorEmailNoExist/ErrorEmailNoExist';
import ErrorLogin from '@pages/resultPage/errorLogin/ErrorLogin';
import ErrorRetryReg from '@pages/resultPage/errorRetryReg/ErrorRetryReg';
import ErrorUserExist from '@pages/resultPage/errorUserExist/ErrorUserExist';
import SuccessChangePassword from '@pages/resultPage/successChangePassword/SuccessChangePassword';
import SuccessPage from '@pages/resultPage/successPage/SuccessPage';

const PageRouter: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<GoogleRedirect />} />

            <Route element={<MainLayout />}>
                <Route path={PATHS.main} element={<MainPage />} />
                <Route path={PATHS.feedbacks} element={<Feedbacks />} />
            </Route>

            <Route path={PATHS.auth} element={<AuthLayout />}>
                <Route index element={<AuthPage />} />
                <Route path={PATHS.registration} element={<AuthPage />} />
                <Route path={PATHS.confirmEmail} element={<ConfirmEmail />} />
                <Route path={PATHS.changePassword} element={<ChangePassword />} />
            </Route>

            <Route element={<AuthLayout />}>
                <Route path={PATHS.logInError} element={<ErrorLogin />} />
                <Route path={PATHS.error} element={<ErrorRetryReg />} />
                <Route path={PATHS.userExistError} element={<ErrorUserExist />} />
                <Route path={PATHS.emailCheckExistError} element={<ErrorEmailNoExist />} />
                <Route path={PATHS.signUpSuccess} element={<SuccessPage />} />
                <Route path={PATHS.emailCheckError} element={<ErrorEmailCheck />} />
                <Route path={PATHS.changePasswordError} element={<ErrorChangePassword />} />
                <Route path={PATHS.changePasswordSuccess} element={<SuccessChangePassword />} />
            </Route>
        </Routes>
    );
};

export default PageRouter;
