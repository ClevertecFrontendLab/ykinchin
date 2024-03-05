import ResultCard from '@components/resultCard/ResultCard';
import { PATHS } from '@constants/PATHS';
import usePrevLocation from '@hooks/usePrevLocation';
import { history } from '@redux/configure-store';

const SuccessChangePassword = () => {
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
                    <p style={{ marginBottom: 0 }}> свой e-mail и пароль</p>
                </>
            }
            btnText='Вход'
            onClick={() => history.replace(PATHS.auth)}
            test='change-entry-button'
        />
    );
};

export default SuccessChangePassword;
