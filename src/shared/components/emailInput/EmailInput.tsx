import { ChangeEvent, FC } from 'react';
import { Form, Input } from 'antd';

interface EmailInputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: any) => Promise<void>;
    value?: string;
    style?: React.CSSProperties;
    className?: string;
    test: string;
}

const EmailInput: FC<EmailInputProps> = ({ onChange, onBlur, style, className, test }) => {
    return (
        <Form.Item
            className={className}
            name='email'
            rules={[
                { required: true, message: '' },
                { type: 'email', message: '' },
            ]}
            style={style}
        >
            <Input
                data-test-id={test}
                onChange={onChange}
                onBlur={onBlur}
                name='email'
                addonBefore='e-mail:'
                autoComplete='off'
            />
        </Form.Item>
    );
};

export default EmailInput;
