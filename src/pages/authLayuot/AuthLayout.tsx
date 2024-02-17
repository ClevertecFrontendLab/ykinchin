import { Layout } from 'antd';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import bg from '../../assets/enter_page_light.png';
import styles from './authLayout.module.scss';

const AuthLayout: FC = () => {
    return (
        <Layout
            className={styles.layout}
            style={{ background: `no-repeat center bottom url(${bg})`, backgroundSize: 'cover' }}
        >
            <div className={styles.blurWrapper}>
                <Outlet />
            </div>
        </Layout>
    );
};

export default AuthLayout;
