import { Tabs } from 'antd';
import { useLocation } from 'react-router-dom';

import IconWrapper from '@components/icons/IconWrapper';
import FullLogo from '@components/icons/svgs/FullLogo';
import { PATHS } from '@constants/PATHS';
import { history } from '@redux/configure-store';

import SignInPage from './signIn/SignInPage';
import SignUpPage from './signUp/SignUpPage';

import styles from './authPage.module.scss';

const AuthPage = () => {
    const location = useLocation();

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
