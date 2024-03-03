import { Space } from 'antd';
import { useEffect, useState } from 'react';

import CustomButton from '@components/customButton/CustomButton';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import { getFeedbacks } from '@redux/thunks/getFeedbacks';

import EmptyPage from './components/emptyPage/EmptyPage';
import FeedbackList from './components/feedbackList/FeedbackList';
import ModalError from './components/modalError/ModalError';
import ModalErrorPost from './components/modalErrorPost/ModalErrorPost';
import ModalSuccessPost from './components/modalSuccessPost/ModalSuccessPost';
import NewFeedbackBtn from './components/newFeedbackBtn/NewFeedbackBtn';
import NewFeedbackModal from './components/newFeedbackModal/NewFeedbackModal';

import s from './feedbacks.module.scss';

const Feedbacks = () => {
    const isMobile = useMediaQuery('(max-width:425px)');
    const [showAllFeedback, setShowAllFeedback] = useState(false);
    const dispatch = useAppDispatch();
    const feedbacks = useAppSelector((state) => state.feedback.feedbacks);

    useEffect(() => {
        dispatch(getFeedbacks());
    }, [dispatch]);

    return (
        <div style={{ height: '100%' }}>
            {feedbacks && feedbacks.length > 0 ? (
                <div className={` ${s.wrapper} ${showAllFeedback ? s.listFull : s.listShort}`}>
                    <FeedbackList feedbacks={feedbacks} showAllFeedback={showAllFeedback} />
                    <Space direction={isMobile ? 'vertical' : 'horizontal'}>
                        <NewFeedbackBtn />
                        <CustomButton
                            block={isMobile && true}
                            size='large'
                            type='link'
                            style={{ color: '#2F54EB' }}
                            onClick={() => setShowAllFeedback(!showAllFeedback)}
                            test='all-reviews-button'
                        >
                            {showAllFeedback ? 'Свернуть все отзывы' : 'Развернуть все отзывы'}
                        </CustomButton>
                    </Space>
                </div>
            ) : (
                <EmptyPage />
            )}
            <ModalSuccessPost />
            <ModalErrorPost />
            <NewFeedbackModal />
            <ModalError />
        </div>
    );
};

export default Feedbacks;
