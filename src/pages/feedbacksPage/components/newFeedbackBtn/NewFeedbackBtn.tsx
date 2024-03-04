import CustomButton from '@components/customButton/CustomButton';
import { useAppDispatch } from '@hooks/reduxHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import { toggleNewFeedback } from '@redux/feedbackSlice/feedbackSlice';

const NewFeedbackBtn = () => {
    const isMobile = useMediaQuery('(max-width:425px)');
    const dispatch = useAppDispatch();

    const onOpenHandler = () => dispatch(toggleNewFeedback(true));

    return (
        <CustomButton
            block={isMobile}
            size='large'
            type='primary'
            style={{ backgroundColor: '#2F54EB', fontSize: 14 }}
            onClick={onOpenHandler}
            test='write-review'
        >
            Написать отзыв
        </CustomButton>
    );
};

export default NewFeedbackBtn;
