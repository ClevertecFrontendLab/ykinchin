import CustomButton from '@components/customButton/CustomButton';
import { Card, Result } from 'antd';
import { ResultStatusType } from 'antd/lib/result';
import React, { FC } from 'react';

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
    // const { Title, Text } = Typography;

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

        //         {children}
        //         {btnText && (
        //             <CustomButton
        //                 onClick={onClick}
        //                 size='large'
        //                 type='primary'
        //                 className={styles.btn}
        //             >
        //                 {btnText}
        //             </CustomButton>
        //         )}
        //     </Space>
        // </Card>
    );
};

export default ResultCard;
