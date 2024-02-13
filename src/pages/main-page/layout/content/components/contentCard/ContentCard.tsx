import { Typography } from 'antd';
import { FC } from 'react';
import { IContentCard } from 'src/shared/types';
import CustomButton from '../../../../../../shared/components/customButton/CustomButton';
import CustomCard from '../../../../../../shared/components/customCard/CustomCard';
import styles from './contentCard.module.scss';

interface IContentCardProps {
    data: IContentCard;
}

const ContentCard: FC<IContentCardProps> = ({ data }) => {
    const { Text } = Typography;
    return (
        <CustomCard
            title={<Text style={{ whiteSpace: 'wrap' }}>{data.title}</Text>}
            bordered={false}
            headStyle={{
                textAlign: 'center',
                padding: '3px 24px 0',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 16,
            }}
            bodyStyle={{ padding: 0 }}
            className={styles.card}
        >
            <CustomButton icon={data.icon}>{data.buttonText}</CustomButton>
        </CustomCard>
    );
};

export default ContentCard;
