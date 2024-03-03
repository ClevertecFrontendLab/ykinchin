import { Card, Result } from 'antd';
import { Navigate } from 'react-router-dom';

import CustomButton from '@components/customButton/CustomButton';
import { PATHS } from '@constants/PATHS';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import usePrevLocation from '@hooks/usePrevLocation';
import { history } from '@redux/configure-store';
import { checkEmail } from '@redux/thunks/checkEmail';

const ErrorEmailCheck = () => {
    const prevLocation = usePrevLocation();
    const dispatch = useAppDispatch();
    const { email } = useAppSelector((state) => state.user);

    const onRetunHandler = async () => {
        if (email) {
            history.back();
            await dispatch(checkEmail(email));
        }
    };

    if (prevLocation !== PATHS.auth) {
        return <Navigate to={PATHS.auth} />;
    }

    return (
        <Card bordered={false} bodyStyle={{ padding: '58px 0' }}>
            <Result
                style={{ padding: 0 }}
                status='500'
                title='Что-то пошло не так'
                subTitle='Произошла ошибка, попробуйте отправить форму ещё раз.'
                extra={[
                    <CustomButton
                        test='check-back-button'
                        size='large'
                        type='primary'
                        onClick={onRetunHandler}
                        key='check-back-btn'
                    >
                        Назад
                    </CustomButton>,
                ]}
            />
        </Card>
    );
};

export default ErrorEmailCheck;
