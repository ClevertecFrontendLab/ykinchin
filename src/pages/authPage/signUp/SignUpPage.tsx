import { Button, Form, Space } from 'antd';
import { ChangeEvent, useState } from 'react';

import { GooglePlusOutlined } from '@ant-design/icons';
import EmailInput from '@components/emailInput/EmailInput';
import PasswordInput from '@components/passwordInput/PasswordInput';
import RepeatPasswordInput from '@components/repeatPasswordInput/RepeatPasswordInput';
import { useAppDispatch } from '@hooks/reduxHooks';
import { setUser } from '@redux/slices/userSlice';
import { registration } from '@redux/thunks/registerUser';

import styles from './signUpPage.module.scss';

const SignUpPage = () => {
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const [formValue, setFormValue] = useState({ email: '', password: '', passwordRepeat: '' });
    const { email, password, passwordRepeat } = formValue;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const onFinishHandler = async () => {
        dispatch(setUser({ email: formValue.email, password: formValue.password }));
        try {
            await dispatch(
                registration({
                    email: formValue.email,
                    password: formValue.password,
                }),
            );
        } catch (error) {
            console.error('An error occurred during login:', error);
        }
    };

    return (
        <Form
            form={form}
            name='basic'
            wrapperCol={{ span: 24 }}
            autoComplete='off'
            size='large'
            className={styles.form}
            onFinish={onFinishHandler}
        >
            <Space direction='vertical' size={0}>
                <EmailInput
                    onChange={onChangeHandler}
                    value={email}
                    className={styles.input}
                    test='registration-email'
                />
                <PasswordInput
                    value={password}
                    onChange={onChangeHandler}
                    itemStyle={{ marginBottom: 46 }}
                    test='registration-password'
                />
                <RepeatPasswordInput
                    value={passwordRepeat}
                    onChange={onChangeHandler}
                    test='registration-confirm-password'
                />
            </Space>
            <Space direction='vertical' size='middle'>
                <Form.Item wrapperCol={{ span: 24 }} style={{ margin: 0 }}>
                    <Button
                        htmlType='submit'
                        size='large'
                        type='primary'
                        className={`${styles.submitBtn} ${styles.btn}`}
                        data-test-id='registration-submit-button'
                    >
                        Войти
                    </Button>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 24 }} style={{ margin: 0 }}>
                    <Button
                        icon={<GooglePlusOutlined />}
                        size='large'
                        type='default'
                        className={styles.btn}
                    >
                        Регистрация через Google
                    </Button>
                </Form.Item>
            </Space>
        </Form>
    );
};

export default SignUpPage;
