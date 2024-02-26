import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import ResultCard from '@components/resultCard/ResultCard';
import { PATHS } from '@constants/PATHS';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import usePrevLocation from '@hooks/usePrevLocation';
import { history } from '@redux/configure-store';
import { registration } from '@redux/thunks/registerUser';

const ErrorRetryReg: FC = () => {
    const prevLocation = usePrevLocation();
    const dispatch = useAppDispatch();
    const { email, password } = useAppSelector((state) => state.user);

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
                        Что-то пошло не так и ваша регистрация <br /> не завершилась. Попробуйте ещё
                        раз.
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
