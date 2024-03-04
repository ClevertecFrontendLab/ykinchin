import CustomButton from '@components/customButton/CustomButton';
import { useAppDispatch } from '@hooks/reduxHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import { toggleNewFeedback } from '@redux/slices/feedbackSlice';

const NewFeedbackBtn = () => {
    const isMobile = useMediaQuery('(max-width:425px)');
    const dispatch = useAppDispatch();

    return (
        <CustomButton
            block={isMobile && true}
            size='large'
            type='primary'
            style={{ backgroundColor: '#2F54EB', fontSize: 14 }}
            onClick={() => dispatch(toggleNewFeedback(true))}
            test='write-review'
        >
            Написать отзыв
        </CustomButton>
    );
};

export default NewFeedbackBtn;
