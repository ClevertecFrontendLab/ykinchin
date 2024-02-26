import { PATHS } from '@constants/PATHS';
import usePrevLocation from '@hooks/usePrevLocation';
import { history } from '@redux/configure-store';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import ResultCard from '../../../shared/components/resultCard/ResultCard';

const SuccessPage: FC = () => {
    const prevLocation = usePrevLocation();

    if (prevLocation !== PATHS.registration) {
        return <Navigate to={PATHS.auth} />;
    }

    return (
        <ResultCard
            status='success'
            resultTitle='Регистрация успешна'
            resultDescription={
                <>
                    Регистрация прошла успешно. Зайдите
                    <br /> в приложение, используя свой e-mail и пароль.
                </>
            }
            btnText='Войти'
            onClick={() => history.push(PATHS.auth)}
            test='registration-enter-button'
        />
    );
};

export default SuccessPage;
