import useMediaQuery from '@hooks/useMediaQuery';
import { Card, Space, Typography } from 'antd';
import { FC } from 'react';
import NewFeedbackBtn from '../newFeedbackBtn/NewFeedbackBtn';
import styles from './emptyPage.module.scss';

const EmptyPage: FC = () => {
    const isMobile = useMediaQuery('(max-width:425px)');

    return (
        <div className={styles.wrapper}>
            <Card
                className={styles.card}
                bodyStyle={{
                    padding: isMobile ? 0 : '18px 0',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: '100%',
                }}
            >
                <Typography.Title level={3} style={{ color: '#061178' }}>
                    Оставьте свой отзыв первым
                </Typography.Title>
                <Typography.Text
                    style={{
                        color: '#8C8C8C',
                        lineHeight: 1.3,
                        maxWidth: isMobile ? 264 : '',
                        textAlign: 'center',
                    }}
                >
                    Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.
                    <br />
                    Поделитесь своим мнением и {isMobile && <br />}опытом с другими пользователями{' '}
                    <br /> и помогите им сделать правильный выбор.
                </Typography.Text>
            </Card>
            <Space
                direction='vertical'
                style={{ width: '100%', alignItems: isMobile ? '' : 'center' }}
            >
                <NewFeedbackBtn />
            </Space>
        </div>
    );
};

export default EmptyPage;
