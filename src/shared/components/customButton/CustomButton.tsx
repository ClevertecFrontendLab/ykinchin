import { CSSProperties, FC, ReactNode } from 'react';
import { Button } from 'antd';

interface ButtonProps {
    onClick: () => void;
    type: 'primary' | 'default' | 'dashed' | 'text' | 'link';
    size: 'large' | 'middle' | 'small';
    disabled: boolean;
    danger: boolean;
    children: ReactNode;
    icon: ReactNode;
    style: CSSProperties;
    className: string;
    htmlType: 'button' | 'reset' | 'submit';
    block: boolean;
    test: string;
}

const CustomButton: FC<Partial<ButtonProps>> = ({
    test,
    onClick,
    type = 'text',
    size = 'middle',
    disabled = false,
    children,
    icon,
    className,
    style,
    htmlType,
    block,
}) => {
    return (
        <Button
            block={block}
            htmlType={htmlType}
            className={className}
            onClick={onClick}
            type={type}
            size={size}
            disabled={disabled}
            icon={icon}
            style={style}
            data-test-id={test}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
