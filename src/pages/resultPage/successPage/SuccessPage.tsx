import { Navigate } from 'react-router-dom';

import { PATHS } from '@constants/PATHS';
import usePrevLocation from '@hooks/usePrevLocation';
import { history } from '@redux/configure-store';

import ResultCard from '../../../shared/components/resultCard/ResultCard';

const SuccessPage = () => {
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
                    <p style={{ marginBottom: 0 }}>
                        {' '}
                        в приложение, используя свой e-mail и пароль.
                    </p>
                </>
            }
            btnText='Войти'
            onClick={() => history.push(PATHS.auth)}
            test='registration-enter-button'
        />
    );
};

export default SuccessPage;
