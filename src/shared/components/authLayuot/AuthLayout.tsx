import { Layout } from 'antd';
import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import styles from './authLayout.module.scss';

import Loader from '@components/loader/Loader';
import { PATHS } from '@constants/PATHS';
import { useAppSelector } from '@hooks/reduxHooks';
import useAuth from '@hooks/useAuth';
import bg from '../../../assets/enter_page_light.png';

const AuthLayout: FC = () => {
    const { Content } = Layout;
    const showLoader = useAppSelector((state) => state.loader.showLoader);
    const isAuth = useAuth();

    if (isAuth) return <Navigate to={PATHS.main} />;

    return (
        <Layout className={styles.layout}>
            <div>
                <Content
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center bottom',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className={styles.blurWrapper}>
                        <Outlet />
                        {showLoader && <Loader />}
                    </div>
                </Content>
            </div>
        </Layout>
    );
};

export default AuthLayout;
