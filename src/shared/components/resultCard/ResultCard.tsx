import { Card, Result } from 'antd';
import { ResultStatusType } from 'antd/lib/result';
import React, { FC } from 'react';

import CustomButton from '@components/customButton/CustomButton';

interface ResultCardProps {
    resultImg: React.ReactNode;
    resultTitle: React.ReactNode;
    resultDescription: React.ReactNode;
    btnText: string;
    onClick: () => void;
    children?: React.ReactNode;
    status?: ResultStatusType;
    bodyStyle?: React.CSSProperties;
    test: string;
}

const ResultCard: FC<Partial<ResultCardProps>> = ({
    resultTitle,
    resultDescription,
    btnText,
    onClick,
    children,
    status,
    bodyStyle = { padding: 0 },
    test,
}) => {
    return (
        <Card bordered={false} bodyStyle={bodyStyle}>
            <Result
                title={resultTitle}
                status={status}
                subTitle={resultDescription}
                extra={[
                    <React.Fragment key='fragment'>{children}</React.Fragment>,
                    btnText && (
                        <CustomButton
                            test={test}
                            block={true}
                            onClick={onClick}
                            size='large'
                            type='primary'
                            key='btn'
                        >
                            {btnText}
                        </CustomButton>
                    ),
                ]}
            />
        </Card>
    );
};

export default ResultCard;
