import React from 'react';
import { Navigate } from 'react-router-dom';

import { PATHS } from '@constants/PATHS';
import useAuth from '@hooks/useAuth';
import MainPageLayout from './layout/MainPageLayout';

export const MainPage: React.FC = () => {
    const isAuth = useAuth();
    return <>{isAuth ? <MainPageLayout /> : <Navigate to={PATHS.auth} />}</>;
};
