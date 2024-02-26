import CustomButton from '@components/customButton/CustomButton';
import PasswordInput from '@components/passwordInput/PasswordInput';
import RepeatPasswordInput from '@components/repeatPasswordInput/RepeatPasswordInput';
import { PATHS } from '@constants/PATHS';
import { useAppDispatch } from '@hooks/reduxHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import usePrevLocation from '@hooks/usePrevLocation';
import { changePassword } from '@redux/thunks/changePassword';
import { Card, Form, Space, Typography } from 'antd';
import { ChangeEvent, FC, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import styles from './changePassword.module.scss';

const ChangePassword: FC = () => {
    const location = useLocation();
    const prevLocation = usePrevLocation();
    const isMobile = useMediaQuery('(max-width:425px)');
    const dispatch = useAppDispatch();
    const [formValue, setFormValue] = useState({ password: '', passwordRepeat: '' });

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const onFinishHandler = async () => {
        await dispatch(
            changePassword({
                password: formValue.password,
                confirmPassword: formValue.passwordRepeat,
            }),
        );
    };

    if (prevLocation !== PATHS.confirmEmail && prevLocation !== location.pathname) {
        return <Navigate to={PATHS.auth} />;
    }

    return (
        <Card bodyStyle={{ padding: 0 }} bordered={false} className={styles.card}>
            <Form
                onFinish={onFinishHandler}
                size='large'
                wrapperCol={{ span: 24 }}
                autoComplete='off'
                className={styles.form}
            >
                <Typography.Title level={3}>Восстановление аккаунта</Typography.Title>
                <Space direction='vertical' size={isMobile ? 8 : 'large'}>
                    <PasswordInput
                        placeholder='Новый пароль'
                        onChange={onChangeHandler}
                        itemStyle={{ marginBottom: 22 }}
                        test='change-password'
                    />
                    <RepeatPasswordInput
                        onChange={onChangeHandler}
                        test='change-confirm-password'
                    />
                </Space>
                <Form.Item style={{ margin: 0 }}>
                    <CustomButton
                        htmlType='submit'
                        size='large'
                        type='primary'
                        className={styles.btn}
                        test='change-submit-button'
                    >
                        Сохранить
                    </CustomButton>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default ChangePassword;
