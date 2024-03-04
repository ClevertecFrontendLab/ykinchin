import { Layout } from 'antd';
import { Navigate, Outlet } from 'react-router-dom';

import Loader from '@components/loader/Loader';
import { PATHS } from '@constants/PATHS';
import useAuth from '@hooks/useAuth';

import bg from '../../../assets/enter_page_light.png';

import { useAppSelector } from '@hooks/reduxHooks';
import { selectShowLoader } from '@redux/loaderSlice/selectors';
import styles from './authLayout.module.scss';

const AuthLayout = () => {
    const { Content } = Layout;
    const isAuth = useAuth();
    const showLoader = useAppSelector(selectShowLoader);

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
