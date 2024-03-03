import { Layout, PageHeader } from 'antd';

import { SettingOutlined } from '@ant-design/icons';
import CustomButton from '@components/customButton/CustomButton';
import useMediaQuery from '@hooks/useMediaQuery';

import s from './header.module.scss';

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
        <Header className={s.header}>
            <PageHeader
                title={
                    isMobile ? (
                        <>
                            Приветствуем тебя <br />в CleverFit — приложении, которое поможет тебе
                            добиться своей мечты!
                        </>
                    ) : isBelowMediumScreen ? (
                        <>
                            Приветствуем тебя в CleverFit — приложении, <br />
                            которое поможет тебе добиться своей мечты!
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
