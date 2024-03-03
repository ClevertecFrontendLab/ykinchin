import { CSSProperties, FC, ReactNode } from 'react';
import { Card } from 'antd';

interface CardProps {
    children: ReactNode;
    title?: ReactNode;
    bordered?: boolean;
    headStyle?: CSSProperties;
    bodyStyle?: CSSProperties;
    style?: CSSProperties;
    className?: string;
    size?: 'default' | 'small';
}

const CustomCard: FC<CardProps> = ({
    children,
    title,
    bordered = false,
    headStyle = { padding: 0 },
    bodyStyle,
    style,
    size = 'small',
    className,
}) => {
    return (
        <Card
            title={title}
            bordered={bordered}
            style={style}
            headStyle={headStyle}
            bodyStyle={bodyStyle}
            size={size}
            className={className}
        >
            {children}
        </Card>
    );
};

export default CustomCard;
