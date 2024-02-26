import { Divider } from 'antd';
import { FC } from 'react';

import CustomButton from '@components/customButton/CustomButton';
import IconWrapper from '@components/icons/IconWrapper';
import Logout from '@components/icons/svgs/Logout';

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
