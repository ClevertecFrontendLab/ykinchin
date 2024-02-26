import { Layout } from 'antd';
import { FC } from 'react';

import styles from './mainpagelayot.module.scss';

import Loader from '@components/loader/Loader';
import { useAppSelector } from '@hooks/reduxHooks';
import bg from '../../../assets/main_page_light.png';
import Content from './content/Content';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const MainPageLayout: FC = () => {
    const isLoading = useAppSelector((state) => state.loader.showLoader);
    return isLoading ? (
        <Loader />
    ) : (
        <Layout
            className={styles.layout}
            style={{
                minHeight: '100svh',
                background: `no-repeat center bottom url(${bg})`,
                backgroundSize: 'cover',
            }}
        >
            <Sidebar />
            <Layout style={{ background: 0 }}>
                <Header />
                <Content />
            </Layout>
        </Layout>
    );
};

export default MainPageLayout;
