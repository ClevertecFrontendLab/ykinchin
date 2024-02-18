import IconWrapper from '@components/icons/IconWrapper';
import FullLogo from '@components/icons/svgs/FullLogo';
import { PATHS } from '@constants/PATHS';
import { history } from '@redux/configure-store';
import { Tabs } from 'antd';
import { FC } from 'react';
import styles from './authPage.module.scss';
import SignInPage from './signIn/SignInPage';
import SignUpPage from './signUp/SignUpPage';

const AuthPage: FC = () => {
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
                <IconWrapper icon={FullLogo} style={{ width: 309 }} />
                <div className={styles.formTabs}>
                    <Tabs
                        size='large'
                        centered
                        defaultActiveKey='1'
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
