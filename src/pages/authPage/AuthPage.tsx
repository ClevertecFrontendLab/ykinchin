import IconWrapper from '@components/icons/IconWrapper';
import FullLogo from '@components/icons/svgs/FullLogo';
import { FC } from 'react';
import styles from './authPage.module.scss';

    return (
        <div className={styles.formWrapper}>
            <div className={styles.formWithLogo}>
                <IconWrapper icon={FullLogo} style={{ width: 309 }} />
                <div className={styles.formTabs}>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
