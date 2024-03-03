import { FC } from 'react';
import { List } from 'antd';
import { IFeedback } from 'src/shared/types/feedbackType';

import FeedbackItem from '../feedbackItem/FeedbackItem';

type FeedbackListProps = {
    feedbacks: IFeedback[];
    showAllFeedback: boolean;
};

const FeedbackList: FC<FeedbackListProps> = ({ feedbacks, showAllFeedback }) => {
    const sortedFeedbacks = [...feedbacks].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

    return (
        <List
            style={{
                overflowY: showAllFeedback ? 'scroll' : 'initial',
                marginBottom: showAllFeedback ? 20 : 0,
            }}
            dataSource={showAllFeedback ? sortedFeedbacks : sortedFeedbacks.slice(0, 4)}
            renderItem={(feedback) => (
                <List.Item key={feedback.id} style={{ border: 0, padding: 0, marginBottom: 20 }}>
                    <FeedbackItem feedback={feedback} />
                </List.Item>
            )}
        />
    );
};

export default FeedbackList;
