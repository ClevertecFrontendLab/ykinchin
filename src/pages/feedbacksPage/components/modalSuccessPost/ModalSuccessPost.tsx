import ModalWindow from '@components/modal/ModalWindow';
import ResultCard from '@components/resultCard/ResultCard';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import { toggleSuccessModal } from '@redux/slices/feedbackSlice';

const ModalSuccessPost = () => {
    const isMobile = useMediaQuery('(max-width:425px)');
    const dispatch = useAppDispatch();
    const isOpened = useAppSelector((state) => state.feedback.isSuccessModalOpened as boolean);

    const onCloseHandler = () => dispatch(toggleSuccessModal(false));

    return (
        <ModalWindow open={isOpened}>
            <ResultCard
                resultStyle={{ padding: isMobile ? '32px 16px' : '' }}
                status='success'
                resultTitle='Отзыв успешно опубликован'
                btnText='Отлично'
                onClick={onCloseHandler}
            />
        </ModalWindow>
    );
};

export default ModalSuccessPost;
