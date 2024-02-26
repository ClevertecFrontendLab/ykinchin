import ResultCard from '@components/resultCard/ResultCard';
import { PATHS } from '@constants/PATHS';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import usePrevLocation from '@hooks/usePrevLocation';
import { confirmEmail } from '@redux/thunks/confirmEmail';
import { Space, Typography } from 'antd';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import VerificationInput from 'react-verification-input';
import styles from './confirmEmail.module.scss';

const ConfirmEmail: FC = () => {
    const location = useLocation();
    const prevLocation = usePrevLocation();
    const isMobile = useMediaQuery('(max-width:425px)');
    const verificationInputRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useAppDispatch();
    const { email, isError } = useAppSelector((state) => state.user);
    const [verificationCode, setVerificationCode] = useState<string>('');

    const onPasteHandler = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const pastedText = e.clipboardData.getData('text');
        if (verificationInputRef.current) {
            verificationInputRef.current.value = pastedText;
            setVerificationCode(pastedText);
        }
    };

    const onCompleteHandler = async (code: string) => {
        dispatch(confirmEmail({ email: email, code: code }));
    };

    const handleVerificationInputChange = (value: string) => {
        setVerificationCode(value);
    };

    useEffect(() => {
        if (verificationCode.length === 6 && isError) {
            setVerificationCode('');
        }
    }, [verificationCode, isError]);

    if (prevLocation !== PATHS.auth && prevLocation !== location.pathname) {
        return <Navigate to={PATHS.auth} />;
    }

    return (
        <ResultCard
            bodyStyle={{ padding: 0 }}
            status={isError ? 'error' : 'info'}
            resultTitle={
                <Typography.Title level={3} className={styles.title} style={{ margin: 0 }}>
                    {isError && 'Неверный код.'} Введите код для восстановления аккаунта
                </Typography.Title>
            }
            resultDescription={
                <>
                    Мы отправили вам на e-mail {isMobile && <br />}
                    <strong>{email}</strong> <br />
                    шестизначный код. Введите его в поле ниже.
                </>
            }
        >
            <Space direction='vertical' size='large' align='center' className={styles.wrapper}>
                <VerificationInput
                    onComplete={onCompleteHandler}
                    onChange={handleVerificationInputChange}
                    value={verificationCode}
                    length={6}
                    placeholder=''
                    inputProps={{
                        'data-test-id': 'verification-input',
                        onPaste: onPasteHandler,
                    }}
                    classNames={{
                        container: `${styles.container}`,
                        character: `${styles.character} ${isError && styles.characterError}`,
                        characterInactive: 'character--inactive',
                    }}
                />
                <Typography.Text type='secondary'>
                    Не пришло письмо? Проверьте {isMobile && <br />} папку Спам.
                </Typography.Text>
            </Space>
        </ResultCard>
    );
};

export default ConfirmEmail;