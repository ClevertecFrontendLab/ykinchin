import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { FC } from 'react';

type RateProps = {
    rating: number;
    disabled: boolean;
    fontsize?: number;
    onChange?: (value: number) => void;
};

const CustomRate: FC<Partial<RateProps>> = ({
    rating = 0,
    disabled = true,
    fontsize = 14,
    onChange,
}) => {
    return (
        <Rate
            disabled={disabled}
            value={rating}
            style={{ color: '#FAAD14', fontSize: fontsize }}
            onChange={onChange}
            character={({ index }) =>
                (index == 0 || index) && index < rating ? (
                    <StarFilled />
                ) : (
                    <StarOutlined style={{ color: '#FAAD14' }} />
                )
            }
        />
    );
};

export default CustomRate;
