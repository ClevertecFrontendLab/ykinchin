import { Rate } from 'antd';

import { StarFilled, StarOutlined } from '@ant-design/icons';

type Props = {
    rating: number;
    disabled: boolean;
    fontsize?: number;
    onChange?: (value: number) => void;
};

const CustomRate = ({ rating = 0, disabled = true, fontsize = 14, onChange }: Partial<Props>) => (
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

export default CustomRate;
