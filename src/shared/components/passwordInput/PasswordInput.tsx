import { ChangeEvent, FC } from 'react';
import { Form, Input } from 'antd';

import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface PasswordInputProps {
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    itemStyle?: React.CSSProperties;
    withHelp?: boolean;
    placeholder?: string;
    test?: string;
}

const PasswordInput: FC<PasswordInputProps> = ({
    value,
    onChange,
    itemStyle,
    withHelp = true,
    placeholder = 'Пароль',
    test,
}) => {
    return (
        <Form.Item
            name='password'
            rules={[
                { required: true, message: '' },

                {
                    pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z])[A-Za-z\d]{8,}$/,
                    message: (
                        <div style={{ fontSize: 12 }}>
                            Пароль не менее 8 символов, с заглавной буквой и цифрой
                        </div>
                    ),
                },
            ]}
            style={itemStyle}
            help={
                withHelp && (
                    <div style={{ fontSize: 12, textAlign: 'left' }}>
                        Пароль не менее 8 символов, с заглавной буквой и цифрой
                    </div>
                )
            }
        >
            <Input.Password
                name='password'
                data-test-id={test}
                placeholder={placeholder}
                style={{ fontSize: 14, lineHeight: '180%' }}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                value={value}
                onChange={onChange}
                autoComplete='off'
            />
        </Form.Item>
    );
};

export default PasswordInput;
