import { Navigate } from 'react-router-dom';

import ResultCard from '@components/resultCard/ResultCard';
import { PATHS } from '@constants/PATHS';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import usePrevLocation from '@hooks/usePrevLocation';
import { history } from '@redux/configure-store';
import { registration } from '@redux/thunks/registerUser';
import { selectEmail, selectPassword } from '@redux/userSlice/selectors';

const ErrorRetryReg = () => {
    const prevLocation = usePrevLocation();
    const dispatch = useAppDispatch();
    const email = useAppSelector(selectEmail);
    const password = useAppSelector(selectPassword);

    const onRetryHandler = async () => {
        history.back();
        if (email && password) {
            await dispatch(registration({ email, password }));
        }
    };

    if (prevLocation !== PATHS.registration) {
        return <Navigate to={PATHS.auth} />;
    }

    return (
        <>
            <ResultCard
                status='error'
                resultTitle='Данные не сохранились'
                resultDescription={
                    <>
                        Что-то пошло не так и ваша регистрация
                        <p style={{ marginBottom: 0 }}> не завершилась. Попробуйте ещё раз.</p>
                    </>
                }
                btnText='Повторить'
                onClick={onRetryHandler}
                test='registration-retry-button'
            />
        </>
    );
};

export default ErrorRetryReg;
