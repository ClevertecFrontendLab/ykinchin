import CustomButton from '@components/customButton/CustomButton';
import ModalWindow from '@components/modal/ModalWindow';
import ResultCard from '@components/resultCard/ResultCard';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import { toggleErrorModal, toggleNewFeedback } from '@redux/feedbackSlice/feedbackSlice';
import { selectIsErrorModal } from '@redux/feedbackSlice/selectors';

const ModalErrorPost = () => {
    const isMobile = useMediaQuery('(max-width:425px)');
    const dispatch = useAppDispatch();
    const isOpened = useAppSelector(selectIsErrorModal);

    const onRetryHandler = () => {
        dispatch(toggleErrorModal(false));
        dispatch(toggleNewFeedback(true));
    };

    const onCloseHandler = () => dispatch(toggleErrorModal(false));

    return (
        <ModalWindow open={isOpened}>
            <ResultCard
                resultStyle={{ padding: isMobile ? '32px 16px' : '' }}
                status='error'
                resultTitle='Данные не сохранились'
                resultDescription='Что-то пошло не так. Попробуйте еще раз'
            >
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        gap: 8,
                    }}
                >
                    <CustomButton
                        block
                        size='large'
                        type='primary'
                        onClick={onRetryHandler}
                        test='write-review-not-saved-modal'
                    >
                        Написать отзыв
                    </CustomButton>
                    <CustomButton
                        block
                        size='large'
                        type='default'
                        style={{ fontSize: 14 }}
                        onClick={onCloseHandler}
                    >
                        Закрыть
                    </CustomButton>
                </div>
            </ResultCard>
        </ModalWindow>
    );
};

export default ModalErrorPost;
