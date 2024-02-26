import ResultCard from '@components/resultCard/ResultCard';
import { PATHS } from '@constants/PATHS';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import usePrevLocation from '@hooks/usePrevLocation';
import { changePassword } from '@redux/thunks/changePassword';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const ErrorChangePassword: FC = () => {
    const prevLocation = usePrevLocation();
    const dispatch = useAppDispatch();
    const password = useAppSelector((state) => state.user.password as string);
    const onRetryHandler = async () => {
        history.back();
        await dispatch(changePassword({ password, confirmPassword: password }));
    };

    if (prevLocation !== PATHS.changePassword) {
        return <Navigate to='/' />;
    }

    return (
        <ResultCard
            status='error'
            resultTitle='Данные не сохранились'
            resultDescription='Что-то пошло не так. Попробуйте ещё раз'
            btnText='Повторить'
            onClick={onRetryHandler}
            test='change-retry-button'
        />
    );
};

export default ErrorChangePassword;
