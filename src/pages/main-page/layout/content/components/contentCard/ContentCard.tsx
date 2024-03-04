import { IContentCard } from 'src/shared/types';

import CustomButton from '@components/customButton/CustomButton';
import CustomCard from '@components/customCard/CustomCard';

import styles from './contentCard.module.scss';

type Props = {
    data: IContentCard;
};

const ContentCard = ({ data }: Props) => {
    return (
        <CustomCard
            title={data.title}
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
