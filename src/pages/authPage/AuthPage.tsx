import { Tabs } from 'antd';
import { FC } from 'react';

import styles from './authPage.module.scss';

import IconWrapper from '@components/icons/IconWrapper';
import FullLogo from '@components/icons/svgs/FullLogo';
import { PATHS } from '@constants/PATHS';
import { history } from '@redux/configure-store';
import { useLocation } from 'react-router-dom';
import SignInPage from './signIn/SignInPage';
import SignUpPage from './signUp/SignUpPage';

const AuthPage: FC = () => {
    const location = useLocation();

    // const getDefaultActiveKey = () => {
    //     if (location.pathname === PATHS.registration) {
    //         return '2';
    //     }
    //     return '1';
    // };

    // const handleChange = (key: string) => {
    //     if (key === '1') {
    //         history.push(PATHS.auth);
    //     } else if (key === '2') {
    //         history.push(PATHS.registration);
    //     }
    // };

    return (
        <div className={styles.formWrapper}>
            <div className={styles.formWithLogo}>
                <IconWrapper icon={FullLogo} className={styles.logo} />
                <div className={styles.formTabs}>
                    <Tabs
                        defaultActiveKey={location?.pathname}
                        className={styles.tabs}
                        onChange={(key) => history.push(key)}
                    >
                        <Tabs.TabPane tab='Вход' key={PATHS.auth}>
                            <SignInPage />
                        </Tabs.TabPane>
                        <Tabs.TabPane tab='Регистрация' key={PATHS.registration}>
                            <SignUpPage />
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
