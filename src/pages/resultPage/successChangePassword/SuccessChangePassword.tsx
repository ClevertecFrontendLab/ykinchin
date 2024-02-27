import { FC } from 'react';

import ResultCard from '@components/resultCard/ResultCard';
import { PATHS } from '@constants/PATHS';
import usePrevLocation from '@hooks/usePrevLocation';
import { history } from '@redux/configure-store';

const SuccessChangePassword: FC = () => {
    const prevLocation = usePrevLocation();

    if (prevLocation !== PATHS.changePasswordError && prevLocation !== PATHS.changePassword) {
        console.log(prevLocation);
    }

    return (
        <ResultCard
            status='success'
            resultTitle='Пароль успешно изменен'
            resultDescription={
                <>
                    Теперь можно войти в аккаунт, используя
                    <br /> свой e-mail и пароль
                </>
            }
            btnText='Вход'
            onClick={() => history.replace(PATHS.auth)}
            test='change-entry-button'
        />
    );
};

export default SuccessChangePassword;
