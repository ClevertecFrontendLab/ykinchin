import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import s from './menuToggler.module.scss';

type Props = {
    setIsOpened: (isOpened: boolean) => void;
    isOpened: boolean;
};

const MenuToggler = ({ setIsOpened, isOpened }: Props) => {
    return (
        <div
            className={s.wrapper}
            onClick={() => setIsOpened(!isOpened)}
            data-test-id='sider-switch'
        >
            <div className={s.figure} data-test-id='sider-switch-mobile'>
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
