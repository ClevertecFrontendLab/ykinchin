import Loader from '@components/loader/Loader';
import { useAppSelector } from '@hooks/reduxHooks';
import { Layout } from 'antd';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import bg from '../../../assets/enter_page_light.png';
import styles from './authLayout.module.scss';

const AuthLayout: FC = () => {
    const { Content } = Layout;
    const { showLoader } = useAppSelector((state) => state.loader);

    return (
        <Layout
            className={styles.layout}
            style={{ background: `no-repeat center bottom url(${bg})`, backgroundSize: 'cover' }}
        >
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
                </div>
            </Content>
            {showLoader && <Loader />}
        </Layout>
    );
};

export default AuthLayout;
