import { FC } from 'react';
import { Card, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import CustomButton from '@components/customButton/CustomButton';
import ModalWindow from '@components/modal/ModalWindow';
import { PATHS } from '@constants/PATHS';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import { toggFetchingErrorModal } from '@redux/slices/feedbackSlice';

const ModalError: FC = () => {
    const isMobile = useMediaQuery('(max-width:425px)');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isModalOpened = useAppSelector(
        (state) => state.feedback.isFetchingErrorModalOpened as boolean,
    );

    const onCloseHandler = () => {
        navigate(PATHS.main);
        dispatch(toggFetchingErrorModal(false));
    };

    return (
        <ModalWindow open={isModalOpened}>
            <Card bordered={false} bodyStyle={{ padding: '54px 0', display: 'flex' }}>
                <Result
                    style={{ padding: 0 }}
                    status='500'
                    title='Что-то пошло не так'
                    subTitle={<>Произошла ошибка,{isMobile && <br />} попробуйте ещё раз.</>}
                    extra={[
                        <CustomButton
                            test='check-back-button'
                            size='large'
                            type='primary'
                            key='check-back-btn'
                            onClick={onCloseHandler}
                        >
                            Назад
                        </CustomButton>,
                    ]}
                />
            </Card>
        </ModalWindow>
    );
};

export default ModalError;