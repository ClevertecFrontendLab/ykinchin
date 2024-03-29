import React from 'react';
import { Card, Col, Layout, List, Row, Typography } from 'antd';
import { IContentCard } from 'src/shared/types';

import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import useMediaQuery from '@hooks/useMediaQuery';

import BottomContent from './components/bottomContent/BottomContent';
import ContentCard from './components/contentCard/ContentCard';

import styles from './content.module.scss';

const listData: { id: string; content: string }[] = [
    {
        id: '1',
        content: 'планировать свои тренировки на каледаре, выбирая тип и уровень нагрузки;',
    },
    {
        id: '2',
        content: `отслеживать свои достижения в разделе статистики, сравнивая свои результаты\nс нормами и рекордами;`,
    },
    {
        id: '3',
        content: `создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы\nо тренировках;`,
    },
    {
        id: '4',
        content:
            'выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров;',
    },
];

const cardData: IContentCard[] = [
    {
        title: 'Расписать тренировки',
        icon: <HeartFilled />,
        buttonText: 'Тренировки',
    },
    {
        title: 'Назначить каледарь',
        icon: <CalendarTwoTone twoToneColor={['#1d39c4', '#1d39c4']} />,
        buttonText: 'Календарь',
    },
    { title: 'Заполнить профиль', icon: <IdcardOutlined />, buttonText: 'Профиль' },
];

const Content = () => {
    const isAboveMediumScreen = useMediaQuery('(min-width:835px)');
    const isMobile = useMediaQuery('(max-width:425px)');
    const { Content } = Layout;

    return (
        <Content className={styles.content}>
            <div className={styles.wrapper}>
                <Row gutter={[16, 16]}>
                    <Col>
                        <Row gutter={[16, 24]}>
                            <Col span={24}>
                                <Card
                                    style={{ height: `${isMobile && '368px'} ` }}
                                    bodyStyle={{ padding: `${isMobile && '16px'}` }}
                                    bordered={false}
                                    className={styles.card}
                                >
                                    <List
                                        header={<div>С CleverFit ты сможешь:</div>}
                                        className={styles.list}
                                        dataSource={listData}
                                        renderItem={(item) => (
                                            <List.Item className={styles.listItem}>
                                                <Typography.Text
                                                    style={{ maxWidth: `${isMobile && '275px'}` }}
                                                >
                                                    {isAboveMediumScreen ? (
                                                        <>
                                                            {'\u2014 '}
                                                            {item.content
                                                                .split('\n')
                                                                .map((line) => (
                                                                    <React.Fragment key={item.id}>
                                                                        {line}
                                                                        <br />
                                                                    </React.Fragment>
                                                                ))}
                                                        </>
                                                    ) : (
                                                        <>{'\u2014 ' + item.content}</>
                                                    )}
                                                </Typography.Text>
                                            </List.Item>
                                        )}
                                    />
                                </Card>
                            </Col>
                            <Col span={24}>
                                <Card
                                    className={styles.card}
                                    bordered={false}
                                    bodyStyle={{ padding: `${isMobile && '16px'}` }}
                                >
                                    <Typography.Title
                                        level={4}
                                        style={{
                                            marginBlockEnd: `${!isAboveMediumScreen && 0}`,
                                            maxWidth: 670,
                                            lineHeight: '130%',
                                            fontWeight: 500,
                                        }}
                                    >
                                        CleverFit — это не просто приложение, а твой личный помощник
                                        {isAboveMediumScreen && <br />} в мире фитнеса. Не
                                        откладывай на завтра — начни тренироваться уже сегодня!
                                    </Typography.Title>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24} style={{ height: `${isMobile && '319px'}` }}>
                        <Row gutter={isMobile ? [8, 8] : [16, 16]}>
                            {cardData.map((card) => (
                                <Col xs={24} md={8} key={card.title}>
                                    <ContentCard data={card} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>
            <BottomContent />
        </Content>
    );
};

export default Content;
