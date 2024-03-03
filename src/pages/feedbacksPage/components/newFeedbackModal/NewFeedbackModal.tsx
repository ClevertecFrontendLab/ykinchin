import CustomButton from '@components/customButton/CustomButton';
import CustomRate from '@components/customRate/CustomRate';
import ModalWindow from '@components/modal/ModalWindow';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import { toggleNewFeedback } from '@redux/slices/feedbackSlice';
import { postFeedback } from '@redux/thunks/postFeedback';
import { Form, Input, Space } from 'antd';
import { FC, useState } from 'react';

type Feedback = {
    message: string;
    rating: number;
};

const NewFeedbackModal: FC = () => {
    const isMobile = useMediaQuery('(max-width:425px)');
    const dispatch = useAppDispatch();
    const [feedback, setFeedback] = useState<Feedback>({ message: '', rating: 0 });
    const isOpened = useAppSelector((state) => state.feedback.isNewFeedbackModalOpened as boolean);

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

    return (
        <ModalWindow
            open={isOpened}
            onCancel={() => dispatch(toggleNewFeedback(false))}
            closable={true}
            title='Ваш отзыв'
            footer={[
                <CustomButton
                    block={isMobile && true}
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
            <Form style={{ padding: '14px 24px 24px' }}>
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
