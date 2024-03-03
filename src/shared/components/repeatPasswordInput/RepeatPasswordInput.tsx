import { ChangeEvent, FC } from 'react';
import { Form, Input } from 'antd';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface PasswordInputProps {
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    test: string;
}

const RepeatPasswordInput: FC<PasswordInputProps> = ({ value, onChange, test }) => {
    return (
        <Form.Item
            name='passwordRepeat'
            dependencies={['password']}
            rules={[
                { required: true, message: '' },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject('Пароли не совпадают');
                    },
                }),
            ]}
            style={{ marginBottom: 42 }}
        >
            <Input.Password
                name='passwordRepeat'
                data-test-id={test}
                placeholder='Повторите пароль'
                style={{ fontSize: 14, lineHeight: '180%' }}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                value={value}
                onChange={onChange}
                autoComplete='off'
            />
        </Form.Item>
    );
};

export default RepeatPasswordInput;
