import { Divider } from 'antd';
import { FC } from 'react';
import CustomButton from '../../../../../../shared/components/customButton/CustomButton';
import IconWrapper from '../../../../../../shared/components/icons/IconWrapper';
import Logout from '../../../../../../shared/components/icons/svgs/Logout';

const LogoutBtn: FC = () => {
    return (
        <div>
            <Divider />
            <CustomButton icon={<IconWrapper icon={Logout} style={{ width: 15 }} />}>
                Выход
            </CustomButton>
        </div>
    );
};

export default LogoutBtn;
