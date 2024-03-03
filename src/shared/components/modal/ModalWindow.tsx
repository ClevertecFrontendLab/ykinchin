import { Modal } from 'antd';
import { FC } from 'react';

import useMediaQuery from '@hooks/useMediaQuery';

import s from './modalWindow.module.scss';

type ModalProps = {
    children: React.ReactNode;
    footer?: React.ReactNode;
    open: boolean;
    title?: string | React.ReactNode;
    closable?: boolean;
    onCancel?: () => void;
};

const ModalWindow: FC<ModalProps> = ({
    children,
    footer = '',
    open,
    title,
    closable = false,
    onCancel,
}) => {
    const isMobile = useMediaQuery('(max-width:425px)');

    return (
        <Modal
            centered
            open={open}
            closable={closable}
            onCancel={onCancel}
            footer={footer}
            width={isMobile ? 328 : 530}
            title={title}
            bodyStyle={{
                padding: 0,
                display: 'flex',
                justifyContent: 'center',
            }}
            wrapClassName={s.modalWrap}
            maskStyle={{
                backdropFilter: 'blur(5px)',
                background: 'rgba(121, 156, 212, 0.5)',
            }}
        >
            {children}
        </Modal>
    );
};

export default ModalWindow;
