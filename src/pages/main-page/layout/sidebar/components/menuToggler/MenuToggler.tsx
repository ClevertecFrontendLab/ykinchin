import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { FC } from 'react';

import styles from './menuToggler.module.scss';

interface TogglerProps {
    setIsOpened: (isOpened: boolean) => void;
    isOpened: boolean;
}

const MenuToggler: FC<TogglerProps> = ({ setIsOpened, isOpened }) => {
    return (
        <div
            className={styles.wrapper}
            onClick={() => setIsOpened(!isOpened)}
            data-test-id='sider-switch'
        >
            <div className={styles.figure} data-test-id='sider-switch-mobile'>
                {isOpened ? (
                    <MenuFoldOutlined style={{ transform: 'rotate(-90deg)', color: '#8C8C8C' }} />
                ) : (
                    <MenuUnfoldOutlined style={{ transform: 'rotate(-90deg)', color: '#8C8C8C' }} />
                )}
            </div>
        </div>
    );
};

export default MenuToggler;
