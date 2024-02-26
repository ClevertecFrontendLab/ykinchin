import ResultCard from '@components/resultCard/ResultCard';
import { PATHS } from '@constants/PATHS';
import usePrevLocation from '@hooks/usePrevLocation';
import { history } from '@redux/configure-store';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const ErrorLogin: FC = () => {
    const prevLocation = usePrevLocation();

    if (prevLocation !== PATHS.auth) {
        return <Navigate to={PATHS.auth} />;
    }

    return (
        <ResultCard
            status='warning'
            resultTitle='Вход не выполнен'
            resultDescription='Что-то пошло не так. Попробуйте еще раз'
            btnText='Повторить'
            onClick={() => history.replace(PATHS.auth)}
            test='login-retry-button'
        />
    );
};

export default ErrorLogin;
