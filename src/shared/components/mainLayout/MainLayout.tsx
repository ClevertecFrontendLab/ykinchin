import { Layout } from 'antd';
import { FC } from 'react';
import { Navigate, Outlet } from 'react-router';

import HeaderBreadcrumbs from '@components/breadcrumbs/HeaderBreadcrumbs';
import Loader from '@components/loader/Loader';
import { PATHS } from '@constants/PATHS';
import { useAppSelector } from '@hooks/reduxHooks';
import useAuth from '@hooks/useAuth';
import Sidebar from '@pages/main-page/layout/sidebar/Sidebar';

import bg from '../../../assets/main_page_light.png';

import s from './mainLayout.module.scss';

const MainLayout: FC = () => {
    const isAuth = useAuth();
    const showLoader = useAppSelector((state) => state.loader.showLoader);

    return isAuth ? (
        <Layout
            className={s.layout}
            style={{
                minHeight: '100vh',
                background: `no-repeat center bottom url(${bg})`,
                backgroundSize: 'cover',
            }}
        >
            <Sidebar />
            <div style={{ width: '100%' }}>
                <Layout style={{ background: 0, height: '100%' }}>
                    <HeaderBreadcrumbs className={s.breadCrumbs} />
                    <Outlet />
                </Layout>
            </div>

            {showLoader && <Loader />}
        </Layout>
    ) : (
        <Navigate to={PATHS.auth} />
    );
};

export default MainLayout;
