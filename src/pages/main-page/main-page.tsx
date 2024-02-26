import React from 'react';

import { PATHS } from '@constants/PATHS';
import useAuth from '@hooks/useAuth';
import { Navigate } from 'react-router-dom';
import MainPageLayout from './layout/MainPageLayout';
import './main-page.css';

export const MainPage: React.FC = () => {
    const isAuth = useAuth();
    return <>{isAuth ? <MainPageLayout /> : <Navigate to={PATHS.auth} />}</>;
};
