import { Layout, Typography } from 'antd';
import { useState } from 'react';

import CustomButton from '@components/customButton/CustomButton';
import IconWrapper from '@components/icons/IconWrapper';
import FullLogo from '@components/icons/svgs/FullLogo';
import Logout from '@components/icons/svgs/Logout';
import ShortLogo from '@components/icons/svgs/ShortLogo';
import { useAppDispatch } from '@hooks/reduxHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import { logout } from '@redux/authSlice/authSlice';
import { history } from '@redux/configure-store';

import MenuToggler from './components/menuToggler/MenuToggler';
import SideMenu from './components/sideMenu/SideMenu';

import styles from './sidebar.module.scss';

const Sidebar = () => {
    const [isOpened, setIsOpened] = useState(false);
    const dispatch = useAppDispatch();
    const isBelowMediumScreen = useMediaQuery('(max-width:640px)');
    const isMobile = useMediaQuery('(max-width:425px)');

    const onLogoutHandler = () => {
        dispatch(logout());
        history.replace('/auth');
    };

    const { Sider } = Layout;
    const { Text } = Typography;

    const sideBarWidth = isBelowMediumScreen
        ? isOpened
            ? '106px'
            : '0'
        : isOpened
        ? '208px'
        : '64px';

    return (
        <Sider width={sideBarWidth} style={{ minHeight: '100%' }}>
            <div className={styles.wrapper}>
                <div className={styles.topMenu}>
                    <IconWrapper
                        icon={isOpened ? FullLogo : ShortLogo}
                        className={isOpened ? styles.logo : styles.logoCollapsed}
                    />
                    <SideMenu isOpened={isOpened} />
                </div>
                <CustomButton
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: `${isMobile ? 'center' : 'start'}`,
                        borderTop: '1px solid rgba(140, 140, 140,0.2)',
                        fontWeight: 500,
                        height: 40,
                        padding: '0px 16px',
                    }}
                    onClick={onLogoutHandler}
                    icon={
                        !isMobile && (
                            <IconWrapper
                                icon={Logout}
                                style={{ minWidth: 14, width: 14, marginRight: 19 }}
                            />
                        )
                    }
                >
                    <Text style={{ display: isOpened ? 'inline' : 'none' }}>Выход</Text>
                </CustomButton>
            </div>
            <MenuToggler setIsOpened={setIsOpened} isOpened={isOpened} />
        </Sider>
    );
};

export default Sidebar;
