import { CSSProperties, ReactNode } from 'react';
import { Card } from 'antd';

interface Props {
    children: ReactNode;
    title?: ReactNode;
    bordered?: boolean;
    headStyle?: CSSProperties;
    bodyStyle?: CSSProperties;
    style?: CSSProperties;
    className?: string;
    size?: 'default' | 'small';
}

const CustomCard = ({
    children,
    title,
    bordered = false,
    headStyle = { padding: 0 },
    bodyStyle,
    style,
    size = 'small',
    className,
}: Props) => {
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
