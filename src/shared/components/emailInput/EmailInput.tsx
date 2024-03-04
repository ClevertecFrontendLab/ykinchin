import { Form, Input } from 'antd';
import { ChangeEvent, FocusEventHandler } from 'react';

interface Props {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    value?: string;
    style?: React.CSSProperties;
    className?: string;
    test: string;
}

const EmailInput = ({ onChange, onBlur, style, className, test }: Props) => (
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

export default EmailInput;
