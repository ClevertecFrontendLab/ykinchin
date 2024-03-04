import { Card, Space, Typography } from 'antd';

import useMediaQuery from '@hooks/useMediaQuery';

import NewFeedbackBtn from '../newFeedbackBtn/NewFeedbackBtn';

import s from './emptyPage.module.scss';

const EmptyPage = () => {
    const isMobile = useMediaQuery('(max-width:425px)');

    return (
        <div className={s.wrapper}>
            <Card
                className={s.card}
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
                    <p className={s.newLineText}>
                        Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.
                    </p>
                    <p className={s.newLineText}>
                        Поделитесь своим мнением и
                        {isMobile ? (
                            <p className={s.newLineText}>опытом с другими пользователями</p>
                        ) : (
                            <> опытом с другими пользователями</>
                        )}
                    </p>
                    <p className={s.newLineText}> и помогите им сделать правильный выбор.</p>
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
