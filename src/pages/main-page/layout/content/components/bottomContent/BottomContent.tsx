import { Col, Row, Typography } from 'antd';
import { FC } from 'react';

import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import CustomButton from '@components/customButton/CustomButton';
import CustomCard from '@components/customCard/CustomCard';
import { useAppDispatch } from '@hooks/reduxHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import { getFeedbacks } from '@redux/thunks/getFeedbacks';

import s from './BottomContent.module.scss';

const BottomContent: FC = () => {
    const dispatch = useAppDispatch();
    const isMobile = useMediaQuery('(max-width:425px)');

    const { Text, Title } = Typography;

    const onFeedbackHandler = () => {
        dispatch(getFeedbacks());
    };

    return (
        <Row gutter={[0, 24]} className={s.wrapper} justify='space-between' align='bottom'>
            <Col
                xs={{ order: 2 }}
                md={{ order: 1 }}
                span={isMobile ? 24 : ''}
                style={{
                    display: 'flex',
                    justifyContent: `${isMobile && 'center'}`,
                }}
            >
                <CustomButton
                    size='large'
                    className={s.reviewButton}
                    onClick={onFeedbackHandler}
                    test='see-reviews'
                >
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
                            <Title className={s.downloadTitle}>Скачать на телефон</Title>
                            <Text style={{ fontSize: 14 }} type='secondary'>
                                Доступтно в PRO-тарифе
                            </Text>
                        </div>
                    }
                >
                    <Row
                        justify={{ xs: 'space-around', md: 'space-between' }}
                        className={s.devices}
                    >
                        <Col>
                            <CustomButton className={s.deviceBtn} icon={<AndroidFilled />}>
                                Android OS
                            </CustomButton>
                        </Col>
                        <Col>
                            <CustomButton className={s.deviceBtn} icon={<AppleFilled />}>
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
