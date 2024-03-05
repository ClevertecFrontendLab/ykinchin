import React from 'react';
import { Card, Result } from 'antd';
import { ResultStatusType } from 'antd/lib/result';

import CustomButton from '@components/customButton/CustomButton';

type Props = {
    resultImg: React.ReactNode;
    resultTitle: React.ReactNode;
    resultDescription: React.ReactNode;
    btnText: string;
    onClick: () => void;
    children: React.ReactNode;
    status: ResultStatusType;
    bodyStyle: React.CSSProperties;
    resultStyle: React.CSSProperties;
    test: string;
};

const ResultCard = ({
    resultTitle,
    resultDescription,
    btnText,
    onClick,
    children,
    status,
    bodyStyle = { padding: 0 },
    test,
    resultStyle,
}: Partial<Props>) => (
    <Card bordered={false} bodyStyle={bodyStyle}>
        <Result
            style={resultStyle}
            title={resultTitle}
            status={status}
            subTitle={resultDescription}
            extra={[
                <React.Fragment key='fragment'>{children}</React.Fragment>,
                btnText && (
                    <CustomButton
                        test={test}
                        block
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

export default ResultCard;
