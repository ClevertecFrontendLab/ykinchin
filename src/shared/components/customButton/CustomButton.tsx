import { Button } from 'antd';
import { CSSProperties, FC, ReactNode } from 'react';

interface ButtonProps {
    onClick?: () => void;
    type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
    size?: 'large' | 'middle' | 'small';
    disabled?: boolean;
    danger?: boolean;
    children?: ReactNode;
    icon?: ReactNode;
    style?: CSSProperties;
    className?: string;
}

const CustomButton: FC<ButtonProps> = ({
    onClick,
    type = 'text',
    size = 'middle',
    disabled = false,
    children,
    icon,
    className,
    style,
}) => {
    return (
        <Button
            className={className}
            onClick={onClick}
            type={type}
            size={size}
            disabled={disabled}
            icon={icon}
            style={style}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
