import { Form, Input } from 'antd';
import { ChangeEvent } from 'react';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

type Props = {
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    test: string;
};

const RepeatPasswordInput = ({ value, onChange, test }: Props) => {
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
