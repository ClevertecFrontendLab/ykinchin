import { CalendarTwoTone, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import useMediaQuery from '@hooks/useMediaQuery';
import { Menu, MenuProps, Typography } from 'antd';
import { FC } from 'react';
import { TMenuButton } from 'src/shared/types';
import styles from './sideMenu.module.scss';

const menuData: TMenuButton[] = [
    {
        key: 1,
        icon: <CalendarTwoTone twoToneColor={['#061178', '#061178']} />,
        buttonText: 'Календарь',
    },
    { key: 2, icon: <HeartFilled />, buttonText: 'Тренировки' },
    { key: 3, icon: <TrophyFilled />, buttonText: 'Достижения' },
    { key: 4, icon: <IdcardOutlined />, buttonText: 'Профиль' },
];

interface SideMenuProps {
    isOpened: boolean;
}

const SideMenu: FC<SideMenuProps> = ({ isOpened }) => {
    const isMobile = useMediaQuery('(max-width:425px)');

    const { Text } = Typography;

    const items: MenuProps['items'] = menuData.map((item) => ({
        key: String(item.key),
        icon: item.icon,
        label: <Text style={{ display: isOpened ? 'inline' : 'none' }}>{item.buttonText}</Text>,
    }));

    return (
        <Menu
            mode='vertical'
            items={items}
            className={isOpened ? styles.menu : styles.menuCollapsed}
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: `${isMobile ? '2px' : '4px'}`,
                justifyContent: 'space-between',
            }}
        />
    );
};

export default SideMenu;
