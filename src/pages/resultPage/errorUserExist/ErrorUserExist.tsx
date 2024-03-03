import { Navigate } from 'react-router-dom';

import ResultCard from '@components/resultCard/ResultCard';
import { PATHS } from '@constants/PATHS';
import usePrevLocation from '@hooks/usePrevLocation';

const ErrorUserExist = () => {
    const prevLocation = usePrevLocation();

    if (prevLocation !== PATHS.registration) {
        return <Navigate to={PATHS.auth} />;
    }

    return (
        <ResultCard
            status='error'
            resultTitle='Данные не сохранились'
            resultDescription=' Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.'
            btnText='Назад к регистрации'
            onClick={() => history.back()}
            test='registration-back-button'
        />
    );
};

export default ErrorUserExist;
