import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import CustomButton from '@components/customButton/CustomButton';
import CustomCard from '@components/customCard/CustomCard';
import useMediaQuery from '@hooks/useMediaQuery';
import { Col, Row, Typography } from 'antd';
import { FC } from 'react';
import styles from './BottomContent.module.scss';

const BottomContent: FC = () => {
    const isMobile = useMediaQuery('(max-width:425px)');

    const { Text, Title } = Typography;

    return (
        <Row gutter={[0, 24]} className={styles.wrapper} justify='space-between' align='bottom'>
            <Col
                xs={{ order: 2 }}
                md={{ order: 1 }}
                span={isMobile ? 24 : ''}
                style={{
                    display: 'flex',
                    justifyContent: `${isMobile && 'center'}`,
                }}
            >
                <CustomButton size='large' className={styles.reviewButton}>
                    Смотреть отзывы
                </CustomButton>
            </Col>
            <Col xs={{ order: 1 }} md={{ order: 2 }} span={isMobile ? 24 : ''}>
                <CustomCard
                    headStyle={{
                        padding: '4px 24px',
                        height: 71,
                        display: 'flex',
                        justifyContent: `${isMobile && 'center'}`,
                    }}
                    bodyStyle={{ padding: 0 }}
                    title={
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: `${isMobile ? 'center' : 'self-start'}`,
                                gap: 1,
                            }}
                        >
                            <Title className={styles.downloadTitle}>Скачать на телефон</Title>
                            <Text style={{ fontSize: 14 }} type='secondary'>
                                Доступтно в PRO-тарифе
                            </Text>
                        </div>
                    }
                >
                    <Row
                        justify={{ xs: 'space-around', md: 'space-between' }}
                        className={styles.devices}
                    >
                        <Col>
                            <CustomButton className={styles.deviceBtn} icon={<AndroidFilled />}>
                                Android OS
                            </CustomButton>
                        </Col>
                        <Col>
                            <CustomButton className={styles.deviceBtn} icon={<AppleFilled />}>
                                Apple iOS
                            </CustomButton>
                        </Col>
                    </Row>
                </CustomCard>
            </Col>
        </Row>
    );
};

export default BottomContent;
