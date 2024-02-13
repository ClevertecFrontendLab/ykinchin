import { Layout, Typography } from 'antd';
import { FC, useState } from 'react';
import CustomButton from '../../../../shared/components/customButton/CustomButton';
import IconWrapper from '../../../../shared/components/icons/IconWrapper';
import FullLogo from '../../../../shared/components/icons/svgs/FullLogo';
import Logout from '../../../../shared/components/icons/svgs/Logout';
import ShortLogo from '../../../../shared/components/icons/svgs/ShortLogo';
import useMediaQuery from '../../../../shared/hooks/useMediaQuery';
import MenuToggler from './components/menuToggler/MenuToggler';
import SideMenu from './components/sideMenu/SideMenu';
import styles from './sidebar.module.scss';

const Sidebar: FC = () => {
    const [isOpened, setIsOpened] = useState(false);
    const isBelowMediumScreen = useMediaQuery('(max-width:640px)');
    const isMobile = useMediaQuery('(max-width:425px)');

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
        <Sider width={sideBarWidth}>
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
