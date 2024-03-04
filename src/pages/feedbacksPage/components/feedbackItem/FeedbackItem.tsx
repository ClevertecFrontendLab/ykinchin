import { Avatar, Card, Space, Typography } from 'antd';
import { IFeedback } from 'src/shared/types/feedbackType';

import { UserOutlined } from '@ant-design/icons';
import CustomRate from '@components/customRate/CustomRate';
import useMediaQuery from '@hooks/useMediaQuery';
import { formatDate } from '@utils/dateUtils';

import styles from './feedbackItem.module.scss';

type Props = {
    feedback: IFeedback;
};

const FeedbackItem = ({ feedback }: Props) => {
    const isMobile = useMediaQuery('(max-width:425px)');
    const { Text } = Typography;

    return (
        <Card className={styles.card} bodyStyle={{ padding: isMobile ? '16px 8px' : 16 }}>
            <div className={styles.comment}>
                <Space direction='vertical' size={12} className={styles.author}>
                    <Avatar size='large' icon={<UserOutlined />} src={feedback.imageSrc} />
                    <Text className={styles.userName}>{feedback.fullName || 'Пользователь'}</Text>
                </Space>
                <div className={styles.content}>
                    <Space size={12} align='center'>
                        <CustomRate rating={feedback.rating} />
                        <Text style={{ fontSize: 12 }} type='secondary'>
                            {formatDate(feedback.createdAt)}
                        </Text>
                    </Space>
                    <Text className={styles.message}>{feedback.message}</Text>
                </div>
            </div>
        </Card>
    );
};

export default FeedbackItem;
