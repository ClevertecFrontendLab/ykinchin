import { Menu, MenuProps, Typography } from 'antd';
import { TMenuButton } from 'src/shared/types';

import { CalendarTwoTone, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import useMediaQuery from '@hooks/useMediaQuery';

import s from './sideMenu.module.scss';

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

type Props = {
    isOpened: boolean;
};

const SideMenu = ({ isOpened }: Props) => {
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
            className={isOpened ? s.menu : s.menuCollapsed}
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
