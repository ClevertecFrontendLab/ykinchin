import { useState } from 'react';
import { Form, Input, Space } from 'antd';

import CustomButton from '@components/customButton/CustomButton';
import CustomRate from '@components/customRate/CustomRate';
import ModalWindow from '@components/modal/ModalWindow';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import { toggleNewFeedback } from '@redux/feedbackSlice/feedbackSlice';
import { selectIsNewFeedbackModal } from '@redux/feedbackSlice/selectors';
import { postFeedback } from '@redux/thunks/postFeedback';

type Feedback = {
    message: string;
    rating: number;
};

const NewFeedbackModal = () => {
    const isMobile = useMediaQuery('(max-width:425px)');
    const dispatch = useAppDispatch();
    const [feedback, setFeedback] = useState<Feedback>({ message: '', rating: 0 });
    const isOpened = useAppSelector(selectIsNewFeedbackModal);

    const onRatingChangeHandler = (value: number) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            rating: value,
        }));
    };

    const onMessageChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            message: value,
        }));
    };

    const onPostHandler = () => {
        dispatch(postFeedback(feedback));
    };

    const onCancelHandler = () => dispatch(toggleNewFeedback(false));

    return (
        <ModalWindow
            open={isOpened}
            onCancel={onCancelHandler}
            closable={true}
            title='Ваш отзыв'
            footer={[
                <CustomButton
                    block={isMobile}
                    onClick={onPostHandler}
                    key='publish'
                    type='primary'
                    size='large'
                    style={{ backgroundColor: '#2F54EB', borderColor: '#2F54EB', fontSize: 15 }}
                    test='new-review-submit-button'
                >
                    Опубликовать
                </CustomButton>,
            ]}
        >
            <Form style={{ padding: '14px 24px 24px', width: '100%' }}>
                <Space direction='vertical' size='middle' style={{ width: '100%' }}>
                    <Form.Item required noStyle>
                        <CustomRate
                            disabled={false}
                            fontsize={22}
                            onChange={onRatingChangeHandler}
                            rating={feedback.rating}
                        />
                    </Form.Item>
                    <Form.Item name='feedback' noStyle>
                        <Input.TextArea
                            autoSize={{ minRows: 2 }}
                            placeholder='Autosize height based on content lines'
                            onChange={onMessageChangeHandler}
                        />
                    </Form.Item>
                </Space>
            </Form>
        </ModalWindow>
    );
};

export default NewFeedbackModal;
