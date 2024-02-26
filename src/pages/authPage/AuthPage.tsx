import IconWrapper from '@components/icons/IconWrapper';
import FullLogo from '@components/icons/svgs/FullLogo';
import { PATHS } from '@constants/PATHS';
import { history } from '@redux/configure-store';
import { Tabs } from 'antd';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './authPage.module.scss';
import SignInPage from './signIn/SignInPage';
import SignUpPage from './signUp/SignUpPage';

const AuthPage: FC = () => {
    const location = useLocation();

    const getDefaultActiveKey = () => {
        if (location.pathname === PATHS.registration) {
            return '2';
        }
        return '1';
    };

    const handleChange = (key: string) => {
        if (key === '1') {
            history.push(PATHS.auth);
        } else if (key === '2') {
            history.push(PATHS.registration);
        }
    };

    return (
        <div className={styles.formWrapper}>
            <div className={styles.formWithLogo}>
                <IconWrapper icon={FullLogo} className={styles.logo} />
                <div className={styles.formTabs}>
                    <Tabs
                        size='large'
                        centered
                        defaultActiveKey={getDefaultActiveKey()}
                        onChange={handleChange}
                        tabBarStyle={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '14px',
                        }}
                        items={[
                            {
                                label: 'Вход',
                                key: '1',
                                children: <SignInPage />,
                            },
                            {
                                label: 'Регистрация',
                                key: '2',
                                children: <SignUpPage />,
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
