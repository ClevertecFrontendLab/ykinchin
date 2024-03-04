import { Navigate } from 'react-router-dom';

import ResultCard from '@components/resultCard/ResultCard';
import { PATHS } from '@constants/PATHS';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import usePrevLocation from '@hooks/usePrevLocation';
import { changePassword } from '@redux/thunks/changePassword';
import { selectPassword } from '@redux/userSlice/selectors';

const ErrorChangePassword = () => {
    const prevLocation = usePrevLocation();
    const dispatch = useAppDispatch();
    const password = useAppSelector(selectPassword) as string;

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
