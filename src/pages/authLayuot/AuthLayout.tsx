import { Layout } from 'antd';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: FC = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};

export default AuthLayout;
