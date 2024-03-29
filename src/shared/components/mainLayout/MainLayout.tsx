import { Layout } from 'antd';
import { Navigate, Outlet } from 'react-router';

import HeaderBreadcrumbs from '@components/breadcrumbs/HeaderBreadcrumbs';
import Loader from '@components/loader/Loader';
import { PATHS } from '@constants/PATHS';
import { useAppSelector } from '@hooks/reduxHooks';
import useAuth from '@hooks/useAuth';
import Sidebar from '@pages/main-page/layout/sidebar/Sidebar';
import { selectShowLoader } from '@redux/loaderSlice/selectors';

import bg from '../../../assets/main_page_light.png';

import styles from './mainLayout.module.scss';

const MainLayout = () => {
    const isAuth = useAuth();
    const showLoader = useAppSelector(selectShowLoader);

    return isAuth ? (
        <Layout
            className={styles.layout}
            style={{
                minHeight: '100vh',
                background: `no-repeat center bottom url(${bg})`,
                backgroundSize: 'cover',
            }}
        >
            <Sidebar />
            <div style={{ width: '100%' }}>
                <Layout style={{ background: 0, height: '100%' }}>
                    <HeaderBreadcrumbs className={styles.breadCrumbs} />
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
