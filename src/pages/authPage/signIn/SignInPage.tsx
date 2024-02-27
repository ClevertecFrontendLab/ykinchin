import { GooglePlusOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Row, Space } from 'antd';
import { RuleObject } from 'antd/lib/form';
import { ChangeEvent, FC, useEffect, useState } from 'react';

import styles from './signInPage.module.scss';

import CustomButton from '@components/customButton/CustomButton';
import EmailInput from '@components/emailInput/EmailInput';
import PasswordInput from '@components/passwordInput/PasswordInput';
import { useAppDispatch } from '@hooks/reduxHooks';
import { setUser } from '@redux/slices/userSlice';
import { checkEmail } from '@redux/thunks/checkEmail';
import { login } from '@redux/thunks/loginUser';

const SignInPage: FC = () => {
    const dispatch = useAppDispatch();
    const [form] = Form.useForm();
    const [formValue, setFormValue] = useState({ email: '', password: '' });
    const [isRememberChecked, setIsRememberChecked] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const validateEmail = async (_: RuleObject, value: string) => {
        try {
            await form.validateFields(['email']);
            setIsEmailValid(true);
        } catch (error) {
            setIsEmailValid(false);
        }
    };

    useEffect(() => {
        const validate = async () => {
            if (formValue.email.length === 0) {
                setIsEmailValid(true);
            } else {
                await validateEmail({}, formValue.email);
            }
        };

        validate();
    }, [formValue.email]);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
    };

    const onFinishHandler = async () => {
        try {
            const values = await form.validateFields();
            await dispatch(
                login({
                    token: values.email,
                    rememberCheck: isRememberChecked,
                    email: formValue.email,
                    password: formValue.password,
                }),
            );
        } catch (error) {
            console.error('An error occurred during login:', error);
        }
    };

    const onPasswordReset = async () => {
        dispatch(setUser({ email: formValue.email }));
        if (formValue.email.length !== 0) {
            await dispatch(checkEmail(formValue.email));
        }
    };

    return (
        <Form
            form={form}
            name='basic'
            wrapperCol={{ span: 24 }}
            initialValues={{
                remember: false,
            }}
            autoComplete='off'
            size='large'
            style={{ margin: '10px 0 110px' }}
            className={styles.form}
            onFinish={onFinishHandler}
        >
            <Space direction='vertical' size={0}>
                <EmailInput
                    onChange={onChangeHandler}
                    test='login-email'
                    style={{ marginBottom: 32 }}
                />
                <PasswordInput
                    onChange={onChangeHandler}
                    itemStyle={{ marginBottom: 30 }}
                    withHelp={false}
                    test='login-password'
                />
            </Space>
            <Row align={'middle'}>
                <Col span={12}>
                    <Form.Item noStyle name='remember' valuePropName='checked'>
                        <Checkbox
                            data-test-id='login-remember'
                            defaultChecked={false}
                            onChange={(e) => setIsRememberChecked(e.target.checked)}
                        >
                            Запомнить меня
                        </Checkbox>
                    </Form.Item>
                </Col>
                <Col
                    span={12}
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <CustomButton
                        type='link'
                        style={{ padding: 0 }}
                        className={styles.resetPassBtn}
                        disabled={!isEmailValid && true}
                        onClick={onPasswordReset}
                        test='login-forgot-button'
                    >
                        Забыли пароль?
                    </CustomButton>
                </Col>
            </Row>
            <Space direction='vertical' size='middle'>
                <Form.Item wrapperCol={{ span: 24 }} style={{ margin: 0 }}>
                    <Button
                        htmlType='submit'
                        size='large'
                        type='primary'
                        className={`${styles.submitBtn} ${styles.btn}`}
                        data-test-id='login-submit-button'
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
                        Войти через Google
                    </Button>
                </Form.Item>
            </Space>
        </Form>
    );
};

export default SignInPage;
