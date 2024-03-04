import { Layout, PageHeader } from 'antd';

import { SettingOutlined } from '@ant-design/icons';
import CustomButton from '@components/customButton/CustomButton';
import useMediaQuery from '@hooks/useMediaQuery';

import styles from './header.module.scss';

const Header = () => {
    const isBelowMediumScreen = useMediaQuery('(min-width:834px)');
    const isMobile = useMediaQuery('(max-width:425px)');

    const { Header } = Layout;

    const buttonStyle = isMobile
        ? {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '100%',
              height: 32,
              width: 32,
          }
        : {
              display: 'flex',
              alignItems: 'center',
              gap: 2,
          };

    return (
        <Header className={styles.header}>
            <PageHeader
                title={
                    isMobile ? (
                        <>
                            Приветствуем тебя
                            <p className={styles.newLineText}>
                                в CleverFit — приложении, которое поможет тебе добиться своей мечты!
                            </p>
                        </>
                    ) : isBelowMediumScreen ? (
                        <>
                            Приветствуем тебя в CleverFit — приложении,
                            <p className={styles.newLineText}>
                                которое поможет тебе добиться своей мечты!
                            </p>
                        </>
                    ) : (
                        <>
                            Приветствуем тебя в CleverFit — приложении, которое поможет тебе
                            добиться своей мечты!
                        </>
                    )
                }
                style={{ fontSize: 20 }}
                subTitle={
                    <CustomButton
                        type={isMobile ? 'default' : 'text'}
                        icon={<SettingOutlined />}
                        style={buttonStyle}
                    >
                        Настройки
                    </CustomButton>
                }
            />
        </Header>
    );
};

export default Header;
